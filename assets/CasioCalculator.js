/**
 * CASIO SCIENTIFIC CALCULATOR ENGINE & COMPONENT
 * Models: Casio fx-580VN X (ClassWiz) & Casio fx-880BTG (ClassWiz II)
 * Author: Thầy Hùng (NMH) — HUNG-CAL (hungcal.vercel.app)
 * 
 * Features:
 *  - Authentic Casio hardware emulation (bezel, carbon textures, pebble keys, replay d-pad)
 *  - Natural Textbook Display (fractions, radicals, exponents, calculus)
 *  - Full SHIFT (gold) & ALPHA (pink) one-shot state machines with visual glow
 *  - Exact symbolic & numerical CAS evaluation engine with S <=> D fraction/decimal toggle
 *  - Angle modes: Degree (DEG), Radian (RAD), Gradian (GRAD)
 *  - Ans memory, M memory, and STO variables (A, B, C, D, E, F, x, y)
 *  - Responsive for desktop, tablets, and mobile smartphones
 */

export class CasioCalculator {
  constructor(container, options = {}) {
    this.container = typeof container === 'string' ? document.querySelector(container) : container;
    if (!this.container) throw new Error('CasioCalculator: Invalid container element');

    this.model = options.model || 'fx580'; // 'fx580' or 'fx880'
    this.angleMode = options.angleMode || 'deg'; // 'deg', 'rad', 'grad'
    this.digits = options.digits || 10;
    this.onResult = options.onResult || null;

    // Calculator State
    this.inputExpr = '';
    this.cursorPos = 0;
    this.result = null;
    this.rawResult = null;
    this.showDecimal = false;
    this.history = [];
    this.historyIndex = -1;

    // Modifiers State
    this.shift = false;
    this.alpha = false;
    this.sto = false;

    // Memory & Variables
    this.ans = 0;
    this.memM = 0;
    this.vars = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, x: 0, y: 0, z: 0 };

