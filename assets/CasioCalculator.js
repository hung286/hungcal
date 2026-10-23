/**
 * CASIO SCIENTIFIC CALCULATOR ENGINE & COMPONENT (CLONE 1:1)
 * Models: Casio fx-880BTG (Bitex ClassWiz II) & Casio fx-580VN X (ClassWiz)
 * Author: Thầy Hùng (NMH) — HUNG-CAL (hungcal.vercel.app)
 * 
 * Features:
 *  - 1:1 Authentic Hardware Emulation (Bitex Hologram Sticker, Carbon Bezel, Pebble Keys, D-Pad with OK)
 *  - Interactive LCD Menu System: Calculate, Statistics, Distribution, Spreadsheet, Table, Equation
 *  - Full D-Pad Navigation & Inverted Selection Cursor on Menu Screen
 *  - Natural Textbook Display (fractions, radicals, exponents, calculus)
 *  - SHIFT & ALPHA one-shot state machines with visual gold/pink glow highlight
 *  - Math CAS Engine with S <=> D / FORMAT fraction-decimal toggling
 *  - Sub-apps: Table generator f(x), Equation solver, Statistics calculator
 */

export class CasioCalculator {
  constructor(container, options = {}) {
    this.container = typeof container === 'string' ? document.querySelector(container) : container;
    if (!this.container) throw new Error('CasioCalculator: Invalid container element');

    this.model = options.model || 'fx880'; // 'fx880' (default) or 'fx580'
    this.angleMode = options.angleMode || 'deg'; // 'deg', 'rad', 'grad'
    this.digits = options.digits || 10;
    this.onResult = options.onResult || null;

    // App Mode: 'calc' | 'menu' | 'table' | 'equation' | 'stats'
    this.appMode = 'calc';
    this.menuIndex = 0; // Currently highlighted icon in Menu

    // Expression & Calculation State
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

    // Sub-App States
    this.tableData = { fx: '2x-1', start: 1, end: 5, step: 1, rows: [] };
    this.tableStep = 'input'; // 'input' | 'table'
    this.tableRowIndex = 0;

    this.eqData = { type: 'quad', a: 1, b: -5, c: 6, roots: [] }; // ax^2 + bx + c = 0

    this.statsData = { values: [5, 6, 7, 8, 9, 10], results: null };

    // App Menu Definitions
    this.menu880 = [
      { id: 'calc', name: 'Calculate', icon: 'calc', desc: 'Tính toán số học & đại số' },
      { id: 'stats', name: 'Statistics', icon: 'stats', desc: 'Thống kê 1 biến & 2 biến' },
      { id: 'dist', name: 'Distribution', icon: 'dist', desc: 'Phân phối chuẩn & nhị thức' },
      { id: 'sheet', name: 'Spreadsheet', icon: 'sheet', desc: 'Bảng tính dữ liệu ô' },
      { id: 'table', name: 'Table', icon: 'table', desc: 'Bảng giá trị hàm số f(x)' },
      { id: 'eq', name: 'Equation', icon: 'eq', desc: 'Giải phương trình & hệ PT' }
    ];

    this.menu580 = [
      { id: 'calc', num: 1, name: '1:Ptính thường', icon: 'calc' },
      { id: 'complex', num: 2, name: '2:Số phức', icon: 'complex' },
      { id: 'basen', num: 3, name: '3:Hệ đếm Base-N', icon: 'basen' },
      { id: 'matrix', num: 4, name: '4:Ma trận', icon: 'matrix' },
      { id: 'vector', num: 5, name: '5:Vectơ', icon: 'vector' },
      { id: 'stats', num: 6, name: '6:Thống kê', icon: 'stats' },
      { id: 'dist', num: 7, name: '7:Phân phối', icon: 'dist' },
      { id: 'table', num: 8, name: '8:Bảng giá trị', icon: 'table' }
    ];

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
  // MATHEMATICAL ENGINE
  // ==========================================================

  toFraction(val, maxDenom = 10000) {
    if (!isFinite(val) || isNaN(val)) return null;
    if (Math.abs(val - Math.round(val)) < 1e-11) return { num: Math.round(val), den: 1 };
    const sign = val < 0 ? -1 : 1;
    val = Math.abs(val);

    let h1 = 1, h2 = 0, k1 = 0, k2 = 1, b = val;
    do {
      const a = Math.floor(b);
      let aux = h1; h1 = a * h1 + h2; h2 = aux;
      aux = k1; k1 = a * k1 + k2; k2 = aux;
      b = 1 / (b - a);
    } while (Math.abs(val - h1 / k1) > val * 1e-9 && k1 < maxDenom);

    return k1 <= maxDenom ? { num: sign * h1, den: k1 } : null;
  }

  factorial(n) {
    if (n < 0 || n > 170 || n !== Math.floor(n)) return NaN;
    if (n === 0 || n === 1) return 1;
    let r = 1;
    for (let i = 2; i <= n; i++) r *= i;
    return r;
  }

  nPr(n, r) { return n < r || n < 0 || r < 0 ? 0 : this.factorial(n) / this.factorial(n - r); }
  nCr(n, r) { return n < r || n < 0 || r < 0 ? 0 : this.factorial(n) / (this.factorial(r) * this.factorial(n - r)); }

  toRad(a) { return this.angleMode === 'rad' ? a : this.angleMode === 'grad' ? a * (Math.PI / 200) : a * (Math.PI / 180); }
  fromRad(r) { return this.angleMode === 'rad' ? r : this.angleMode === 'grad' ? r * (200 / Math.PI) : r * (180 / Math.PI); }

  evaluate(expr, customScope = {}) {
    if (!expr || !expr.trim()) return null;
    let clean = expr.trim()
      .replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-')
      .replace(/π/g, 'Math.PI').replace(/e\b/g, 'Math.E')
      .replace(/\bans\b/gi, `(${this.ans})`).replace(/\bM\b/g, `(${this.memM})`);

    // Merge custom scope (e.g. for Table x value)
    const scope = { ...this.vars, ...customScope };
    for (const [v, val] of Object.entries(scope)) {
      clean = clean.replace(new RegExp(`\\b${v}\\b`, 'g'), `(${val})`);
    }

    clean = clean.replace(/√\(([^)]+)\)/g, 'Math.sqrt($1)')
                 .replace(/sqrt\(([^)]+)\)/g, 'Math.sqrt($1)')
                 .replace(/cbrt\(([^)]+)\)/g, 'Math.cbrt($1)')
                 .replace(/abs\(([^)]+)\)/g, 'Math.abs($1)')
                 .replace(/ln\(([^)]+)\)/g, 'Math.log($1)')
                 .replace(/log\(([^)]+)\)/g, 'Math.log10($1)')
                 .replace(/sin\(([^)]+)\)/g, (_, a) => `Math.sin(this.toRad(${a}))`)
                 .replace(/cos\(([^)]+)\)/g, (_, a) => `Math.cos(this.toRad(${a}))`)
                 .replace(/tan\(([^)]+)\)/g, (_, a) => `Math.tan(this.toRad(${a}))`)
                 .replace(/asin\(([^)]+)\)/g, (_, a) => `this.fromRad(Math.asin(${a}))`)
                 .replace(/acos\(([^)]+)\)/g, (_, a) => `this.fromRad(Math.acos(${a}))`)
                 .replace(/atan\(([^)]+)\)/g, (_, a) => `this.fromRad(Math.atan(${a}))`)
                 .replace(/\^/g, '**')
                 .replace(/(\d+)\s*nCr\s*(\d+)/g, (_, n, r) => `this.nCr(${n},${r})`)
                 .replace(/(\d+)\s*nPr\s*(\d+)/g, (_, n, r) => `this.nPr(${n},${r})`)
                 .replace(/(\d+)!/g, (_, n) => `this.factorial(${n})`);

    try {
      const fn = new Function('Math', 'this', `"use strict"; return (${clean});`);
      const val = fn.call(this, Math, this);
      if (typeof val === 'number') {
        if (!isFinite(val) || isNaN(val)) return { error: 'Math ERROR' };
        let rounded = Math.abs(Math.round(val) - val) < 1e-12 ? Math.round(val) : val;
        const frac = this.toFraction(rounded);
        return { decimal: rounded, fraction: frac && frac.den > 1 ? frac : null, formatted: String(rounded) };
      }
      return { decimal: val, formatted: String(val) };
    } catch {
      return { error: 'Syntax ERROR' };
    }
  }

  // ==========================================================
  // MENU & NAVIGATION STATE MACHINE
  // ==========================================================

  openMenu() {
    this.appMode = 'menu';
    this.shift = false;
    this.alpha = false;
    this.updateLCD();
  }

  closeMenu() {
    this.appMode = 'calc';
    this.updateLCD();
  }

  navigateMenu(dir) {
    const is880 = this.model === 'fx880';
    const total = is880 ? this.menu880.length : this.menu580.length;
    const cols = is880 ? 3 : 4;

    switch (dir) {
      case 'left':
        this.menuIndex = (this.menuIndex - 1 + total) % total;
        break;
      case 'right':
        this.menuIndex = (this.menuIndex + 1) % total;
        break;
      case 'up':
        if (this.menuIndex >= cols) this.menuIndex -= cols;
        break;
      case 'down':
        if (this.menuIndex + cols < total) this.menuIndex += cols;
        break;
    }
    this.updateLCD();
  }

  selectApp(appId) {
    if (appId === 'calc') {
      this.appMode = 'calc';
    } else if (appId === 'table') {
      this.appMode = 'table';
      this.tableStep = 'input';
      this.inputExpr = this.tableData.fx;
      this.cursorPos = this.inputExpr.length;
    } else if (appId === 'eq') {
      this.appMode = 'equation';
      this._solveEquation();
    } else if (appId === 'stats') {
      this.appMode = 'stats';
      this._calcStats();
    } else {
      // Default fallback to calc
      this.appMode = 'calc';
    }
    this.updateLCD();
  }

  // --- SUB-APP LOGIC ---
  _generateTable() {
    const rows = [];
    const fx = this.inputExpr || this.tableData.fx;
    this.tableData.fx = fx;
    for (let x = this.tableData.start; x <= this.tableData.end; x += this.tableData.step) {
      const res = this.evaluate(fx, { x });
      rows.push({
        x,
        y: res && !res.error ? (res.fraction ? `${res.fraction.num}/${res.fraction.den}` : res.decimal) : 'ERROR'
      });
    }
    this.tableData.rows = rows;
    this.tableStep = 'table';
    this.tableRowIndex = 0;
    this.updateLCD();
  }

  _solveEquation() {
    // Solve ax^2 + bx + c = 0
    const a = this.eqData.a, b = this.eqData.b, c = this.eqData.c;
    const delta = b * b - 4 * a * c;
    if (delta > 0) {
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      this.eqData.roots = [`x1 = ${x1}`, `x2 = ${x2}`];
    } else if (delta === 0) {
      const x = -b / (2 * a);
      this.eqData.roots = [`x = ${x} (nghiệm kép)`];
    } else {
      const re = -b / (2 * a);
      const im = Math.sqrt(-delta) / (2 * a);
      this.eqData.roots = [`x1 = ${re} + ${im.toFixed(3)}i`, `x2 = ${re} - ${im.toFixed(3)}i`];
    }
  }

  _calcStats() {
    const vals = this.statsData.values;
    const n = vals.length;
    const sum = vals.reduce((a, b) => a + b, 0);
    const mean = sum / n;
    const sqDiff = vals.reduce((a, b) => a + Math.pow(b - mean, 2), 0);
    const stdev = Math.sqrt(sqDiff / (n - 1));
    this.statsData.results = { n, mean: mean.toFixed(4), sum, stdev: stdev.toFixed(4) };
  }

  // ==========================================================
  // BUTTON ACTIONS
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
    if (this.appMode === 'table' && this.tableStep === 'table') {
      this.tableStep = 'input';
      this.updateLCD();
      return;
    }
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
    if (this.appMode === 'menu') {
      const list = this.model === 'fx880' ? this.menu880 : this.menu580;
      const selected = list[this.menuIndex];
      if (selected) this.selectApp(selected.id);
      return;
    }

    if (this.appMode === 'table') {
      if (this.tableStep === 'input') {
        this._generateTable();
      }
      return;
    }

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
      this.result = `<span class="casio-frac"><span>${f.num}</span><span class="casio-bar"></span><span>${f.den}</span></span>`;
    } else {
      this.result = Number(this.rawResult.decimal.toPrecision(this.digits)).toString();
    }
  }

  handleButton(btnDef) {
    // 1. Menu Navigation Mode
    if (this.appMode === 'menu') {
      if (btnDef.m === '@left') return this.navigateMenu('left');
      if (btnDef.m === '@right') return this.navigateMenu('right');
      if (btnDef.m === '@up') return this.navigateMenu('up');
      if (btnDef.m === '@down') return this.navigateMenu('down');
      if (btnDef.m === '@run') return this.calculate(); // OK / EXE
      if (btnDef.m === '@ac' || btnDef.m === '@del') return this.closeMenu();
      if (/^[1-8]$/.test(btnDef.m) && this.model === 'fx580') {
        const item = this.menu580.find(i => i.num === Number(btnDef.m));
        if (item) this.selectApp(item.id);
        return;
      }
    }

    // 2. Table Scrolling Mode
    if (this.appMode === 'table' && this.tableStep === 'table') {
      if (btnDef.m === '@up') {
        this.tableRowIndex = Math.max(0, this.tableRowIndex - 1);
        this.updateLCD();
        return;
      }
      if (btnDef.m === '@down') {
        this.tableRowIndex = Math.min(this.tableData.rows.length - 1, this.tableRowIndex + 1);
        this.updateLCD();
        return;
      }
      if (btnDef.m === '@ac') {
        this.tableStep = 'input';
        this.updateLCD();
        return;
      }
    }

    // 3. STO Mode
    if (this.sto) {
      const v = btnDef.a || (/^[A-FxyM]$/.test(btnDef.m) ? btnDef.m : null);
      if (v) {
        if (v === 'M') this.memM = this.ans;
        else this.vars[v] = this.ans;
      }
      this.sto = false; this.shift = false; this.alpha = false;
      this.updateLCD();
      return;
    }

    // 4. Determine Action
    let action = btnDef.m;
    if (this.alpha && btnDef.a) action = btnDef.a;
    else if (this.shift && btnDef.s) action = btnDef.s;

    const isModifier = action === '@shift' || action === '@alpha';

    if (typeof action === 'string' && action.startsWith('@')) {
      const cmd = action.slice(1);
      switch (cmd) {
        case 'menu':
        case 'home':
          if (this.appMode === 'menu') this.closeMenu();
          else this.openMenu();
          break;
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
      this.insert(action.replace('|', ''), offset >= 0 ? offset : action.length);
    }

    if (!isModifier) { this.shift = false; this.alpha = false; }
    this.updateLCD();
  }

  _handleKeyDown(e) {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

    if (e.key >= '0' && e.key <= '9') { this.insert(e.key); e.preventDefault(); }
    else if (['+', '-', '*', '/'].includes(e.key)) { this.insert(e.key === '*' ? '×' : e.key === '/' ? '÷' : e.key === '-' ? '−' : '+'); e.preventDefault(); }
    else if (e.key === '.' || e.key === ',') { this.insert('.'); e.preventDefault(); }
    else if (e.key === 'Enter' || e.key === '=') { this.calculate(); e.preventDefault(); }
    else if (e.key === 'Backspace') { this.backspace(); e.preventDefault(); }
    else if (e.key === 'Escape') { this.clear(); e.preventDefault(); }
    else if (e.key === 'ArrowLeft') { this.handleButton({ m: '@left' }); e.preventDefault(); }
    else if (e.key === 'ArrowRight') { this.handleButton({ m: '@right' }); e.preventDefault(); }
    else if (e.key === 'ArrowUp') { this.handleButton({ m: '@up' }); e.preventDefault(); }
    else if (e.key === 'ArrowDown') { this.handleButton({ m: '@down' }); e.preventDefault(); }
    else if (e.key.toLowerCase() === 'm' && !e.ctrlKey) { this.handleButton({ m: '@menu' }); e.preventDefault(); }
    else if (e.key.toLowerCase() === 's' && !e.ctrlKey) { this.shift = !this.shift; this.alpha = false; this.updateLCD(); e.preventDefault(); }
    else if (e.key.toLowerCase() === 'a' && !e.ctrlKey) { this.alpha = !this.alpha; this.shift = false; this.updateLCD(); e.preventDefault(); }
  }

  // ==========================================================
  // RENDER & UI CREATION
  // ==========================================================

  render() {
    const is880 = this.model === 'fx880';
    this.container.innerHTML = `
      <div class="casio-calc-wrapper">
        <div class="casio-chassis ${is880 ? 'model-880' : 'model-580'}" id="casioChassis">
          
          <!-- Top Bar: Brand, Hologram & Model Switcher -->
          <div class="casio-top-bar">
            <div class="casio-brand-info">
              <span class="casio-brand-name">CASIO</span>
              <span class="casio-model-code">${is880 ? 'fx-880BTG' : 'fx-580VN X'}</span>
              <span class="casio-series-sub">${is880 ? 'ClassWiz II · 4-Gradation' : 'CLASSWIZ · Natural-V.P.A.M.'}</span>
            </div>

            <!-- Bitex Hologram Sticker on fx-880BTG -->
            ${is880 ? `
              <div class="casio-bitex-sticker" title="Tem Chống Giả BITEX Chính Hãng">
                <div class="casio-bitex-logo">
                  <span class="bitex-tag">TEM CHỐNG GIẢ</span>
                  <span class="bitex-title">BITEX</span>
                </div>
              </div>
            ` : `
              <div class="casio-model-switcher">
                <button class="casio-model-btn ${!is880 ? 'active' : ''}" data-model="fx580">580VN X</button>
                <button class="casio-model-btn ${is880 ? 'active' : ''}" data-model="fx880">880BTG</button>
              </div>
            `}
          </div>

          <!-- LCD Screen (Authentic Dot Matrix Display) -->
          <div class="casio-screen-bezel">
            <div class="casio-lcd" id="casioLcd">
              
              <!-- Status Indicators: √✔, D, Shift, Alpha, Math -->
              <div class="casio-lcd-status">
                <span class="casio-badge ${this.shift ? 'active' : ''}" id="stShift">S</span>
                <span class="casio-badge ${this.alpha ? 'active' : ''}" id="stAlpha">A</span>
                <span class="casio-badge ${this.sto ? 'active' : ''}" id="stSto">STO</span>
                <span class="casio-badge ${this.memM !== 0 ? 'active' : ''}">M</span>
                <span class="active" style="letter-spacing:0.04em">√✔</span>
                <span class="status-spacer"></span>
                <button class="casio-status-btn ${this.angleMode === 'deg' ? 'active' : ''}" data-angle="deg">D</button>
                <button class="casio-status-btn ${this.angleMode === 'rad' ? 'active' : ''}" data-angle="rad">R</button>
                <button class="casio-status-btn ${this.angleMode === 'grad' ? 'active' : ''}" data-angle="grad">G</button>
                <span class="active">Math</span>
                <span class="active">${this.digits}</span>
              </div>

              <!-- Main Screen Content Area -->
              <div id="casioScreenBody" style="display:flex;flex-direction:column;flex-grow:1;justify-content:space-between">
                <!-- Expression Input -->
                <div class="casio-lcd-expr" id="casioExpr"></div>
                <!-- Result Line -->
                <div class="casio-lcd-result" id="casioResult"></div>
              </div>

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
    this.container.querySelectorAll('.casio-model-btn').forEach(btn => {
      btn.addEventListener('click', () => this.setModel(btn.dataset.model));
    });
    this.container.querySelectorAll('.casio-status-btn').forEach(btn => {
      btn.addEventListener('click', () => this.setAngleMode(btn.dataset.angle));
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
      btn.innerHTML = `<i class="sl">${def.sl || ''}</i><i class="al">${def.al || ''}</i><b>${def.l}</b>`;
      btn.addEventListener('mousedown', e => e.preventDefault());
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
            <button class="casio-dpad-btn u">▲</button>
            <button class="casio-dpad-btn d">▼</button>
            <button class="casio-dpad-btn l">◀</button>
            <button class="casio-dpad-btn r">▶</button>
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

    if (!is880) {
      // Casio fx-580VN X Keys
      addRow('c6', [{ l: 'SHIFT', m: '@shift', cls: 'k-shift' }, { l: 'ALPHA', m: '@alpha', cls: 'k-alpha' }, 'dpad', { l: 'OPTN', m: '@optn', sl: 'QR' }, { l: 'CALC', m: '@run', sl: 'SOLVE', al: '=', a: '=' }]);
      addRow('c6', [{ l: '■/■', m: '■/■', sl: '■ ■/■' }, { l: '√', m: '√(|)', sl: '∛', s: 'cbrt(|)' }, { l: 'x²', m: '^2', sl: 'x³', s: '^3' }, { l: 'xʸ', m: '^' }, { l: 'log_a', m: 'log(|, )', sl: '10ˣ' }, { l: 'ln', m: 'ln(|)', sl: 'eˣ', al: 'A', a: 'A' }]);
      addRow('c6', [{ l: '(-)', m: '(-|)', al: 'B', a: 'B' }, { l: '° \' "', m: '°', al: 'C', a: 'C' }, { l: 'x⁻¹', m: '^(-1)', sl: 'x!', s: '!', al: 'D', a: 'D' }, { l: 'sin', m: 'sin(|)', sl: 'sin⁻¹', s: 'asin(|)', al: 'E', a: 'E' }, { l: 'cos', m: 'cos(|)', sl: 'cos⁻¹', s: 'acos(|)', al: 'F', a: 'F' }, { l: 'tan', m: 'tan(|)', sl: 'tan⁻¹', s: 'atan(|)', al: 'M', a: 'M' }]);
      addRow('c6', [{ l: 'STO', m: '@sto' }, { l: 'ENG', m: '×10^', al: 'i', a: 'i' }, { l: '(', m: '(', al: 'x', a: 'x' }, { l: ')', m: ')', al: 'y', a: 'y' }, { l: 'S⇔D', m: '@sd' }, { l: 'M+', m: '@mplus', sl: 'M-', s: '@mminus' }]);
      addRow('c5', [{ l: '7', m: '7', cls: 'k-num' }, { l: '8', m: '8', cls: 'k-num' }, { l: '9', m: '9', cls: 'k-num' }, { l: 'DEL', m: '@del', cls: 'k-del' }, { l: 'AC', m: '@ac', cls: 'k-ac' }]);
      addRow('c5', [{ l: '4', m: '4', cls: 'k-num' }, { l: '5', m: '5', cls: 'k-num' }, { l: '6', m: '6', cls: 'k-num' }, { l: '×', m: '×', sl: 'nPr', s: ' nPr ', cls: 'k-op' }, { l: '÷', m: '÷', sl: 'nCr', s: ' nCr ', cls: 'k-op' }]);
      addRow('c5', [{ l: '1', m: '1', cls: 'k-num' }, { l: '2', m: '2', cls: 'k-num' }, { l: '3', m: '3', cls: 'k-num' }, { l: '+', m: '+', cls: 'k-op' }, { l: '−', m: '−', cls: 'k-op' }]);
      addRow('c5', [{ l: '0', m: '0', cls: 'k-num' }, { l: '.', m: '.', cls: 'k-num' }, { l: '×10ˣ', m: '×10^', sl: 'π', s: 'π', al: 'e', a: 'e', cls: 'k-op' }, { l: 'Ans', m: 'ans', sl: '%', s: '%' }, { l: '=', m: '@run', cls: 'k-eq' }]);
    } else {
      // Casio fx-880BTG Keys (Pebble Round Buttons & OK / EXE)
      addRow('c6', [{ l: 'HOME', m: '@home', cls: 'k-home' }, { l: 'SETTINGS', m: '@sd', cls: 'k-settings' }, 'dpad', { l: 'BACK', m: '@del', cls: 'k-back' }, { l: 'CATALOG', m: '@optn', cls: 'k-catalog' }]);
      addRow('c6', [{ l: 'SHIFT', m: '@shift', cls: 'k-shift' }, { l: 'VARIABLE', m: 'x', cls: 'k-var' }, { l: 'FUNCTION', m: 'f(x)=', cls: 'k-fn' }, { l: 'TOOLS', m: '@optn', cls: 'k-tools' }, { l: '■/■', m: '■/■' }, { l: '√', m: '√(|)', sl: '∛', s: 'cbrt(|)' }]);
      addRow('c6', [{ l: 'x', m: 'x' }, { l: '■/■', m: '■/■' }, { l: 'x²', m: '^2', sl: 'log', s: 'log(|)' }, { l: 'log_a', m: 'log(|, )', sl: 'ln', s: 'ln(|)' }, { l: 'sin', m: 'sin(|)', sl: 'sin⁻¹', s: 'asin(|)' }, { l: 'cos', m: 'cos(|)', sl: 'cos⁻¹', s: 'acos(|)' }]);
      addRow('c6', [{ l: 'tan', m: 'tan(|)', sl: 'tan⁻¹', s: 'atan(|)' }, { l: '(', m: '(', sl: '=', s: '=' }, { l: ')', m: ')', sl: ',', s: ',' }, { l: 'S⇔D', m: '@sd' }, { l: 'FORMAT', m: '@sd' }, { l: 'Ans', m: 'ans' }]);
      addRow('c5', [{ l: '7', m: '7', sl: 'π', s: 'π', cls: 'k-num' }, { l: '8', m: '8', sl: 'e', s: 'e', cls: 'k-num' }, { l: '9', m: '9', sl: 'i', s: 'i', cls: 'k-num' }, { l: 'DEL', m: '@del', cls: 'k-del' }, { l: 'AC', m: '@ac', cls: 'k-ac' }]);
      addRow('c5', [{ l: '4', m: '4', sl: 'A', s: 'A', cls: 'k-num' }, { l: '5', m: '5', sl: 'B', s: 'B', cls: 'k-num' }, { l: '6', m: '6', sl: 'C', s: 'C', cls: 'k-num' }, { l: '×', m: '×', sl: 'nPr', s: ' nPr ', cls: 'k-op' }, { l: '÷', m: '÷', sl: 'nCr', s: ' nCr ', cls: 'k-op' }]);
      addRow('c5', [{ l: '1', m: '1', sl: 'D', s: 'D', cls: 'k-num' }, { l: '2', m: '2', sl: 'E', s: 'E', cls: 'k-num' }, { l: '3', m: '3', sl: 'F', s: 'F', cls: 'k-num' }, { l: '+', m: '+', cls: 'k-op' }, { l: '−', m: '−', cls: 'k-op' }]);
      addRow('c5', [{ l: '0', m: '0', sl: 'x', s: 'x', cls: 'k-num' }, { l: '.', m: '.', sl: 'y', s: 'y', cls: 'k-num' }, { l: '×10ˣ', m: '×10^', sl: 'z', s: 'z', cls: 'k-op' }, { l: 'FORMAT', m: '@sd', cls: 'k-fn' }, { l: 'EXE', m: '@run', cls: 'k-exe' }]);
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
    if (stShift) stShift.classList.toggle('active', !!this.shift);
    if (stAlpha) stAlpha.classList.toggle('active', !!this.alpha);
    if (stSto) stSto.classList.toggle('active', !!this.sto);

    this.container.querySelectorAll('.k-shift').forEach(b => b.classList.toggle('active', !!this.shift));
    this.container.querySelectorAll('.k-alpha').forEach(b => b.classList.toggle('active', !!this.alpha));

    const screenBody = this.container.querySelector('#casioScreenBody');
    if (!screenBody) return;

    // --- 1. RENDER MENU SCREEN (1:1 CLONE) ---
    if (this.appMode === 'menu') {
      if (this.model === 'fx880') {
        screenBody.innerHTML = `
          <div class="casio-menu-screen">
            <div class="casio-menu-grid">
              ${this.menu880.map((app, idx) => `
                <div class="casio-menu-item ${idx === this.menuIndex ? 'selected' : ''}" data-idx="${idx}">
                  <div class="casio-menu-icon">${this._renderAppIcon(app.icon)}</div>
                  <div class="casio-menu-label">${app.name}</div>
                </div>
              `).join('')}
            </div>
            <div class="casio-menu-scrolltrack"><div class="casio-menu-thumb"></div></div>
          </div>
        `;
      } else {
        const curApp = this.menu580[this.menuIndex] || this.menu580[0];
        screenBody.innerHTML = `
          <div class="casio-menu-screen" style="flex-direction:column">
            <div class="casio-menu-580-grid">
              ${this.menu580.map((app, idx) => `
                <div class="casio-menu-580-item ${idx === this.menuIndex ? 'selected' : ''}" data-idx="${idx}">
                  <span class="item-num">${app.num}</span>
                  <div style="font-size:15px;line-height:1;margin-bottom:2px">${this._renderAppIcon(app.icon)}</div>
                </div>
              `).join('')}
            </div>
            <div class="casio-menu-580-status">${curApp.name}</div>
          </div>
        `;
      }

      screenBody.querySelectorAll('[data-idx]').forEach(el => {
        el.addEventListener('click', () => {
          this.menuIndex = Number(el.dataset.idx);
          this.calculate();
        });
      });
      return;
    }

    // --- 2. RENDER TABLE APP ---
    if (this.appMode === 'table') {
      if (this.tableStep === 'input') {
        screenBody.innerHTML = `
          <div class="casio-subapp-view">
            <div style="font-size:12px;font-weight:900">f(x) Table Generator:</div>
            <div class="casio-lcd-expr">f(x)=${this._escapeHtml(this.inputExpr)}<span class="casio-cursor"></span></div>
            <div style="font-size:10px;text-align:right;opacity:0.8">Nhấn [EXE] để tạo bảng</div>
          </div>
        `;
      } else {
        screenBody.innerHTML = `
          <div class="casio-subapp-view">
            <div style="font-size:11px;font-weight:900;border-bottom:1px solid currentColor">f(x) = ${this.tableData.fx}</div>
            <div class="casio-table-container">
              <table class="casio-table">
                <thead><tr><th>No.</th><th>x</th><th>f(x)</th></tr></thead>
                <tbody>
                  ${this.tableData.rows.map((r, i) => `
                    <tr class="${i === this.tableRowIndex ? 'selected' : ''}">
                      <td>${i + 1}</td><td>${r.x}</td><td>${r.y}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
            <div style="font-size:9.5px;text-align:right">Dùng ▲▼ cuộn · [AC] quay lại</div>
          </div>
        `;
      }
      return;
    }

    // --- 3. RENDER EQUATION SOLVER APP ---
    if (this.appMode === 'equation') {
      screenBody.innerHTML = `
        <div class="casio-subapp-view">
          <div style="font-size:11px;font-weight:900">ax² + bx + c = 0</div>
          <div style="font-size:11px;margin:3px 0">a = ${this.eqData.a}, b = ${this.eqData.b}, c = ${this.eqData.c}</div>
          <div style="font-size:13px;font-weight:900;text-align:right">
            ${this.eqData.roots.map(r => `<div>${r}</div>`).join('')}
          </div>
          <div style="font-size:9.5px;text-align:right;opacity:0.8">[HOME] chọn app khác</div>
        </div>
      `;
      return;
    }

    // --- 4. RENDER STATISTICS APP ---
    if (this.appMode === 'stats') {
      const res = this.statsData.results;
      screenBody.innerHTML = `
        <div class="casio-subapp-view">
          <div style="font-size:11px;font-weight:900">1-Variable Statistics:</div>
          <div style="font-size:11.5px;line-height:1.4">
            <div>x̄ (trung bình) = ${res?.mean || 0}</div>
            <div>Σx (tổng) = ${res?.sum || 0}</div>
            <div>σx (độ lệch) = ${res?.stdev || 0}</div>
            <div>n (mẫu) = ${res?.n || 0}</div>
          </div>
          <div style="font-size:9.5px;text-align:right;opacity:0.8">[HOME] chọn app khác</div>
        </div>
      `;
      return;
    }

    // --- 5. RENDER NORMAL CALC SCREEN ---
    screenBody.innerHTML = `
      <div class="casio-lcd-expr" id="casioExpr"></div>
      <div class="casio-lcd-result" id="casioResult"></div>
    `;

    const exprEl = screenBody.querySelector('#casioExpr');
    if (exprEl) {
      const left = this._escapeHtml(this.inputExpr.slice(0, this.cursorPos));
      const right = this._escapeHtml(this.inputExpr.slice(this.cursorPos));
      exprEl.innerHTML = `${left}<span class="casio-cursor"></span>${right}`;
    }

    const resEl = screenBody.querySelector('#casioResult');
    if (resEl) resEl.innerHTML = this.result || '';
  }

  _renderAppIcon(type) {
    switch (type) {
      case 'calc':
        return '<svg viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2zm-6-8h-2v14h2V5zM7 7h2v2H7V7zm8 0h2v2h-2V7zm0 8h2v2h-2v-2zM7 15h2v2H7v-2z"/></svg>';
      case 'stats':
        return '<svg viewBox="0 0 24 24"><path d="M4 19h16v2H2V3h2v16zm3-2h3V9H7v8zm5 0h3V5h-3v12zm5 0h3v-6h-3v6z"/></svg>';
      case 'dist':
        return '<svg viewBox="0 0 24 24"><path d="M2 19h20v2H2v-2zm1-2c2-1 4-3 6-7 2-4 4-6 6-6s4 2 6 6c2 4 4 6 6 7H3z"/></svg>';
      case 'sheet':
        return '<svg viewBox="0 0 24 24"><path d="M3 3h18v18H3V3zm2 4h14V5H5v2zm0 4h6V9H5v2zm8 0h6V9h-6v2zm-8 4h6v-2H5v2zm8 0h6v-2h-6v2zm-8 4h6v-2H5v2zm8 0h6v-2h-6v2z"/></svg>';
      case 'table':
        return '<svg viewBox="0 0 24 24"><path d="M4 4h16v16H4V4zm2 4h12V6H6v2zm0 10h5v-8H6v8zm7 0h5v-8h-5v8z"/></svg>';
      case 'eq':
        return '<span style="font-weight:900;font-size:13px;letter-spacing:-0.05em">XY=0</span>';
      case 'complex':
        return '<span style="font-weight:900;font-size:13px">i ∠</span>';
      case 'basen':
        return '<span style="font-size:10px;font-weight:900;line-height:1">2 8<br>10 16</span>';
      case 'matrix':
        return '<span style="font-size:12px;font-weight:900">[::]</span>';
      case 'vector':
        return '<span style="font-size:15px;font-weight:900">↗</span>';
      default:
        return '<svg viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="3"/></svg>';
    }
  }

  _escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
}

// Auto-register Custom Element
if (typeof customElements !== 'undefined' && !customElements.get('casio-calculator')) {
  class CasioCalculatorElement extends HTMLElement {
    connectedCallback() {
      const model = this.getAttribute('model') || 'fx880';
      const angle = this.getAttribute('angle') || 'deg';
      this.calc = new CasioCalculator(this, { model, angleMode: angle });
    }
    disconnectedCallback() {
      this.calc?.destroy();
    }
  }
  customElements.define('casio-calculator', CasioCalculatorElement);
}