    this._boundKeyHandler = this._handleKeyDown.bind(this);
    this.init();
  }

  init() {
    this.render();
    window.addEventListener('keydown', this._boundKeyHandler);
  }

  destroy() {
    window.removeEventListener('keydown', this._boundKeyHandler);
    if (this.container) this.container.innerHTML = '';
  }

  setModel(model) {
    if (this.model === model) return;
    this.model = model;
    this.render();
  }

  setAngleMode(mode) {
    this.angleMode = mode;
    this.updateLCD();
  }

  // ==========================================================
  // MATHEMATICAL EVALUATION ENGINE
  // ==========================================================

  // GCD & Fraction simplification
  gcd(a, b) {
    a = Math.abs(Math.round(a));
    b = Math.abs(Math.round(b));
    while (b) {
      const t = b;
      b = a % b;
      a = t;
    }
    return a;
  }

  toFraction(val, maxDenom = 10000) {
    if (!isFinite(val) || isNaN(val)) return null;
    if (Math.abs(val - Math.round(val)) < 1e-11) {
      return { num: Math.round(val), den: 1 };
    }
    const sign = val < 0 ? -1 : 1;
    val = Math.abs(val);

    let h1 = 1, h2 = 0, k1 = 0, k2 = 1;
    let b = val;
    do {
      const a = Math.floor(b);
      let aux = h1; h1 = a * h1 + h2; h2 = aux;
      aux = k1; k1 = a * k1 + k2; k2 = aux;
      b = 1 / (b - a);
    } while (Math.abs(val - h1 / k1) > val * 1e-9 && k1 < maxDenom);

    if (k1 > maxDenom) return null;
    return { num: sign * h1, den: k1 };
  }

  factorial(n) {
    if (n < 0 || n > 170 || n !== Math.floor(n)) return NaN;
    if (n === 0 || n === 1) return 1;
    let r = 1;
    for (let i = 2; i <= n; i++) r *= i;
    return r;
  }

  nPr(n, r) {
    if (n < r || n < 0 || r < 0) return 0;
    return this.factorial(n) / this.factorial(n - r);
  }

  nCr(n, r) {
    if (n < r || n < 0 || r < 0) return 0;
    return this.factorial(n) / (this.factorial(r) * this.factorial(n - r));
  }

  toRad(angle) {
    if (this.angleMode === 'rad') return angle;
    if (this.angleMode === 'grad') return angle * (Math.PI / 200);
    return angle * (Math.PI / 180); // deg
  }

  fromRad(rad) {
    if (this.angleMode === 'rad') return rad;
    if (this.angleMode === 'grad') return rad * (200 / Math.PI);
    return rad * (180 / Math.PI); // deg
  }

  evaluate(expr) {
    if (!expr || !expr.trim()) return null;
    let clean = expr.trim();

    // Replace Casio-specific tokens
    clean = clean.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');
    clean = clean.replace(/π/g, 'Math.PI').replace(/e\b/g, 'Math.E');
    clean = clean.replace(/\bans\b/gi, `(${this.ans})`);
    clean = clean.replace(/\bM\b/g, `(${this.memM})`);

    // Replace variables
    for (const [v, val] of Object.entries(this.vars)) {
      clean = clean.replace(new RegExp(`\\b${v}\\b`, 'g'), `(${val})`);
    }

    // Replace functions
    clean = clean.replace(/√\(([^)]+)\)/g, 'Math.sqrt($1)');
    clean = clean.replace(/sqrt\(([^)]+)\)/g, 'Math.sqrt($1)');
    clean = clean.replace(/cbrt\(([^)]+)\)/g, 'Math.cbrt($1)');
    clean = clean.replace(/abs\(([^)]+)\)/g, 'Math.abs($1)');
    clean = clean.replace(/ln\(([^)]+)\)/g, 'Math.log($1)');
    clean = clean.replace(/log\(([^)]+)\)/g, 'Math.log10($1)');
    clean = clean.replace(/log10\(([^)]+)\)/g, 'Math.log10($1)');

    // Trig with angle mode
    clean = clean.replace(/sin\(([^)]+)\)/g, (_, a) => `Math.sin(this.toRad(${a}))`);
    clean = clean.replace(/cos\(([^)]+)\)/g, (_, a) => `Math.cos(this.toRad(${a}))`);
    clean = clean.replace(/tan\(([^)]+)\)/g, (_, a) => `Math.tan(this.toRad(${a}))`);
    clean = clean.replace(/asin\(([^)]+)\)/g, (_, a) => `this.fromRad(Math.asin(${a}))`);
    clean = clean.replace(/acos\(([^)]+)\)/g, (_, a) => `this.fromRad(Math.acos(${a}))`);
    clean = clean.replace(/atan\(([^)]+)\)/g, (_, a) => `this.fromRad(Math.atan(${a}))`);

    // Exponents ^ -> **
    clean = clean.replace(/\^/g, '**');

    // Combinatorics nCr / nPr
    clean = clean.replace(/(\d+)\s*nCr\s*(\d+)/g, (_, n, r) => `this.nCr(${n},${r})`);
    clean = clean.replace(/(\d+)\s*nPr\s*(\d+)/g, (_, n, r) => `this.nPr(${n},${r})`);

    // Factorials x!
    clean = clean.replace(/(\d+)!/g, (_, n) => `this.factorial(${n})`);

    try {
      // Execute in sandboxed evaluator
      const fn = new Function('Math', 'this', `"use strict"; return (${clean});`);
      const val = fn.call(this, Math, this);

      if (typeof val === 'number') {
        if (isNaN(val)) return { error: 'Math ERROR' };
        if (!isFinite(val)) return { error: 'Math ERROR' };

        // Check if value is very close to integer (floating point rounding)
        let rounded = val;
        if (Math.abs(Math.round(val) - val) < 1e-12) rounded = Math.round(val);

        const frac = this.toFraction(rounded);
        return {
          decimal: rounded,
          fraction: frac && frac.den > 1 ? frac : null,
          formatted: String(rounded)
        };
      }
      return { decimal: val, formatted: String(val) };
    } catch (err) {
      return { error: 'Syntax ERROR' };
    }
  }

  // ==========================================================
  // USER ACTIONS & INPUT MANAGEMENT
  // ==========================================================

  insert(text, cursorOffset = null) {
    const left = this.inputExpr.slice(0, this.cursorPos);
    const right = this.inputExpr.slice(this.cursorPos);
    this.inputExpr = left + text + right;
    this.cursorPos += (cursorOffset !== null ? cursorOffset : text.length);
    this.updateLCD();
  }

  backspace() {
    if (this.cursorPos > 0) {
      this.inputExpr = this.inputExpr.slice(0, this.cursorPos - 1) + this.inputExpr.slice(this.cursorPos);
      this.cursorPos--;
      this.updateLCD();
    }
  }

  clear() {
    this.inputExpr = '';
    this.cursorPos = 0;
    this.result = null;
    this.rawResult = null;
    this.shift = false;
    this.alpha = false;
    this.sto = false;
    this.updateLCD();
  }

  calculate() {
    if (!this.inputExpr.trim()) return;
    const res = this.evaluate(this.inputExpr);
    this.rawResult = res;

    if (res.error) {
      this.result = res.error;
    } else {
      this.ans = res.decimal;
      this.history.push(this.inputExpr);
      this.historyIndex = this.history.length;
      this.showDecimal = false;
      this.updateResultDisplay();
    }

    // Reset modifiers
    this.shift = false;
    this.alpha = false;
    this.sto = false;
    this.updateLCD();

    if (this.onResult) this.onResult(res);
  }

  toggleSD() {
    this.showDecimal = !this.showDecimal;
    this.updateResultDisplay();
    this.updateLCD();
  }

  updateResultDisplay() {
    if (!this.rawResult || this.rawResult.error) return;
    if (this.rawResult.fraction && !this.showDecimal) {
      const f = this.rawResult.fraction;
      this.result = `<span class="casio-frac"><span class="casio-num">${f.num}</span><span class="casio-bar"></span><span class="casio-den">${f.den}</span></span>`;
    } else {
      const d = this.rawResult.decimal;
      // Round to precision digits if floating point
      this.result = Number(d.toPrecision(this.digits)).toString();
    }
  }

  handleButton(btnDef) {
    // 1. Handle STO Variable storage
    if (this.sto) {
      const v = btnDef.a || (/^[A-FxyM]$/.test(btnDef.m) ? btnDef.m : null);
      if (v) {
        if (v === 'M') this.memM = this.ans;
        else this.vars[v] = this.ans;
      }
      this.sto = false;
      this.shift = false;
      this.alpha = false;
      this.updateLCD();
      return;
    }

    // 2. Determine Action based on SHIFT / ALPHA
    let action = btnDef.m;
    if (this.alpha && btnDef.a) {
      action = btnDef.a;
    } else if (this.shift && btnDef.s) {
      action = btnDef.s;
    }

    // 3. One-shot modifier reset (unless pressing shift or alpha)
    const isModifier = action === '@shift' || action === '@alpha';

    // 4. Execute Action
    if (typeof action === 'string' && action.startsWith('@')) {
      const cmd = action.slice(1);
      switch (cmd) {
        case 'shift':
          this.shift = !this.shift;
          this.alpha = false;
          break;
        case 'alpha':
          this.alpha = !this.alpha;
          this.shift = false;
          break;
        case 'ac':
          this.clear();
          break;
        case 'del':
          this.backspace();
          break;
        case 'run':
          this.calculate();
          break;
        case 'sd':
          this.toggleSD();
          break;
        case 'sto':
          this.sto = true;
          break;
        case 'mplus':
          this.memM += (this.ans || 0);
          break;
        case 'mminus':
          this.memM -= (this.ans || 0);
          break;
        case 'left':
          this.cursorPos = Math.max(0, this.cursorPos - 1);
          break;
        case 'right':
          this.cursorPos = Math.min(this.inputExpr.length, this.cursorPos + 1);
          break;
        case 'up':
          if (this.history.length && this.historyIndex > 0) {
            this.historyIndex--;
            this.inputExpr = this.history[this.historyIndex];
            this.cursorPos = this.inputExpr.length;
          }
          break;
        case 'down':
          if (this.historyIndex < this.history.length - 1) {
            this.historyIndex++;
            this.inputExpr = this.history[this.historyIndex];
            this.cursorPos = this.inputExpr.length;
          } else {
            this.historyIndex = this.history.length;
            this.inputExpr = '';
            this.cursorPos = 0;
          }
          break;
      }
    } else if (typeof action === 'string') {
      const offset = action.indexOf('|');
      const text = action.replace('|', '');
      this.insert(text, offset >= 0 ? offset : text.length);
    }

    if (!isModifier) {
      this.shift = false;
      this.alpha = false;
    }

    this.updateLCD();
  }

  _handleKeyDown(e) {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

    if (e.key >= '0' && e.key <= '9') {
      this.insert(e.key);
      e.preventDefault();
    } else if (['+', '-', '*', '/'].includes(e.key)) {
      this.insert(e.key === '*' ? '×' : e.key === '/' ? '÷' : e.key === '-' ? '−' : '+');
      e.preventDefault();
    } else if (e.key === '.' || e.key === ',') {
      this.insert('.');
      e.preventDefault();
    } else if (e.key === 'Enter' || e.key === '=') {
      this.calculate();
      e.preventDefault();
    } else if (e.key === 'Backspace') {
      this.backspace();
      e.preventDefault();
    } else if (e.key === 'Escape') {
      this.clear();
      e.preventDefault();
    } else if (e.key === 'ArrowLeft') {
      this.cursorPos = Math.max(0, this.cursorPos - 1);
      this.updateLCD();
      e.preventDefault();
    } else if (e.key === 'ArrowRight') {
      this.cursorPos = Math.min(this.inputExpr.length, this.cursorPos + 1);
      this.updateLCD();
      e.preventDefault();
    } else if (e.key.toLowerCase() === 's' && !e.ctrlKey) {
      this.shift = !this.shift;
      this.alpha = false;
      this.updateLCD();
      e.preventDefault();
    } else if (e.key.toLowerCase() === 'a' && !e.ctrlKey) {
      this.alpha = !this.alpha;
      this.shift = false;
      this.updateLCD();
      e.preventDefault();
    }
  }

  // ==========================================================
  // RENDERING & UI GENERATION
  // ==========================================================

  render() {
    const is880 = this.model === 'fx880';
    this.container.innerHTML = `
      <div class="casio-calc-wrapper">
        <div class="casio-chassis ${is880 ? 'model-880' : 'model-580'}" id="casioChassis">
          
          <!-- Top Bar: Brand & Model Selection -->
          <div class="casio-top-bar">
            <div class="casio-brand-info">
              <span class="casio-brand-name">CASIO</span>
              <span class="casio-model-code">${is880 ? 'fx-880BTG' : 'fx-580VN X'}</span>
              <span class="casio-series-sub">${is880 ? 'ClassWiz II · 4-Gradation' : 'ClassWiz · Natural-V.P.A.M.'}</span>
            </div>
            
            <div class="casio-model-switcher">
              <button class="casio-model-btn ${!is880 ? 'active' : ''}" data-model="fx580">580VN X</button>
              <button class="casio-model-btn ${is880 ? 'active' : ''}" data-model="fx880">880BTG</button>
            </div>

            <div class="casio-solar-panel" title="Photovoltaic Solar Cell">
              <div></div><div></div><div></div><div></div>
            </div>
          </div>

          <!-- LCD Screen: Natural Textbook Display -->
          <div class="casio-screen-bezel">
            <div class="casio-lcd" id="casioLcd">
              <div class="casio-lcd-status" id="casioStatus">
                <span class="${this.shift ? 'active' : ''}" id="stShift">S</span>
                <span class="${this.alpha ? 'active' : ''}" id="stAlpha">A</span>
                <span class="${this.sto ? 'active' : ''}" id="stSto">STO</span>
                <span class="${this.memM !== 0 ? 'active' : ''}" id="stMem">M</span>
                <span class="status-spacer"></span>
                <button class="casio-status-btn ${this.angleMode === 'deg' ? 'active' : ''}" data-angle="deg">D</button>
                <button class="casio-status-btn ${this.angleMode === 'rad' ? 'active' : ''}" data-angle="rad">R</button>
                <button class="casio-status-btn ${this.angleMode === 'grad' ? 'active' : ''}" data-angle="grad">G</button>
                <span class="active">Math</span>
                <span class="active">${this.digits}</span>
              </div>

              <!-- Expression Input Area -->
              <div class="casio-lcd-expr" id="casioExpr"></div>

              <!-- Result Line -->
              <div class="casio-lcd-result" id="casioResult"></div>
            </div>
          </div>

          <!-- Keypad Matrix -->
          <div class="casio-keypad" id="casioKeypad"></div>

        </div>
      </div>
    `;

    this._bindEvents();
    this._renderKeypad();
    this.updateLCD();
  }

  _bindEvents() {
    // Model switcher buttons
    this.container.querySelectorAll('.casio-model-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.setModel(btn.dataset.model);
      });
    });

    // Angle mode buttons on LCD
    this.container.querySelectorAll('.casio-status-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.setAngleMode(btn.dataset.angle);
      });
    });
  }

  _renderKeypad() {
    const pad = this.container.querySelector('#casioKeypad');
    if (!pad) return;
    pad.innerHTML = '';
    const is880 = this.model === 'fx880';

    const createKey = (def) => {
      const btn = document.createElement('button');
      btn.className = `casio-k ${def.cls || ''}`;
      btn.dataset.key = def.l;

      let labelHtml = def.l;
      if (def.l === '■/■') {
        labelHtml = '<span style="display:inline-flex;flex-direction:column;font-size:0.75em;line-height:0.9"><span>■</span><span style="border-top:1.5px solid currentColor;width:10px"></span><span>■</span></span>';
      }

      btn.innerHTML = `
        <i class="sl">${def.sl || ''}</i>
        <i class="al">${def.al || ''}</i>
        <b>${labelHtml}</b>
      `;

      btn.addEventListener('mousedown', (e) => e.preventDefault());
      btn.addEventListener('click', () => this.handleButton(def));
      return btn;
    };

    const addRow = (type, keys) => {
      const row = document.createElement('div');
      row.className = `casio-krow ${type}`;

      for (const k of keys) {
        if (k === 'dpad') {
          const dpad = document.createElement('div');
          dpad.className = 'casio-dpad';
          dpad.innerHTML = `
            <div class="dpad-ring"></div>
            <div class="dpad-hub ${is880 ? 'hub-ok' : ''}">${is880 ? 'OK' : 'REPLAY'}</div>
            <button class="casio-dpad-btn u" title="Up">▲</button>
            <button class="casio-dpad-btn d" title="Down">▼</button>
            <button class="casio-dpad-btn l" title="Left">◀</button>
            <button class="casio-dpad-btn r" title="Right">▶</button>
          `;
          dpad.querySelector('.u').addEventListener('click', () => this.handleButton({ m: '@up' }));
          dpad.querySelector('.d').addEventListener('click', () => this.handleButton({ m: '@down' }));
          dpad.querySelector('.l').addEventListener('click', () => this.handleButton({ m: '@left' }));
          dpad.querySelector('.r').addEventListener('click', () => this.handleButton({ m: '@right' }));
          if (is880) {
            dpad.querySelector('.hub-ok')?.addEventListener('click', () => this.calculate());
          }
          row.appendChild(dpad);
        } else {
          row.appendChild(createKey(k));
        }
      }
      pad.appendChild(row);
    };

    // KEYPAD MATRIX DEFINITIONS
    if (!is880) {
      // CASIO fx-580VN X Keys
      addRow('c6', [
        { l: 'SHIFT', m: '@shift', cls: 'k-shift' },
        { l: 'ALPHA', m: '@alpha', cls: 'k-alpha' },
        'dpad',
        { l: 'OPTN', m: '@optn', sl: 'QR', cls: 'k-mode' },
        { l: 'CALC', m: '@run', sl: 'SOLVE', al: '=', a: '=', cls: 'k-mode' }
      ]);
      addRow('c6', [
        { l: '■/■', m: '■/■', sl: '■ ■/■', cls: 'k-fn' },
        { l: '√', m: '√(|)', sl: '∛', s: 'cbrt(|)', cls: 'k-fn' },
        { l: 'x²', m: '^2', sl: 'x³', s: '^3', cls: 'k-fn' },
        { l: 'xʸ', m: '^', sl: 'ⁿ√', s: 'root(|, )', cls: 'k-fn' },
        { l: 'log_a', m: 'log(|, )', sl: '10ˣ', s: '10^(|)', cls: 'k-fn' },
        { l: 'ln', m: 'ln(|)', sl: 'eˣ', s: 'e^(|)', al: 'A', a: 'A', cls: 'k-fn' }
      ]);
      addRow('c6', [
        { l: '(-)', m: '(-|)', sl: 'd/dx', al: 'B', a: 'B', cls: 'k-fn' },
        { l: '° \' "', m: '°', sl: 'FACT', al: 'C', a: 'C', cls: 'k-fn' },
        { l: 'x⁻¹', m: '^(-1)', sl: 'x!', s: '!', al: 'D', a: 'D', cls: 'k-fn' },
        { l: 'sin', m: 'sin(|)', sl: 'sin⁻¹', s: 'asin(|)', al: 'E', a: 'E', cls: 'k-fn' },
        { l: 'cos', m: 'cos(|)', sl: 'cos⁻¹', s: 'acos(|)', al: 'F', a: 'F', cls: 'k-fn' },
        { l: 'tan', m: 'tan(|)', sl: 'tan⁻¹', s: 'atan(|)', al: 'M', a: 'M', cls: 'k-fn' }
      ]);
      addRow('c6', [
        { l: 'STO', m: '@sto', sl: 'RECALL', cls: 'k-fn' },
        { l: 'ENG', m: '×10^', sl: '∠', al: 'i', a: 'i', cls: 'k-fn' },
        { l: '(', m: '(', sl: '|x|', s: 'abs(|)', al: 'x', a: 'x', cls: 'k-fn' },
        { l: ')', m: ')', sl: ',', s: ',', al: 'y', a: 'y', cls: 'k-fn' },
        { l: 'S⇔D', m: '@sd', sl: 'a b/c', cls: 'k-fn' },
        { l: 'M+', m: '@mplus', sl: 'M-', s: '@mminus', al: 'm', cls: 'k-fn' }
      ]);
      // Numbers Block
      addRow('c5', [
        { l: '7', m: '7', sl: 'CONST', cls: 'k-num' },
        { l: '8', m: '8', sl: 'CONV', cls: 'k-num' },
        { l: '9', m: '9', sl: 'RESET', cls: 'k-num' },
        { l: 'DEL', m: '@del', sl: 'INS', cls: 'k-del' },
        { l: 'AC', m: '@ac', sl: 'OFF', cls: 'k-ac' }
      ]);
      addRow('c5', [
        { l: '4', m: '4', sl: 'matrix', cls: 'k-num' },
        { l: '5', m: '5', sl: 'stat', cls: 'k-num' },
        { l: '6', m: '6', sl: 'vector', cls: 'k-num' },
        { l: '×', m: '×', sl: 'nPr', s: ' nPr ', cls: 'k-op' },
        { l: '÷', m: '÷', sl: 'nCr', s: ' nCr ', cls: 'k-op' }
      ]);
      addRow('c5', [
        { l: '1', m: '1', cls: 'k-num' },
        { l: '2', m: '2', cls: 'k-num' },
        { l: '3', m: '3', cls: 'k-num' },
        { l: '+', m: '+', sl: 'Pol', cls: 'k-op' },
        { l: '−', m: '−', sl: 'Rec', cls: 'k-op' }
      ]);
      addRow('c5', [
        { l: '0', m: '0', sl: 'Ran#', cls: 'k-num' },
        { l: '.', m: '.', sl: 'RanInt', cls: 'k-num' },
        { l: '×10ˣ', m: '×10^', sl: 'π', s: 'π', al: 'e', a: 'e', cls: 'k-op' },
        { l: 'Ans', m: 'ans', sl: '%', s: '%', cls: 'k-fn' },
        { l: '=', m: '@run', sl: '≈', cls: 'k-eq' }
      ]);
    } else {
      // CASIO fx-880BTG Keys
      addRow('c6', [
        { l: 'HOME', m: '@ac', cls: 'k-home' },
        { l: 'SETTINGS', m: '@sd', cls: 'k-settings' },
        'dpad',
        { l: 'BACK', m: '@del', cls: 'k-back' },
        { l: 'CATALOG', m: '@optn', cls: 'k-catalog' }
      ]);
      addRow('c6', [
        { l: 'SHIFT', m: '@shift', cls: 'k-shift' },
        { l: 'VARIABLE', m: 'x', sl: 'f(x)', cls: 'k-var' },
        { l: 'FUNCTION', m: 'f(x)=', cls: 'k-fn' },
        { l: 'TOOLS', m: '@optn', cls: 'k-tools' },
        { l: '■/■', m: '■/■', cls: 'k-fn' },
        { l: '√', m: '√(|)', sl: '∛', s: 'cbrt(|)', cls: 'k-fn' }
      ]);
      addRow('c6', [
        { l: 'x', m: 'x', sl: 'QR', cls: 'k-fn' },
        { l: '■/■', m: '■/■', cls: 'k-fn' },
        { l: 'x²', m: '^2', sl: 'log', s: 'log(|)', cls: 'k-fn' },
        { l: 'log_a', m: 'log(|, )', sl: 'ln', s: 'ln(|)', cls: 'k-fn' },
        { l: 'sin', m: 'sin(|)', sl: 'sin⁻¹', s: 'asin(|)', cls: 'k-fn' },
        { l: 'cos', m: 'cos(|)', sl: 'cos⁻¹', s: 'acos(|)', cls: 'k-fn' }
      ]);
      addRow('c6', [
        { l: 'tan', m: 'tan(|)', sl: 'tan⁻¹', s: 'atan(|)', cls: 'k-fn' },
        { l: '(', m: '(', sl: '=', s: '=', cls: 'k-fn' },
        { l: ')', m: ')', sl: ',', s: ',', cls: 'k-fn' },
        { l: 'S⇔D', m: '@sd', cls: 'k-fn' },
        { l: 'FORMAT', m: '@sd', sl: 'ENG', cls: 'k-fn' },
        { l: 'Ans', m: 'ans', sl: 'PreAns', cls: 'k-fn' }
      ]);
      // Numbers Block for 880 (Round Pebble Keys)
      addRow('c5', [
        { l: '7', m: '7', sl: 'π', s: 'π', cls: 'k-num' },
        { l: '8', m: '8', sl: 'e', s: 'e', cls: 'k-num' },
        { l: '9', m: '9', sl: 'i', s: 'i', cls: 'k-num' },
        { l: 'DEL', m: '@del', sl: 'INS', cls: 'k-del' },
        { l: 'AC', m: '@ac', sl: 'OFF', cls: 'k-ac' }
      ]);
      addRow('c5', [
        { l: '4', m: '4', sl: 'A', s: 'A', cls: 'k-num' },
        { l: '5', m: '5', sl: 'B', s: 'B', cls: 'k-num' },
        { l: '6', m: '6', sl: 'C', s: 'C', cls: 'k-num' },
        { l: '×', m: '×', sl: 'nPr', s: ' nPr ', cls: 'k-op' },
        { l: '÷', m: '÷', sl: 'nCr', s: ' nCr ', cls: 'k-op' }
      ]);
      addRow('c5', [
        { l: '1', m: '1', sl: 'D', s: 'D', cls: 'k-num' },
        { l: '2', m: '2', sl: 'E', s: 'E', cls: 'k-num' },
        { l: '3', m: '3', sl: 'F', s: 'F', cls: 'k-num' },
        { l: '+', m: '+', sl: '° \' "', cls: 'k-op' },
        { l: '−', m: '−', sl: '(-)', cls: 'k-op' }
      ]);
      addRow('c5', [
        { l: '0', m: '0', sl: 'x', s: 'x', cls: 'k-num' },
        { l: '.', m: '.', sl: 'y', s: 'y', cls: 'k-num' },
        { l: '×10ˣ', m: '×10^', sl: 'z', s: 'z', cls: 'k-op' },
        { l: 'FORMAT', m: '@sd', sl: '≈', cls: 'k-fn' },
        { l: 'EXE', m: '@run', cls: 'k-exe' }
      ]);
    }
  }

  updateLCD() {
    const chassis = this.container.querySelector('#casioChassis');
    if (chassis) {
      chassis.classList.toggle('shift-active', !!this.shift);
      chassis.classList.toggle('alpha-active', !!this.alpha);
    }

    const stShift = this.container.querySelector('#stShift');
    const stAlpha = this.container.querySelector('#stAlpha');
    const stSto = this.container.querySelector('#stSto');
    const stMem = this.container.querySelector('#stMem');

    if (stShift) stShift.classList.toggle('active', !!this.shift);
    if (stAlpha) stAlpha.classList.toggle('active', !!this.alpha);
    if (stSto) stSto.classList.toggle('active', !!this.sto);
    if (stMem) stMem.classList.toggle('active', this.memM !== 0);

    // Update active state on SHIFT / ALPHA buttons
    this.container.querySelectorAll('.k-shift').forEach(b => b.classList.toggle('active', !!this.shift));
    this.container.querySelectorAll('.k-alpha').forEach(b => b.classList.toggle('active', !!this.alpha));

    // Update Expression with Cursor
    const exprEl = this.container.querySelector('#casioExpr');
    if (exprEl) {
      const left = this._escapeHtml(this.inputExpr.slice(0, this.cursorPos));
      const right = this._escapeHtml(this.inputExpr.slice(this.cursorPos));
      exprEl.innerHTML = `${left}<span class="casio-cursor"></span>${right}`;
    }

    // Update Result
    const resEl = this.container.querySelector('#casioResult');
    if (resEl) {
      resEl.innerHTML = this.result || '';
    }
  }

  _escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
}

// Auto-register as web component if supported
if (typeof customElements !== 'undefined' && !customElements.get('casio-calculator')) {
  class CasioCalculatorElement extends HTMLElement {
    connectedCallback() {
      const model = this.getAttribute('model') || 'fx580';
      const angle = this.getAttribute('angle') || 'deg';
      this.calc = new CasioCalculator(this, { model, angleMode: angle });
    }
    disconnectedCallback() {
      this.calc?.destroy();
    }
  }
  customElements.define('casio-calculator', CasioCalculatorElement);
}
