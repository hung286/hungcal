import{a3 as Be,a4 as je,a5 as Ve,a6 as Oe,L as ve,e as Ge}from"./main-QrBuoGVf.js";import{p as fe,e as r,t as Kt,b as it,s as Pe,a as Ee,c as Ke,aq as W}from"./OrbitControls-CC1Q_oXb.js";const Xe=[{id:"square",label:"Hình vuông (cạnh = w)"},{id:"rect",label:"Hình chữ nhật (cao = t·w)"},{id:"equi",label:"Tam giác đều (cạnh = w)"},{id:"semicircle",label:"Nửa hình tròn (đường kính = w)"},{id:"circle",label:"Hình tròn (đường kính = w)"},{id:"rightleg",label:"Tam giác vuông cân (cạnh góc vuông = w)"},{id:"righthyp",label:"Tam giác vuông cân (cạnh huyền = w)"}];function We(l,t){const a=fe("Miền phẳng & phép dựng khối","s3d-panel");let e="rev";const i=(v,L="100%")=>{const y=r("input","fld");return y.value=v,y.style.width=L,y},o=(v,...L)=>{const y=r("div","s3d-adv-row");return y.append(r("label","lab",v),...L),y},h=[],p=[],x=[["sqrt(4*x)",!0],["x",!0],["0",!1]],d=r("div","s3d-adv-curves");x.forEach(([v,L],y)=>{const G=r("input");G.type="checkbox",G.checked=L;const K=i(v),nt=r("div","s3d-adv-curve");nt.append(G,r("span","s3d-adv-name",`y${y+1} =`),K),d.appendChild(nt),h.push(K),p.push(G)});const s=r("div","s3d-adv-hint","Miền nằm giữa đường cao nhất và thấp nhất trong các đường được bật. Chỉ bật 1 đường: miền giữa đường đó và trục Ox."),f=i("0","70px"),c=i("4","70px"),u=o("Cận x từ",f,r("span",""," đến "),c),m=r("select","fld");m.innerHTML='<option value="ox">Trục Ox</option><option value="oy">Trục Oy</option><option value="h">Đường y = c</option><option value="v">Đường x = c</option><option value="l">Đường y = m·x + k</option>';const T=i("0","60px"),N=i("1","60px"),z=i("0","60px"),g=r("span","s3d-adv-ap"),w=o("Trục quay",m,g),k=()=>{g.innerHTML="";const v=m.value;v==="h"?g.append(r("span",""," c = "),T):v==="v"?g.append(r("span",""," c = "),T):v==="l"&&g.append(r("span",""," m = "),N,r("span",""," k = "),z)};k();const M=r("input");M.type="range",M.min="10",M.max="360",M.value="360";const P=r("span","s3d-adv-val","360°"),R=o("Góc quay",M,P),J=r("select","fld");J.innerHTML=Xe.map(v=>`<option value="${v.id}">${v.label}</option>`).join("");const Z=i("1.5","60px"),ut=r("span",""," t = "),Nt=o("Thiết diện ⟂ Ox",J,ut,Z),gt=r("input");gt.type="range",gt.min="0",gt.max="100",gt.value="50";const Ft=o("Lát cắt",gt),tt=r("input");tt.type="range",tt.min="20",tt.max="100",tt.value="100";const At=r("input");At.type="checkbox";const It=r("input");It.type="checkbox";const Rt=r("button","btn sm","▶ Hoạt hình"),Pt=r("div","s3d-adv-row"),Bt=(v,L)=>{const y=r("label","s3d-ctl",v+" ");return y.appendChild(L),y};Pt.append(Bt("Trong suốt",tt),Bt("Lưới",At),Bt("Cắt nửa",It),Rt);const Wt=r("div","s3d-adv-warn"),Ut=r("div","s3d-adv-out");a.append(d,s,u,w,R,Nt,Ft,Pt,Wt,Ut);const O=200;function _t(){const v=parseFloat(f.value),L=parseFloat(c.value);if(!Number.isFinite(v)||!Number.isFinite(L)||L<=v)return null;const y=[];if(h.forEach((U,X)=>{if(!p[X].checked)return;const at=t(U.value);at&&y.push(at)}),!y.length)return null;y.length===1&&y.push(()=>0);const G=[],K=[],nt=[];for(let U=0;U<=O;U++){const X=v+(L-v)*U/O,at=y.map(ot=>ot(X)).map(ot=>Number.isFinite(ot)?ot:0);G.push(X),K.push(Math.min(...at)),nt.push(Math.max(...at))}return{x0:v,x1:L,xs:G,yl:K,yu:nt}}function Zt(){const v=parseFloat(T.value)||0;switch(m.value){case"oy":return{kind:"v",c:0};case"h":return{kind:"h",c:v};case"v":return{kind:"v",c:v};case"l":return{kind:"l",m:parseFloat(N.value)||0,k:parseFloat(z.value)||0};default:return{kind:"h",c:0}}}const yt=(v,L,y)=>v.kind==="h"?y-v.c:v.kind==="v"?L-v.c:(v.m*L-y+v.k)/Math.hypot(v.m,1);function Et(v){Ut.innerHTML=v}function bt(v=!1){const L=l();R.style.display=e==="rev"?"":"none",w.style.display=e==="rev"?"":"none",Nt.style.display=e==="slab"?"":"none",Ft.style.display=e==="slab"?"":"none",Z.style.display=ut.style.display=J.value==="rect"?"":"none",Wt.textContent="";const y=_t();if(L){if(!y){Et('<span class="err">Kiểm tra lại các hàm số và cận x.</span>');return}if(e==="rev"){const G=[];for(let E=0;E<=O;E++)G.push([y.xs[E],y.yu[E]]);for(let E=O;E>=0;E--)G.push([y.xs[E],y.yl[E]]);const K={color:"#6366f1",pts:G},nt=Zt();v||L.setData([K],nt),L.setSweep(Number(M.value));const U=(y.x1-y.x0)/O;let X=0,at=0,ot=0,$t=1/0,Mt=-1/0;for(let E=0;E<=O;E++){const Yt=(y.yu[E]-y.yl[E])*U*(E===0||E===O?.5:1);X+=Yt,at+=Yt*y.xs[E],ot+=Yt*(y.yu[E]+y.yl[E])/2;for(const dt of[y.yu[E],y.yl[E]]){const pt=yt(nt,y.xs[E],dt);$t=Math.min($t,pt),Mt=Math.max(Mt,pt)}}if(X<1e-9){Et('<span class="err">Miền có diện tích bằng 0.</span>');return}const B=Math.abs(yt(nt,at/X,ot/X)),mt=Number(M.value)/360*2*Math.PI*B*X;$t<-1e-6&&Mt>1e-6&&(Wt.textContent="⚠ Miền nằm ở hai phía của trục quay: phần chồng nhau chỉ tính một lần, công thức Pappus dưới đây chỉ là ước lượng."),Et(`${Kt(`S\\approx ${+X.toPrecision(6)},\\quad d_G\\approx ${+B.toPrecision(5)}`)}<br>${Kt(`V=\\dfrac{\\varphi}{360^\\circ}\\cdot 2\\pi\\, d_G\\, S\\approx ${+mt.toPrecision(7)}\\ (\\approx ${+(mt/Math.PI).toPrecision(6)}\\pi)`)}`)}else{const G=new Float64Array(O+1),K=new Float64Array(O+1);for(let B=0;B<=O;B++)G[B]=y.yl[B],K[B]=y.yu[B];const nt={x0:y.x0,x1:y.x1,yl:G,yu:K,color:"#6366f1"},U=J.value,X=Math.max(.1,parseFloat(Z.value)||1);L.setSlab([nt],U,X),jt();const at=(y.x1-y.x0)/O;let ot=0;for(let B=0;B<=O;B++){const mt=(y.yu[B]-y.yl[B])**2;ot+=mt*(B===0||B===O?1:B%2?4:2)}const $t=Be(U,X),Mt=$t*ot*at/3;Et(`${Kt(`S(x)=${+$t.toPrecision(6)}\\,w(x)^2,\\quad V=\\int_{${y.x0}}^{${y.x1}} S(x)\\,dx\\approx ${+Mt.toPrecision(7)}`)}`)}L.setOpacity(Number(tt.value)/100)}}function jt(){const v=l(),L=_t();!v||!L||v.setSlabT(L.x0+(L.x1-L.x0)*Number(gt.value)/100)}for(const v of[...h,f,c,T,N,z,Z])v.addEventListener("input",()=>bt());for(const v of p)v.addEventListener("change",()=>bt());return J.addEventListener("change",()=>bt()),m.addEventListener("change",()=>{k(),bt()}),M.addEventListener("input",()=>{P.textContent=`${M.value}°`,l()?.setSweep(Number(M.value)),bt(!0)}),gt.addEventListener("input",jt),tt.addEventListener("input",()=>l()?.setOpacity(Number(tt.value)/100)),At.addEventListener("change",()=>l()?.setWire(At.checked)),It.addEventListener("change",()=>l()?.setCut(It.checked)),Rt.addEventListener("click",()=>l()?.play()),{root:a,activate(v){e=v,bt()},onSweep(v){e==="rev"?(M.value=String(Math.round(v)),P.textContent=`${Math.round(v)}°`):gt.value=String(Math.round(v))}}}class I{n;d;constructor(t,a=1){if(typeof t=="number"&&a===1&&!Number.isInteger(t)){const o=I.bestRational(t);t=o.n,a=o.d}if(a===0)throw new Error("Division by zero");a<0&&(t=-t,a=-a);const e=t/a;Math.abs(Math.round(e)-e)<1e-10&&(t=Math.round(e),a=1),(Math.round(t)!==t||Math.round(a)!==a)&&(t=Math.round(t*1e4),a=Math.round(a*1e4));const i=this.gcd(Math.abs(t),Math.abs(a));this.n=t/i,this.d=a/i}static bestRational(t,a=60){let e=Math.round(t),i=1,o=Math.abs(t-e);for(let h=2;h<=a;h++){const p=Math.round(t*h),x=Math.abs(t-p/h);if(x<o&&(o=x,e=p,i=h),o<1e-9)break}return{n:e,d:i}}gcd(t,a){return a?this.gcd(a,t%a):t}add(t){return new I(this.n*t.d+t.n*this.d,this.d*t.d)}sub(t){return new I(this.n*t.d-t.n*this.d,this.d*t.d)}mul(t){return new I(this.n*t.n,this.d*t.d)}div(t){return new I(this.n*t.d,this.d*t.n)}val(){return this.n/this.d}toTex(){return this.d===1?`${this.n}`:this.n===0?"0":Math.abs(this.n).toString().length>6||this.d.toString().length>6?(this.n/this.d).toFixed(4):`${this.n<0?"-":""}\\dfrac{${Math.abs(this.n)}}{${this.d}}`}toTypst(){return this.d===1?`${this.n}`:this.n===0?"0":`${this.n<0?"-":""}frac(${Math.abs(this.n)}, ${this.d})`}}class ue{cs;constructor(t){this.cs=t}mul(t){const a=Array(this.cs.length+t.cs.length-1).fill(null).map(()=>new I(0));for(let e=0;e<this.cs.length;e++)for(let i=0;i<t.cs.length;i++)a[e+i]=a[e+i].add(this.cs[e].mul(t.cs[i]));return new ue(a)}integrate(){const t=[new I(0)];for(let a=0;a<this.cs.length;a++)t.push(this.cs[a].div(new I(a+1)));return new ue(t)}evalExact(t){let a=new I(0),e=new I(1);for(let i=0;i<this.cs.length;i++)a=a.add(this.cs[i].mul(e)),e=e.mul(t);return a}toTex(){let t="";for(let a=this.cs.length-1;a>=0;a--){const e=this.cs[a];if(e.n===0&&this.cs.length>1)continue;const i=e.val()>=0?t?"+ ":"":"- ";let o=e.toTex().replace("-","");o==="1"&&a>0&&(o=""),t+=`${i}${o}${a>0?"x":""}${a>1?"^{"+a+"}":""} `}return t.trim()||"0"}toTypst(){let t="";for(let a=this.cs.length-1;a>=0;a--){const e=this.cs[a];if(e.n===0&&this.cs.length>1)continue;const i=e.val()>=0?t?"+ ":"":"- ";let o=e.toTypst().replace("-","");o==="1"&&a>0&&(o="");const h=a>0?o?" * x":"x":"",p=a>1?`^${a}`:"";t+=`${i}${o}${h}${p} `}return t.trim()||"0"}}function Ue(l,t){const e=l.map((i,o)=>[...i,t[o]]);for(let i=0;i<4;i++){let o=i;for(let p=i+1;p<4;p++)Math.abs(e[p][i].val())>Math.abs(e[o][i].val())&&(o=p);[e[i],e[o]]=[e[o],e[i]];const h=e[i][i];if(Math.abs(h.val())<1e-10)return Array(4).fill(new I(0));for(let p=i;p<=4;p++)e[i][p]=e[i][p].div(h);for(let p=0;p<4;p++)if(p!==i){const x=e[p][i];for(let d=i;d<=4;d++)e[p][d]=e[p][d].sub(x.mul(e[i][d]))}}return e.map(i=>i[4])}function _e(l){switch(l){case"circle":return{kNum:1,kDen:1,piStr:"\\pi",kVal:Math.PI,name:"Hình tròn (Tròn xoay)",desc:"S(x) = \\pi [f(x)]^2",typstConst:"calc.pi"};case"square":return{kNum:2,kDen:1,piStr:"",kVal:2,name:"Hình vuông",desc:"S(x) = 2 [f(x)]^2",typstConst:"2"};case"triangle":return{kNum:3,kDen:4,piStr:"\\sqrt{3}",kVal:Math.sqrt(3)*3/4,name:"Tam giác đều",desc:"S(x) = \\dfrac{3\\sqrt{3}}{4} [f(x)]^2",typstConst:"(3 * calc.sqrt(3) / 4)"};case"hexagon":return{kNum:3,kDen:2,piStr:"\\sqrt{3}",kVal:3*Math.sqrt(3)/2,name:"Lục giác đều",desc:"S(x) = \\dfrac{3\\sqrt{3}}{2} [f(x)]^2",typstConst:"(3 * calc.sqrt(3) / 2)"};case"pentagon":return{kNum:1,kDen:1,piStr:"",kVal:1.72048,name:"Ngũ giác đều",desc:"S(x) \\approx 1.7205 [f(x)]^2",typstConst:"1.720477"};default:return{kNum:1,kDen:1,piStr:"",kVal:1,name:"Khác",desc:"S(x) = [f(x)]^2",typstConst:"1"}}}let C="poly",Q=null,De,rt=[{x:0,y:1},{x:1.3,y:1.5},{x:2.7,y:.5},{x:4,y:1.5}],S=5,ge=[0,0,0,0],et=null,_=null,lt="0 <= x <= 2: 0.5x + 1; 2 < x <= 3.5: 2; 3.5 < x <= 5: -0.4x + 3.4";const Ze=[{name:"🏺 Bình hoa 3 khúc",desc:"Nón cụt + Trụ tròn + Miệng loe",branches:[{id:"p1",x0:0,x1:1.5,expr:"0.4x + 1"},{id:"p2",x0:1.5,x1:3.5,expr:"1.6"},{id:"p3",x0:3.5,x1:5,expr:"0.5x - 0.15"}]},{name:"🍦 Nón cụt + Hình trụ",desc:"Bài toán thực tế THPT",branches:[{id:"p1",x0:0,x1:2,expr:"0.5x + 1"},{id:"p2",x0:2,x1:4.5,expr:"2"}]},{name:"⏳ Đồng hồ cát",desc:"Hai nón cụt đối xứng",branches:[{id:"p1",x0:0,x1:2,expr:"-0.5x + 2"},{id:"p2",x0:2,x1:4,expr:"0.5x"}]},{name:"🍷 Ly uống nước",desc:"Đáy phẳng + Thành loe",branches:[{id:"p1",x0:0,x1:.8,expr:"1"},{id:"p2",x0:.8,x1:4,expr:"0.45x + 0.64"}]},{name:"🕯️ Chân nến 3 tầng",desc:"Thu nhỏ dần theo chiều cao",branches:[{id:"p1",x0:0,x1:1.5,expr:"2.2 - 0.4x"},{id:"p2",x0:1.5,x1:3,expr:"1.6"},{id:"p3",x0:3,x1:4.5,expr:"1.0"}]}];let Y=[{id:"b1",x0:0,x1:2,expr:"0.5x + 1"},{id:"b2",x0:2,x1:3.5,expr:"2"},{id:"b3",x0:3.5,x1:5,expr:"-0.4x + 3.4"}],b=null,A="circle",me="horizontal",st=5,ne="typst";const Tt=460,Lt=240;let V,n,D=null,ie=50,ft=()=>{},ce,Ht,ct,re,de,pe,kt,ht,St,Ot,Ct,zt,vt,xe,Gt,he=!1,Dt=-1;function ke(l){const t=[],a=[...l].filter(i=>i.expr.trim()).sort((i,o)=>i.x0-o.x0);for(let i=0;i<a.length;i++){const o=a[i],h=+o.x0.toFixed(3),p=+o.x1.toFixed(3);if(p<=h)continue;const x=Te(o.expr)||(c=>1);let d,s;try{const c=x(0),u=x(1),m=x(2),T=x(1.5);!isNaN(c)&&!isNaN(u)&&!isNaN(m)&&!isNaN(T)&&Math.abs(m-2*u+c)<1e-5&&Math.abs(T-(.5*u+.5*m))<1e-5&&(d=+(u-c).toFixed(3),s=+c.toFixed(3))}catch{}let f=o.expr.replace(/\*/g,"").replace(/\bsin\b/gi,"\\sin").replace(/\bcos\b/gi,"\\cos").replace(/\btan\b/gi,"\\tan").replace(/\bln\b/gi,"\\ln").replace(/\bsqrt\b/gi,"\\sqrt").replace(/\^(\d+)/g,"^{$1}");if(d!==void 0&&s!==void 0)if(Math.abs(d)<1e-6)f=`${s}`;else{const c=d===1?"":d===-1?"-":`${d}`;Math.abs(s)<1e-6?f=`${c}x`:s>0?f=`${c}x + ${s}`:f=`${c}x - ${-s}`}t.push({x0:h,x1:p,m:d,c:s,expr:o.expr,tex:f,fn:x})}return{parts:t,eval:i=>{if(!t.length)return 0;if(i<=t[0].x0)return t[0].fn(t[0].x0);for(const o of t)if(i<=o.x1)return o.fn(i);return t[t.length-1].fn(t[t.length-1].x1)},toHumanString:()=>t.map((i,o)=>`${o===0?`${i.x0} <= x <= ${i.x1}`:`${i.x0} < x <= ${i.x1}`}: ${i.expr}`).join("; "),toTex:()=>t.length?`\\begin{cases} ${t.map((o,h)=>{const p=h===0?`${o.x0} \\le x \\le ${o.x1}`:`${o.x0} < x \\le ${o.x1}`;return`${o.tex} & \\text{khi } ${p}`}).join(" \\\\[4pt] ")} \\end{cases}`:"0",toTypst:()=>t.length?t.map((o,h)=>{const p=o.expr.replace(/\^/g,"^").replace(/\bsin\((.*?)\)/g,"calc.sin(($1) * 1rad)").replace(/\bcos\((.*?)\)/g,"calc.cos(($1) * 1rad)").replace(/\btan\((.*?)\)/g,"calc.tan(($1) * 1rad)").replace(/\bsqrt\((.*?)\)/g,"calc.sqrt($1)").replace(/\babs\((.*?)\)/g,"calc.abs($1)");return h===t.length-1?`${p}`:`if x <= ${o.x1} { ${p} }`}).join(" else "):"0",toTikZ:()=>{if(!t.length)return"0";let i="";for(let o=0;o<t.length;o++){const h=t[o],p=h.expr.replace(/\bsin\b/gi,"\\mysin").replace(/\bcos\b/gi,"\\mycos").replace(/\btan\b/gi,"\\mytan").replace(/\bln\b/gi,"ln").replace(/\bexp\b/gi,"exp").replace(/\bsqrt\b/gi,"sqrt").replace(/\bpi\b/gi,"pi").replace(/x/g,"(#1)");o===t.length-1?i+=p:i+=`(#1 <= ${h.x1} ? ${p} : `}return i+=")".repeat(Math.max(0,t.length-1)),i}}}function He(l){const t=[...l].sort((e,i)=>e.x-i.x),a=[];for(let e=1;e<t.length;e++){const i=+t[e-1].x.toFixed(3),o=+t[e].x.toFixed(3),h=t[e].x-t[e-1].x;if(Math.abs(h)<1e-9)continue;const p=(t[e].y-t[e-1].y)/h,x=t[e-1].y-p*t[e-1].x,d=+p.toFixed(3),s=+x.toFixed(3);let f="";if(Math.abs(d)<1e-6)f=`${s}`;else{const c=d===1?"":d===-1?"-":`${d}*`;Math.abs(s)<1e-6?f=`${c}x`:s>0?f=`${c}x + ${s}`:f=`${c}x - ${-s}`}a.push({id:`b${e}`,x0:i,x1:o,expr:f})}return ke(a)}function Ye(l){if(l=l.trim(),!l||!/[:;\n]|\bkhi\b|\bnếu\b|\bif\b|\bvới\b|\?/.test(l))return null;const a=l.split(/[;\n]+/).map(i=>i.trim()).filter(Boolean);if(a.length===0)return null;const e=[];for(let i=0;i<a.length;i++){const o=a[i];let h="",p="";const x=o.match(/^(.*?)\s+(?:khi|nếu|if|với)\s+(.*)$/i);if(x)p=x[1].trim(),h=x[2].trim();else if(o.includes(":")){const d=o.indexOf(":");h=o.slice(0,d).trim(),p=o.slice(d+1).trim()}if(h&&p){let d=null,s=null;const f=h.match(/(-?[\d.]+)\s*<=?\s*x\s*<=?\s*(-?[\d.]+)/i);if(f)d=parseFloat(f[1]),s=parseFloat(f[2]);else{const c=h.match(/[\[\(]\s*(-?[\d.]+)\s*[,;]\s*(-?[\d.]+)\s*[\]\)]/);if(c)d=parseFloat(c[1]),s=parseFloat(c[2]);else{const u=h.match(/x\s*<=?\s*(-?[\d.]+)/i);if(u)d=e.length>0?e[e.length-1].x1:0,s=parseFloat(u[1]);else{const m=h.match(/x\s*>=?\s*(-?[\d.]+)/i);m&&(d=parseFloat(m[1]),s=d+2)}}}d!==null&&s!==null&&p&&e.push({id:`b${i+1}`,x0:d,x1:s,expr:p})}}return e.length>0?e:null}let ze=0;function ye(l=!0){b=ke(Y),_=t=>b.eval(t),S=Math.max(.5,b.parts[b.parts.length-1]?.x1||4),Fe(),$e(l),clearTimeout(ze),ze=window.setTimeout(()=>{j()},140)}function Xt(){Ht&&(Ht.innerHTML="",Y.forEach((l,t)=>{const a=r("div","pw-row"),e=r("span","pw-idx",`Đoạn ${t+1}:`),i=r("span","pw-y","y ="),o=r("input","pw-expr-in");o.value=l.expr,o.placeholder="vd: 0.5x + 1 hoặc 2",o.addEventListener("input",()=>{l.expr=o.value,ye()});const h=r("span","pw-when","khi"),p=r("input","pw-num-in pw-x0");p.type="number",p.step="0.5",p.value=String(l.x0),p.addEventListener("input",()=>{l.x0=parseFloat(p.value)||0,ye()});const x=r("span","pw-rel",t===0?"≤ x ≤":"< x ≤"),d=r("input","pw-num-in pw-x1");d.type="number",d.step="0.5",d.value=String(l.x1),d.addEventListener("input",()=>{const f=l.x1;if(l.x1=parseFloat(d.value)||l.x0+1,t+1<Y.length&&Y[t+1].x0===f){Y[t+1].x0=l.x1;const c=Ht.querySelectorAll(".pw-x0")[t+1];c&&(c.value=String(l.x1))}ye()});const s=r("button","pw-del","&times;");s.title="Xóa đoạn này",s.disabled=Y.length<=1,s.addEventListener("click",()=>{Y.length<=1||(Y.splice(t,1),Xt(),j())}),a.append(e,i,o,h,p,x,d,s),Ht.appendChild(a)}))}function Qe(){const l=Y[Y.length-1],t=l?l.x1:0,a=+(t+2).toFixed(2);Y.push({id:`b${Date.now()}`,x0:t,x1:a,expr:"1.5"}),Xt(),j()}function Je(l){Y=JSON.parse(JSON.stringify(l.branches)),Xt(),j()}function tn(){const l=x=>Math.round(x*10)/10,t=rt.map(x=>{const d=l(x.x);return[new I(d**3),new I(d**2),new I(d),new I(1)]}),a=rt.map(x=>new I(l(x.y))),e=Ue(t,a);et=new ue([e[3],e[2],e[1],e[0]]),ge=e.map(x=>x.val());const[i,o,h,p]=ge;_=x=>i*x**3+o*x**2+h*x+p}function Te(l){try{let t=l.trim();if(!t)return null;t=t.replace(/(\d+(?:\.\d+)?)\s*x/gi,"$1*x").replace(/x\s*(\d+(?:\.\d+)?)/gi,"x*$1").replace(/(\))\s*x/gi,"$1*x").replace(/x\s*(\()/gi,"x*$1").replace(/(\d+(?:\.\d+)?)\s*(\()/g,"$1*$2").replace(/(\))\s*(\()/g,"$1*$2").replace(/(\))\s*(\d+(?:\.\d+)?)/g,"$1*$2").replace(/\^/g,"**").replace(/\bsin\b/gi,"Math.sin").replace(/\bcos\b/gi,"Math.cos").replace(/\btan\b/gi,"Math.tan").replace(/\bln\b/gi,"Math.log").replace(/\blog\b/gi,"Math.log10").replace(/\bexp\b/gi,"Math.exp").replace(/\bsqrt\b/gi,"Math.sqrt").replace(/\babs\b/gi,"Math.abs").replace(/\bpi\b/gi,"Math.PI").replace(/\be\b/gi,"Math.E");const a=new Function("x","return "+t),e=a(1);return typeof e!="number"||isNaN(e)?null:a}catch{return null}}function qe(l,t,a,e,i=120){const o=(a-t)/i;let h=l(t)**2+l(a)**2;for(let p=1;p<i;p++){const x=l(t+p*o);!isNaN(x)&&isFinite(x)&&(h+=(p%2===0?2:4)*x**2)}return o/3*h*e}function j(l="full"){const t=l==="drag";if(t&&C==="poly"&&Q){const a=Q.points();S=Math.max(.5,a[a.length-1].x),b=He(a),_=e=>b.eval(e),et=null,$e(!0);return}if(st=Math.max(3,Math.min(15,parseInt(St?.value,10)||5)),C==="piecewise")b=ke(Y),_=a=>b.eval(a),et=null,S=Math.max(.5,b.parts[b.parts.length-1]?.x1||4),lt=b.toHumanString(),ct&&document.activeElement!==ct&&(ct.value=lt);else if(C==="poly"&&Q){const a=Q.points();S=Math.max(.5,a[a.length-1].x),b=He(a),_=e=>b.eval(e),et=null,lt=b.toHumanString(),Y=b.parts.map((e,i)=>({id:`b${i+1}`,x0:e.x0,x1:e.x1,expr:e.expr})),ct&&!t&&document.activeElement!==ct&&(ct.value=lt)}else if(C==="drag"){if(b=null,S=Math.max(.5,parseFloat(ht?.value)||4),rt[3].x=S,tn(),kt&&!t){const[a,e,i,o]=ge;kt.value=`${a.toFixed(3)}*x^3 + ${e.toFixed(3)}*x^2 + ${i.toFixed(3)}*x + ${o.toFixed(3)}`.replace(/\+ -/g,"- ")}}else S=Math.max(.5,parseFloat(ht?.value)||4),lt=kt?.value.trim()||"0.5*x + 1",b=null,_=Te(lt)||(a=>.5*a+1),et=null;t||en(),C!=="poly"&&Fe(),$e(t),t||(window.clearTimeout(Ae),Ae=window.setTimeout(()=>{an(),we()},160))}let Ae=0,ee=0;function en(){if(Ot)if(b)Ot.innerHTML=W(`y = f(x) = ${b.toTex()}`);else if(C==="drag"&&et)Ot.innerHTML=W(`y = f(x) = ${et.toTex()}`);else{const l=lt.replace(/\*/g,"").replace(/\bsin\b/gi,"\\sin").replace(/\bcos\b/gi,"\\cos").replace(/\btan\b/gi,"\\tan").replace(/\bln\b/gi,"\\ln").replace(/\blog\b/gi,"\\log").replace(/\bexp\b/gi,"e^").replace(/\bsqrt\b/gi,"\\sqrt").replace(/\bpi\b/gi,"\\pi").replace(/\^(\d+)/g,"^{$1}");Ot.innerHTML=W(`y = f(x) = ${l}`)}}function q(l,t){const e=Tt-72,i=Lt-2*36;return{px:36+l/S*e,py:i+36-t/3.2*i}}function nn(l,t){const e=Tt-72,i=Lt-2*36;return{x:(l-36)/e*S,y:(i+36-t)/i*3.2}}function Fe(){if(!n)return;const l=Tt,t=Lt,a=V.width/Tt;n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,V.width,V.height),n.setTransform(a,0,0,a,0,0),n.lineJoin="round",n.lineCap="round";const e=document.documentElement.dataset.theme!=="light",i=e?"rgba(255, 255, 255, 0.14)":"rgba(15, 23, 42, 0.10)",o=e?"#f1f5f9":"#0f172a",h=e?"#94a3b8":"#475569",p=e?"#ffffff":"#0f172a",x=q(0,0);n.strokeStyle=i,n.lineWidth=1,n.setLineDash([2,3]);const d=Math.ceil(S);for(let s=1;s<=d;s++){const f=q(s,0);n.beginPath(),n.moveTo(f.px,20),n.lineTo(f.px,x.py),n.stroke()}for(let s=1;s<=3;s++){const f=q(0,s);n.beginPath(),n.moveTo(x.px,f.py),n.lineTo(l-20,f.py),n.stroke()}n.setLineDash([]),n.strokeStyle=o,n.lineWidth=2,n.beginPath(),n.moveTo(18,x.py),n.lineTo(l-14,x.py),n.moveTo(x.px,t-16),n.lineTo(x.px,14),n.stroke(),n.fillStyle=o,n.beginPath(),n.moveTo(l-10,x.py),n.lineTo(l-20,x.py-5),n.lineTo(l-20,x.py+5),n.closePath(),n.fill(),n.beginPath(),n.moveTo(x.px,10),n.lineTo(x.px-5,20),n.lineTo(x.px+5,20),n.closePath(),n.fill(),n.font="bold 11px ui-sans-serif, system-ui, sans-serif";for(let s=1;s<=d;s++){const f=q(s,0);n.strokeStyle=o,n.lineWidth=1.5,n.beginPath(),n.moveTo(f.px,x.py-3.5),n.lineTo(f.px,x.py+3.5),n.stroke(),n.fillStyle=h,n.textAlign="center",n.fillText(String(s),f.px,x.py+16)}for(let s=1;s<=3;s++){const f=q(0,s);n.strokeStyle=o,n.lineWidth=1.5,n.beginPath(),n.moveTo(x.px-3.5,f.py),n.lineTo(x.px+3.5,f.py),n.stroke(),n.fillStyle=h,n.textAlign="right",n.fillText(String(s),x.px-7,f.py+4)}if(n.fillStyle=p,n.textAlign="right",n.font="bold 12.5px ui-sans-serif, system-ui, sans-serif",n.fillText("O",x.px-6,x.py+16),n.font='bold italic 14px "Times New Roman", serif',n.textAlign="left",n.fillText("x",l-18,x.py-9),n.fillText("y",x.px+10,18),b&&b.parts.length>0){n.fillStyle=e?"rgba(99, 102, 241, 0.18)":"rgba(99, 102, 241, 0.22)",n.beginPath(),n.moveTo(x.px,x.py);for(const c of b.parts)if(c.m!==void 0&&c.c!==void 0){const u=q(c.x0,Math.max(0,c.fn(c.x0))),m=q(c.x1,Math.max(0,c.fn(c.x1)));n.lineTo(u.px,u.py),n.lineTo(m.px,m.py)}else for(let m=0;m<=24;m++){const T=c.x0+m/24*(c.x1-c.x0);let N=c.fn(T);(isNaN(N)||!isFinite(N))&&(N=0);const z=q(T,Math.max(0,N));n.lineTo(z.px,z.py)}const s=q(S,0);n.lineTo(s.px,s.py),n.closePath(),n.fill(),n.strokeStyle="#6366f1",n.lineWidth=2.8,n.beginPath();let f=!0;for(const c of b.parts)if(c.m!==void 0&&c.c!==void 0){const u=q(c.x0,c.fn(c.x0)),m=q(c.x1,c.fn(c.x1));f?(n.moveTo(u.px,u.py),f=!1):n.lineTo(u.px,u.py),n.lineTo(m.px,m.py)}else for(let m=0;m<=24;m++){const T=c.x0+m/24*(c.x1-c.x0);let N=c.fn(T);(isNaN(N)||!isFinite(N))&&(N=0);const z=q(T,N);f?(n.moveTo(z.px,z.py),f=!1):n.lineTo(z.px,z.py)}n.stroke()}else if(_){n.fillStyle=e?"rgba(99, 102, 241, 0.18)":"rgba(99, 102, 241, 0.22)",n.beginPath(),n.moveTo(x.px,x.py);const s=100;for(let c=0;c<=s;c++){const u=c/s*S;let m=_(u);(isNaN(m)||!isFinite(m))&&(m=0);const T=q(u,Math.max(0,m));n.lineTo(T.px,T.py)}const f=q(S,0);n.lineTo(f.px,f.py),n.closePath(),n.fill(),n.strokeStyle="#6366f1",n.lineWidth=2.8,n.beginPath();for(let c=0;c<=s;c++){const u=c/s*S;let m=_(u);(isNaN(m)||!isFinite(m))&&(m=0);const T=q(u,m);c===0?n.moveTo(T.px,T.py):n.lineTo(T.px,T.py)}n.stroke()}if(C==="drag"&&(n.strokeStyle=e?"#f59e0baa":"#d97706bb",n.lineWidth=1.6,n.setLineDash([4,4]),n.beginPath(),rt.forEach((s,f)=>{const c=q(s.x,s.y);f===0?n.moveTo(c.px,c.py):n.lineTo(c.px,c.py)}),n.stroke(),n.setLineDash([]),rt.forEach((s,f)=>{const c=q(s.x,s.y);n.fillStyle=f===Dt?"#ef4444":"#f43f5e",n.beginPath(),n.arc(c.px,c.py,7.5,0,Math.PI*2),n.fill(),n.strokeStyle="#ffffff",n.lineWidth=2.2,n.stroke();const u=`P${f+1}(${s.x.toFixed(1)}, ${s.y.toFixed(1)})`;n.font="bold 11px ui-sans-serif, system-ui, sans-serif";const m=n.measureText(u).width,T=c.px+12+m>l-4?c.px-14-m:c.px+12,N=c.py-8<14?c.py+18:c.py-8;n.fillStyle=e?"rgba(15, 23, 42, 0.88)":"rgba(255, 255, 255, 0.92)",n.strokeStyle=e?"rgba(255, 255, 255, 0.2)":"rgba(15, 23, 42, 0.15)",n.lineWidth=1;const z=T-4,g=N-11,w=m+8,k=16;n.beginPath(),n.roundRect?n.roundRect(z,g,w,k,4):n.rect(z,g,w,k),n.fill(),n.stroke(),n.fillStyle=e?"#f8fafc":"#0f172a",n.textAlign="left",n.fillText(u,T,N+1)})),b&&(C==="piecewise"||C==="poly")){const s=b.parts;s.forEach((f,c)=>{if(c<s.length-1){const T=q(f.x1,f.fn(f.x1)),N=q(f.x1,0);n.strokeStyle=e?"rgba(99, 102, 241, 0.45)":"rgba(99, 102, 241, 0.35)",n.lineWidth=1.3,n.setLineDash([3,3]),n.beginPath(),n.moveTo(T.px,T.py),n.lineTo(N.px,N.py),n.stroke(),n.setLineDash([]),n.fillStyle="#6366f1",n.beginPath(),n.arc(T.px,T.py,4.5,0,Math.PI*2),n.fill(),n.strokeStyle="#ffffff",n.lineWidth=1.6,n.stroke()}const u=(f.x0+f.x1)/2,m=q(u,0);n.fillStyle=e?"#a5b4fc":"#4f46e5",n.font="bold 11px ui-sans-serif, system-ui, sans-serif",n.textAlign="center",n.fillText(`I${c+1}`,m.px,x.py-8)})}}function sn(l){return l==="circle"?0:l==="square"?4:l==="triangle"?3:l==="hexagon"?6:5}let be=!0;function $e(l=!1){!D||!_||(D.setProfile(_,S,sn(A),me==="vertical",st,"#6366f1",C==="poly"&&Q?Q.points().slice(1,-1).map(t=>t.x):[],{fast:l,fit:be&&!l}),l||(be=!1),D.setProfileT(ie/100))}function an(){if(!zt||!_)return;const l=_e(A),t=new I(S),a=A==="circle"?"\\pi":A==="square"?"2":A==="triangle"?"\\dfrac{3\\sqrt{3}}{4}":A==="hexagon"?"\\dfrac{3\\sqrt{3}}{2}":"K";if(b){const e=b.parts;let i=0;const o=[];e.forEach((d,s)=>{let f=0,c="";if(d.m!==void 0&&d.c!==void 0){const u=d.m,m=d.c,T=N=>u*u/3*N**3+u*m*N**2+m*m*N;f=T(d.x1)-T(d.x0),c=`I_{${s+1}} = \\int_{${d.x0}}^{${d.x1}} (${d.tex})^2 dx = ${f.toFixed(4)}`}else f=qe(d.fn,d.x0,d.x1,1,60),c=`I_{${s+1}} = \\int_{${d.x0}}^{${d.x1}} [${d.tex}]^2 dx \\approx ${f.toFixed(4)}`;i+=f,o.push(c)});const h=i*l.kVal,p=A==="circle"?`${i.toFixed(4)}\\pi`:`${h.toFixed(4)}`,x=h.toFixed(4);zt.innerHTML=`
      <div class="step-card">
        <div class="step-badge">BƯỚC 1</div>
        <div class="step-title">Biên dạng f(x) (Hàm đa biểu thức từng đoạn)</div>
        <div class="step-content">${W(`f(x) = ${b.toTex()}`)}</div>
      </div>
      <div class="step-card">
        <div class="step-badge">BƯỚC 2</div>
        <div class="step-title">Công thức tích phân thể tích chia theo từng khoảng</div>
        <div class="step-content">${W(`V = ${a} \\cdot \\sum_{i=1}^{${e.length}} \\int_{x_{i-1}}^{x_i} [y_i(x)]^2 dx = ${a} \\left( ${e.map((d,s)=>`I_{${s+1}}`).join(" + ")} \\right)`)}</div>
      </div>
      <div class="step-card">
        <div class="step-badge">BƯỚC 3</div>
        <div class="step-title">Tính tích phân thành phần từng đoạn</div>
        <div class="step-content" style="display:flex;flex-direction:column;gap:8px">
          ${o.map(d=>`<div class="step-math-row">${W(d)}</div>`).join("")}
          <div style="margin-top:6px;font-weight:700;color:var(--ink)">${W(`\\Rightarrow \\sum I_i = ${i.toFixed(4)}`)}</div>
        </div>
      </div>
      <div class="vol-badge">
        <div class="vol-label">THỂ TÍCH TỔNG CỘNG</div>
        <div class="vol-val">${W(`V = ${p} \\approx ${x}`)} (đvtt)</div>
        <div class="vol-dec">Tích phân đa thức từng đoạn giải tích chuẩn SGK</div>
      </div>
    `,Ct&&(Ct.innerHTML=Kt(`V = ${p} \\approx ${x}`));return}if(et){const e=et.mul(et),i=e.integrate(),h=i.evalExact(t).sub(i.evalExact(new I(0))).mul(new I(l.kNum,l.kDen)),p=`${h.toTex()}${l.piStr}`,x=(h.val()*(A==="circle"?Math.PI:l.piStr?Math.sqrt(3):1)).toFixed(4);let d=l.desc;A==="square"&&(d="S(x) = 2 [f(x)]^2"),zt.innerHTML=`
      <div class="step-card">
        <div class="step-badge">BƯỚC 1</div>
        <div class="step-title">Biên dạng f(x)</div>
        <div class="step-content">${W(`f(x) = ${et.toTex()}`)}</div>
      </div>
      <div class="step-card">
        <div class="step-badge">BƯỚC 2</div>
        <div class="step-title">Diện tích thiết diện S(x)</div>
        <div class="step-content">${W(d)}</div>
      </div>
      <div class="step-card">
        <div class="step-badge">BƯỚC 3</div>
        <div class="step-title">Khai triển [f(x)]²</div>
        <div class="step-content">${W(`[f(x)]^2 = ${e.toTex()}`)}</div>
      </div>
      <div class="step-card">
        <div class="step-badge">BƯỚC 4</div>
        <div class="step-title">Nguyên hàm F(x)</div>
        <div class="step-content">${W(`F(x) = \\int [f(x)]^2 dx = ${i.toTex()}`)}</div>
      </div>
      <div class="vol-badge">
        <div class="vol-label">THỂ TÍCH CHÍNH XÁC</div>
        <div class="vol-val">${W(`V = \\int_0^{${S}} S(x) dx = ${p}`)}</div>
        <div class="vol-dec">≈ ${x} (đvtt)</div>
      </div>
    `,Ct&&(Ct.innerHTML=Kt(`V = ${p} \\approx ${x}`))}else{const e=qe(_,0,S,l.kVal);let i="";try{const o=Ge().eval(`int(${lt}^2, x, 0, ${S})`);o.ok&&o.items&&o.items[0]?.tex&&(i=o.items[0].tex)}catch{}zt.innerHTML=`
      <div class="step-card">
        <div class="step-badge">BƯỚC 1</div>
        <div class="step-title">Biên dạng f(x) (Hàm nhập)</div>
        <div class="step-content">${W(`f(x) = ${lt}`)}</div>
      </div>
      <div class="step-card">
        <div class="step-badge">BƯỚC 2</div>
        <div class="step-title">Công thức tích phân thể tích</div>
        <div class="step-content">${W(`V = ${a} \\cdot \\int_0^{${S}} [f(x)]^2 dx`)}</div>
      </div>
      ${i?`
      <div class="step-card">
        <div class="step-badge">BƯỚC 3</div>
        <div class="step-title">Tích phân giải tích (CAS)</div>
        <div class="step-content">${W(`\\int_0^{${S}} [f(x)]^2 dx = ${i}`)}</div>
      </div>
      `:""}
      <div class="vol-badge">
        <div class="vol-label">THỂ TÍCH TÍNH TOÁN</div>
        <div class="vol-val">${W(`V \\approx ${e.toFixed(4)}`)} (đvtt)</div>
        <div class="vol-dec">Phương pháp Simpson (N=120) & CAS Engine</div>
      </div>
    `,Ct&&(Ct.innerHTML=Kt(`V \\approx ${e.toFixed(4)}`))}}function we(){if(!vt||!_)return;const l=me==="horizontal",t=A==="circle"?0:A==="square"?4:A==="triangle"?3:A==="hexagon"?6:5;let a="",e="";a=`// ═════════════════════════════════════════════════════════════════════════════
// KHỐI 3D HUNG-MATH / CETZ — TỰ ĐỘNG NÉT ĐỨT/LIỀN (AUTO HIDDEN LINES)
// Sinh tự động từ HUNG-CAL (TikZ & Typst Shape Generator)
// ═════════════════════════════════════════════════════════════════════════════
#import "@preview/cetz:0.5.2"

#align(center, cetz.canvas(length: 1.2cm, {
  import cetz.draw: *

  // Bảng màu chuẩn Sư phạm
  let col-main  = rgb("#0057b8")   // Nét chính / đường sinh
  let col-dash  = rgb("#94a3b8")   // Nét khuất (đứt)
  let col-fill  = rgb("#e0f2fe60") // Đổ bóng mờ thiết diện
  let col-curve = rgb("#e11d48")   // Biên dạng f(x)
  let col-axis  = rgb("#475569")   // Trục toạ độ

  // Hàm biên dạng f(x)
  let f(x) = ${b?b.toTypst():C==="drag"&&et?et.toTypst():lt.replace(/\^/g,"^").replace(/\bsin\((.*?)\)/g,"calc.sin(($1) * 1rad)").replace(/\bcos\((.*?)\)/g,"calc.cos(($1) * 1rad)").replace(/\btan\((.*?)\)/g,"calc.tan(($1) * 1rad)").replace(/\bsqrt\((.*?)\)/g,"calc.sqrt($1)").replace(/\babs\((.*?)\)/g,"calc.abs($1)")}
  let hmax = ${S.toFixed(2)}

  // Phép chiếu 3D sang 2D (Oblique chuẩn SGK)
  let proj(x, y, z) = (
    ${l?"-0.35 * x + z":"-0.35 * x + y"},
    ${l?"-0.15 * x + y":"-0.15 * x - z"}
  )

  // 1. Trục đối xứng (Nét đứt bên trong khối, nét liền mũi tên bên ngoài)
  line(proj(0, 0, 0), proj(0, 0, hmax), stroke: (paint: col-dash, thickness: 0.8pt, dash: "dashed"))
  line(proj(0, 0, hmax), proj(0, 0, hmax + 0.6), stroke: 0.8pt + col-axis, mark: (end: ">"))
  content(proj(0, 0, hmax + 0.8), text(size: 8.5pt, fill: col-axis)[$${l?"x":"y"}$])

  // Trục bán kính Oy
  line(proj(0, 0, 0), proj(0, 2.5, 0), stroke: 0.8pt + col-axis, mark: (end: ">"))
  content(proj(0, 2.8, 0), text(size: 8.5pt, fill: col-axis)[$${l?"y":"x"}$])
`,A==="circle"?a+=`
  // 2. Các đường kinh tuyến (Meridians) với phân tách Thấy / Khuất
  for t in (0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330) {
    let visible = calc.cos(t * 1deg - 10deg) > 0
    let pts = ()
    for step in range(0, 31) {
      let x = step * hmax / 30.0
      let r = f(x)
      let rad = t * 1deg
      pts.push(proj(r * calc.cos(rad), r * calc.sin(rad), x))
    }
    if visible {
      line(..pts, stroke: 0.75pt + col-main)
    } else {
      line(..pts, stroke: (paint: col-dash, thickness: 0.55pt, dash: "dashed"))
    }
  }

  // 3. Các thiết diện tròn (Latitudes): cung sau nét đứt, cung trước nét liền
  let sec-vals = (${Array.from({length:st},(c,u)=>(u*S/(st-1)).toFixed(2)).join(", ")})
  for z in sec-vals {
    let r = f(z)
    // Cung sau khuất (100° đến 275°)
    let back-pts = ()
    for step in range(0, 21) {
      let a = (100.0 + step * (275.0 - 100.0) / 20.0) * 1deg
      back-pts.push(proj(r * calc.cos(a), r * calc.sin(a), z))
    }
    line(..back-pts, stroke: (paint: col-dash, thickness: 0.6pt, dash: "dashed"))

    // Cung trước thấy (-85° đến 100°)
    let front-pts = ()
    for step in range(0, 21) {
      let a = (-85.0 + step * (100.0 - (-85.0)) / 20.0) * 1deg
      front-pts.push(proj(r * calc.cos(a), r * calc.sin(a), z))
    }
    line(..front-pts, stroke: 1.2pt + col-main)
    circle(proj(0, 0, z), radius: 1.5pt, fill: col-main)
  }
`:a+=`
  // 2. Các đường sống dọc (Spines) của lăng trụ
  let sides = ${t}
  let angle-off = ${t===4||t===6?"45deg":"-90deg"}
  for s in range(0, sides) {
    let ang = s * (360deg / sides) + angle-off
    let hidden = (ang > 90deg and ang < 270deg)
    let pts = ()
    for step in range(0, 31) {
      let x = step * hmax / 30.0
      let r = f(x)
      pts.push(proj(r * calc.cos(ang), r * calc.sin(ang), x))
    }
    if hidden {
      line(..pts, stroke: (paint: col-dash, thickness: 0.7pt, dash: "dashed"))
    } else {
      line(..pts, stroke: 1.2pt + col-main)
    }
  }

  // 3. Các thiết diện đa giác cắt dọc trục
  let sec-vals = (${Array.from({length:st},(u,m)=>(m*S/(st-1)).toFixed(2)).join(", ")})
  for z in sec-vals {
    let r = f(z)
    for s in range(0, sides) {
      let ang1 = s * (360deg / sides) + angle-off
      let ang2 = (s + 1) * (360deg / sides) + angle-off
      let hidden = (ang1 > 90deg and ang1 < 270deg) or (ang2 > 90deg and ang2 < 270deg)
      let p1 = proj(r * calc.cos(ang1), r * calc.sin(ang1), z)
      let p2 = proj(r * calc.cos(ang2), r * calc.sin(ang2), z)
      if hidden {
        line(p1, p2, stroke: (paint: col-dash, thickness: 0.6pt, dash: "dashed"))
      } else {
        line(p1, p2, stroke: 1.1pt + col-main)
      }
    }
    circle(proj(0, 0, z), radius: 1.5pt, fill: col-main)
  }
`,a+=`
  // 4. Đường biên dạng nổi bật f(x)
  let curve-pts = ()
  for step in range(0, 41) {
    let x = step * hmax / 40.0
    curve-pts.push(proj(0, f(x), x))
  }
  line(..curve-pts, stroke: 2pt + col-curve)
  content(proj(0, f(hmax * 0.7) + 0.35, hmax * 0.7), text(size: 9pt, fill: col-curve, weight: "bold")[$y = f(x)$])
}))
`;const o=c=>c.toFixed(4),[h,p,x,d]=ge,s=b?b.toTikZ():C==="drag"&&et?`${o(h)}*(#1)^3+${o(p)}*(#1)^2+${o(x)}*(#1)+${o(d)}`.replace(/\+ -/g,"- "):lt.replace(/\bsin\b/gi,"\\mysin").replace(/\bcos\b/gi,"\\mycos").replace(/\btan\b/gi,"\\mytan").replace(/\bln\b/gi,"ln").replace(/\bexp\b/gi,"exp").replace(/\bsqrt\b/gi,"sqrt").replace(/\bpi\b/gi,"pi").replace(/x/g,"(#1)");if(e=`% TikZ 3D Generator V5 - Auto Hidden Lines (Dashed/Solid)
\\begin{center}
\\begin{tikzpicture}[${l?"x={(-0.15cm,-0.15cm)}, y={(0cm,1cm)}, z={(1cm,0cm)}":"x={(-0.15cm,-0.15cm)}, y={(1cm,0cm)}, z={(0cm,1cm)}"}, scale=1.5, >=stealth]
  \\def\\mysin(#1){sin((#1) r)} \\def\\mycos(#1){cos((#1) r)} \\def\\mytan(#1){tan((#1) r)}
  \\pgfmathdeclarefunction{myfunc}{1}{\\pgfmathparse{${s}}}
  \\def\\hmin{0} \\def\\hmax{${S.toFixed(2)}}

  \\coordinate (O) at (0,0,0);

  % Tô màu mờ vùng biên dạng f(x)
  \\fill[red!10, opacity=0.5] plot[domain=\\hmin:\\hmax, samples=50] (0, {myfunc(\\x)}, \\x) -- (0,0,\\hmax) -- (0,0,0) -- cycle;
`,A==="circle")e+=`
  % === CÁC ĐƯỜNG KINH TUYẾN (Auto Hidden Lines) ===
  \\foreach \\t in {0,30,...,330} {
    \\pgfmathparse{cos(\\t-10) > 0 ? "solid" : "dashed"} \\let\\ls\\pgfmathresult
    \\pgfmathparse{cos(\\t-10) > 0 ? 0.55 : 0.2} \\let\\op\\pgfmathresult
    \\draw[blue!60!black, \\ls, opacity=\\op] plot[domain=\\hmin:\\hmax, samples=40] ({myfunc(\\x)*cos(\\t)}, {myfunc(\\x)*sin(\\t)}, \\x);
  }

  % === CÁC THIẾT DIỆN TRÒN (Cung sau nét đứt, cung trước nét liền) ===
  \\foreach \\z in {${Array.from({length:st},(c,u)=>(u*S/(st-1)).toFixed(2)).join(",")}} {
    \\pgfmathsetmacro{\\r}{myfunc(\\z)}
    % Cung sau khuất (100° đến 275°)
    \\draw[blue!50!black, dashed, opacity=0.35] plot[domain=100:275, samples=30] ({\\r*cos(\\x)}, {\\r*sin(\\x)}, \\z);
    % Cung trước thấy (-85° đến 100°)
    \\draw[blue!80!black, thick] plot[domain=-85:100, samples=30] ({\\r*cos(\\x)}, {\\r*sin(\\x)}, \\z);
    \\filldraw[fill=blue!50] (0,0,\\z) circle (0.5pt);
  }
`;else if(A==="square")e+=`
  % === KHỐI LĂNG TRỤ VUÔNG ===
  % 4 đường sống (3 thấy, 1 khuất)
  \\draw[thick] plot[domain=\\hmin:\\hmax, samples=50] ({myfunc(\\x)}, {myfunc(\\x)}, \\x);
  \\draw[thick] plot[domain=\\hmin:\\hmax, samples=50] ({myfunc(\\x)}, {-myfunc(\\x)}, \\x);
  \\draw[thick] plot[domain=\\hmin:\\hmax, samples=50] ({-myfunc(\\x)}, {myfunc(\\x)}, \\x);
  \\draw[dashed, opacity=0.4] plot[domain=\\hmin:\\hmax, samples=50] ({-myfunc(\\x)}, {-myfunc(\\x)}, \\x); % Khuất

  % Các thiết diện vuông
  \\foreach \\z in {${Array.from({length:st},(c,u)=>(u*S/(st-1)).toFixed(2)).join(",")}} {
    \\pgfmathsetmacro{\\r}{myfunc(\\z)}
    \\draw[dashed, ultra thin] (\\r, -\\r, \\z) -- (-\\r, -\\r, \\z) -- (-\\r, \\r, \\z); % Khuất
    \\draw[thick] (\\r, -\\r, \\z) -- (\\r, \\r, \\z) -- (-\\r, \\r, \\z); % Thấy
    \\filldraw (0,0,\\z) circle (0.8pt);
  }
`;else{e+=`
  % === KHỐI ĐA GIÁC (${t} CẠNH) ===
  % Spines
`;for(let c=0;c<t;c++){const u=Math.round(c*360/t)+90,m=u>90&&u<270;e+=`  \\draw[${m?"dashed, opacity=0.4":"thick"}] plot[domain=\\hmin:\\hmax, samples=40] ({myfunc(\\x)*cos(${u})}, {myfunc(\\x)*sin(${u})}, \\x);
`}e+=`
  % Thiết diện
  \\foreach \\z in {${Array.from({length:st},(c,u)=>(u*S/(st-1)).toFixed(2)).join(",")}} {
    \\pgfmathsetmacro{\\r}{myfunc(\\z)}
`;for(let c=0;c<t;c++){const u=Math.round(c*360/t)+90,m=Math.round((c+1)*360/t)+90,T=u>90&&u<270||m>90&&m<270;e+=`    \\draw[${T?"dashed, opacity=0.4":"thick"}] ({\\r*cos(${u})}, {\\r*sin(${u})}, \\z) -- ({\\r*cos(${m})}, {\\r*sin(${m})}, \\z);
`}e+=`    \\filldraw (0,0,\\z) circle (0.8pt);
  }
`}e+=`
  % Đường biên dạng đỏ f(x)
  \\draw[red, ultra thick, domain=\\hmin:\\hmax, samples=50] plot (0, {myfunc(\\x)}, \\x);

  % Trục toạ độ
  \\draw[->, dashed] (0,0,0) -- (0,0,\\hmax);
  \\draw[->] (0,0,\\hmax) -- (0,0,\\hmax+0.8) node[above] {$${l?"x":"y"}$};
  \\draw[->] (0,0,0) -- (0,2.5,0) node[right] {$${l?"y":"x"}$};
  \\node[right, red] at (0, 2.5, ${(S*.75).toFixed(1)}) {$y = f(x)$};
\\end{tikzpicture}
\\end{center}`,vt.value=ne==="typst"?a:e}function qt(l){Gt&&(Gt.textContent=l,Gt.classList.add("show"),setTimeout(()=>Gt.classList.remove("show"),2200))}function on(){let e=Math.max(.5,S),i=3,o=[];if(C==="poly"&&Q)o=Q.points(),e=Math.max(.5,...o.map(g=>g.x)),i=Math.max(2.5,Math.max(...o.map(g=>g.y))*1.25);else if(b&&b.parts.length>0){e=Math.max(.5,b.parts[b.parts.length-1].x1);const g=Math.max(...b.parts.map(w=>Math.max(w.fn(w.x0),w.fn(w.x1))));i=Math.max(2.5,g*1.25)}else C==="drag"&&(e=Math.max(.5,S),i=Math.max(2.5,Math.max(...rt.map(g=>g.y))*1.25));const h=g=>50+g/e*(750-2*50),p=g=>370-g/i*(420-2*50),x=h(0),d=p(0);let s=`<?xml version="1.0" encoding="UTF-8"?>
`;s+=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 420" width="750" height="420">
`,s+=`  <defs>
`,s+=`    <marker id="s3dArrowX" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
`,s+=`      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#475569"/>
`,s+=`    </marker>
`,s+=`    <marker id="s3dArrowY" viewBox="0 0 10 10" refX="5" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
`,s+=`      <path d="M 1.5 8 L 5 0 L 8.5 8 z" fill="#475569"/>
`,s+=`    </marker>
`,s+=`  </defs>
`,s+=`  <rect width="100%" height="100%" fill="#ffffff" rx="10"/>
`,s+=`  <!-- Grid -->
`;const f=Math.ceil(e);for(let g=1;g<=f;g++){const w=h(g);s+=`  <line x1="${w.toFixed(1)}" y1="50" x2="${w.toFixed(1)}" y2="${d.toFixed(1)}" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/>
`}const c=Math.floor(i);for(let g=1;g<=c;g++){const w=p(g);s+=`  <line x1="${x.toFixed(1)}" y1="${w.toFixed(1)}" x2="${700 .toFixed(1)}" y2="${w.toFixed(1)}" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/>
`}s+=`  <!-- Truc Ox, Oy -->
`,s+=`  <line x1="35" y1="${d.toFixed(1)}" x2="${715 .toFixed(1)}" y2="${d.toFixed(1)}" stroke="#334155" stroke-width="2" marker-end="url(#s3dArrowX)"/>
`,s+=`  <line x1="${x.toFixed(1)}" y1="${385 .toFixed(1)}" x2="${x.toFixed(1)}" y2="${35 .toFixed(1)}" stroke="#334155" stroke-width="2" marker-end="url(#s3dArrowY)"/>
`,s+=`  <text x="${720 .toFixed(1)}" y="${(d+5).toFixed(1)}" font-family="serif" font-style="italic" font-weight="bold" font-size="15" fill="#1e293b">x</text>
`,s+=`  <text x="${(x+8).toFixed(1)}" y="${34 .toFixed(1)}" font-family="serif" font-style="italic" font-weight="bold" font-size="15" fill="#1e293b">y</text>
`,s+=`  <text x="${(x-14).toFixed(1)}" y="${(d+16).toFixed(1)}" font-family="sans-serif" font-size="12" fill="#64748b">O</text>
`;for(let g=1;g<=f;g++){const w=h(g);s+=`  <line x1="${w.toFixed(1)}" y1="${(d-3).toFixed(1)}" x2="${w.toFixed(1)}" y2="${(d+3).toFixed(1)}" stroke="#334155" stroke-width="1.5"/>
`,s+=`  <text x="${w.toFixed(1)}" y="${(d+16).toFixed(1)}" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#64748b">${g}</text>
`}for(let g=1;g<=c;g++){const w=p(g);s+=`  <line x1="${(x-3).toFixed(1)}" y1="${w.toFixed(1)}" x2="${(x+3).toFixed(1)}" y2="${w.toFixed(1)}" stroke="#334155" stroke-width="1.5"/>
`,s+=`  <text x="${(x-8).toFixed(1)}" y="${(w+4).toFixed(1)}" font-family="sans-serif" font-size="11" text-anchor="end" fill="#64748b">${g}</text>
`}let u=`M ${x.toFixed(1)} ${d.toFixed(1)} `,m="";if(C==="poly"&&o.length>0){o.forEach((w,k)=>{const M=h(w.x).toFixed(1),P=p(w.y).toFixed(1);k===0?(u+=`L ${M} ${P} `,m+=`M ${M} ${P} `):(u+=`L ${M} ${P} `,m+=`L ${M} ${P} `)});const g=o[o.length-1];u+=`L ${h(g.x).toFixed(1)} ${d.toFixed(1)} Z`}else if(b&&b.parts.length>0){let g=!0;for(const k of b.parts)if(k.m!==void 0&&k.c!==void 0){const M=h(k.x0).toFixed(1),P=p(k.fn(k.x0)).toFixed(1),R=h(k.x1).toFixed(1),J=p(k.fn(k.x1)).toFixed(1);g&&(u+=`L ${M} ${P} `,m+=`M ${M} ${P} `,g=!1),u+=`L ${R} ${J} `,m+=`L ${R} ${J} `}else for(let P=0;P<=24;P++){const R=k.x0+P/24*(k.x1-k.x0),J=k.fn(R),Z=h(R).toFixed(1),ut=p(isNaN(J)?0:J).toFixed(1);g?(u+=`L ${Z} ${ut} `,m+=`M ${Z} ${ut} `,g=!1):(u+=`L ${Z} ${ut} `,m+=`L ${Z} ${ut} `)}const w=b.parts[b.parts.length-1].x1;u+=`L ${h(w).toFixed(1)} ${d.toFixed(1)} Z`}else if(_){for(let w=0;w<=120;w++){const k=w/120*e,M=_(k),P=h(k).toFixed(1),R=p(isNaN(M)||!isFinite(M)?0:Math.max(0,M)).toFixed(1);w===0?(u+=`L ${P} ${R} `,m+=`M ${P} ${R} `):(u+=`L ${P} ${R} `,m+=`L ${P} ${R} `)}u+=`L ${h(e).toFixed(1)} ${d.toFixed(1)} Z`}s+=`  <!-- Mien phang to mau -->
`,s+=`  <path d="${u}" fill="#6366f1" fill-opacity="0.22"/>
`,s+=`  <!-- Duong bien dang f(x) -->
`,s+=`  <path d="${m}" fill="none" stroke="#6366f1" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
`,C==="poly"&&o.length>0?o.forEach((g,w)=>{const k=h(g.x).toFixed(1),M=p(g.y).toFixed(1);w>0&&w<o.length&&(s+=`  <line x1="${k}" y1="${d.toFixed(1)}" x2="${k}" y2="${M}" stroke="#6366f1" stroke-dasharray="4,4" stroke-width="1.3" opacity="0.6"/>
`),s+=`  <circle cx="${k}" cy="${M}" r="5" fill="#ffffff" stroke="#6366f1" stroke-width="2.2"/>
`,s+=`  <text x="${k}" y="${(p(g.y)-8).toFixed(1)}" font-family="sans-serif" font-size="11" font-weight="600" text-anchor="middle" fill="#4338ca">(${g.x.toFixed(1)}; ${g.y.toFixed(1)})</text>
`}):b&&b.parts.length>0?b.parts.forEach((g,w)=>{const k=h(g.x1).toFixed(1),M=p(g.fn(g.x1)).toFixed(1);w<b.parts.length-1&&(s+=`  <line x1="${k}" y1="${d.toFixed(1)}" x2="${k}" y2="${M}" stroke="#6366f1" stroke-dasharray="4,4" stroke-width="1.3" opacity="0.6"/>
`,s+=`  <circle cx="${k}" cy="${M}" r="4.5" fill="#ffffff" stroke="#6366f1" stroke-width="2"/>
`);const P=(g.x0+g.x1)/2;s+=`  <text x="${h(P).toFixed(1)}" y="${(d-8).toFixed(1)}" font-family="sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#4f46e5">I${w+1}</text>
`}):C==="drag"&&rt.forEach((g,w)=>{const k=h(g.x).toFixed(1),M=p(g.y).toFixed(1);s+=`  <circle cx="${k}" cy="${M}" r="5.5" fill="#ef4444" stroke="#ffffff" stroke-width="2"/>
`,s+=`  <text x="${k}" y="${(p(g.y)-8).toFixed(1)}" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#ef4444">P${w+1}(${g.x.toFixed(1)}; ${g.y.toFixed(1)})</text>
`}),s+=`  <text x="50" y="32" font-family="sans-serif" font-size="13" font-weight="bold" fill="#4338ca">Biên dạng f(x) — Khối 3D</text>
`,s+="</svg>";const T=new Blob([s],{type:"image/svg+xml;charset=utf-8"}),N=URL.createObjectURL(T),z=document.createElement("a");z.download=`bien-dang-2d-${C}.svg`,z.href=N,z.click(),setTimeout(()=>URL.revokeObjectURL(N),5e3),qt("✅ Đã xuất ảnh vector SVG!")}function ln(){let l="";if(C==="poly"&&Q?l=Q.canvas.toDataURL("image/png"):V&&(l=V.toDataURL("image/png")),!l)return;const t=document.createElement("a");t.download=`bien-dang-2d-${C}.png`,t.href=l,t.click(),qt("✅ Đã lưu ảnh PNG 2D!")}function cn(){if(!D?.canvas)return;const l=document.createElement("a");l.download=`khoi-3d-${A}.png`,l.href=D.canvas.toDataURL("image/png"),l.click(),qt("✅ Đã lưu ảnh chụp 3D!")}function rn(l){if(!D?.canvas){ve.fire({title:"Chưa có khối 3D",text:"Khối 3D chưa được dựng.",icon:"warning",confirmButtonColor:"#7c3aed"});return}const t=D.canvas;if(!(t&&typeof t.captureStream=="function")){ve.fire({title:"Trình duyệt không hỗ trợ",text:"Trình duyệt không hỗ trợ MediaRecorder captureStream.",icon:"error",confirmButtonColor:"#7c3aed"});return}let e="video/webm;codecs=vp9";const i=window.MediaRecorder;if(typeof i<"u"&&!i.isTypeSupported(e)&&(e="video/webm"),typeof i>"u"||!i.isTypeSupported(e)){ve.fire({title:"Định dạng không hỗ trợ",text:"Trình duyệt không hỗ trợ MediaRecorder video/webm.",icon:"error",confirmButtonColor:"#7c3aed"});return}const o=t.captureStream(30),h=new i(o,{mimeType:e}),p=[];h.ondataavailable=f=>{f.data&&f.data.size>0&&p.push(f.data)},h.onstop=()=>{const f=new Blob(p,{type:e}),c=URL.createObjectURL(f),u=document.createElement("a");u.download=`khoi-3d-quay-360-${A}.webm`,u.href=c,u.click(),setTimeout(()=>URL.revokeObjectURL(c),5e3),qt("✅ Đã xuất video 360° (WebM)!")},l.disabled=!0;const x=l.innerHTML;l.innerHTML="⏺ Đang quay 360°...",h.start();let d=5;ft(d);const s=setInterval(()=>{d+=5,d>=360?(d=360,ft(360),clearInterval(s),setTimeout(()=>{try{h.stop()}catch{}l.disabled=!1,l.innerHTML=x},350)):ft(d)},25)}const xn={id:"shape3d",name:"Khối 3D TikZ & Typst",glyph:"◈",color:"#6366f1",desc:"Tạo khối 3D & tròn xoay từ biên dạng f(x), tự sinh mã TikZ và Typst CeTZ với nét đứt/liền tự động, tính thể tích & từng bước giải toán",mount(l){const t=r("div","shape3dview"),a=r("div","s3d-col s3d-left"),e=r("section","panel s3d-panel"),i=r("div","s3d-panel-head"),o=r("h3","","Biên dạng 2D"),h=r("div","s3d-head-tools"),p=it("🖼️ Lưu SVG","ghost sm",()=>on());p.title="Xuất file ảnh vector SVG";const x=it("📷 Lưu PNG","ghost sm",()=>ln());x.title="Tải ảnh PNG biên dạng 2D",h.append(p,x),i.append(o,h),e.appendChild(i);const d=Pe([{id:"poly",label:"✏️ Kéo đa đoạn"},{id:"piecewise",label:"🧩 Hàm từng đoạn"},{id:"drag",label:"📍 Kéo bậc 3"},{id:"single",label:"⚡ Hàm đơn f(x)"}],C,$=>{if(C=$,be=!0,C==="poly"&&Q&&b){if(b.parts.every(F=>F.m!==void 0&&F.c!==void 0)){const F=[{x:b.parts[0].x0,y:b.parts[0].fn(b.parts[0].x0)}];b.parts.forEach(H=>F.push({x:H.x1,y:H.fn(H.x1)})),Q.setPoints(F,!1)}}else C==="piecewise"&&Ht&&Xt();w(),j()});e.appendChild(d),re=r("div","chipbar");for(const $ of Ze){const F=r("button","chip",Ee($.name));F.title=$.desc,F.addEventListener("click",()=>{Je($)}),re.appendChild(F)}e.appendChild(re),ce=r("div","pw-builder");const s=r("div","pw-header"),f=r("div","pw-title");f.innerHTML="<span>🧩 Các nhánh biểu thức f(x)</span>";const c=r("button","pw-btn-add");c.innerHTML="<span>➕ Thêm đoạn</span>",c.addEventListener("click",()=>Qe()),s.append(f,c),Ht=r("div","pw-rows"),Xt();const u=r("div","pw-quick"),m=r("span","pw-quick-label","Nhập/dán nhanh:");ct=r("input","pw-quick-input"),ct.placeholder="vd: 0 <= x <= 2: 0.5x + 1; 2 < x <= 4: 2",ct.value=lt,ct.addEventListener("input",()=>{const $=Ye(ct.value);$&&$.length>0&&(Y=$,Xt(),j())}),u.append(m,ct),ce.append(s,Ht,u),e.appendChild(ce),de=r("div","chipbar");const T=[{name:"Lọ hoa: sin(x)+2",fn:"sin(x)+2",xm:4},{name:"Nón: 0.5x+1",fn:"0.5*x+1",xm:4},{name:"Parabol: √(4x)",fn:"sqrt(4*x)",xm:4},{name:"Đồng hồ cát",fn:"0.25*(x-2)^2+1",xm:4},{name:"Bán cầu: √(16-x²)",fn:"sqrt(16-x^2)",xm:4},{name:"Ly rượu",fn:"0.1*x^3-0.5*x^2+x+1",xm:4}];for(const $ of T){const F=r("button","chip",Ee($.name));F.addEventListener("click",()=>{kt.value=$.fn,ht.value=String($.xm),j()}),de.appendChild(F)}e.appendChild(de),pe=r("div","frow");const N=r("label","lab","Hàm số f(x):");kt=r("input","fld"),kt.value="sin(x) + 2",kt.placeholder="vd: sin(x) + 2 hoặc 0.5*x + 1",kt.addEventListener("input",()=>j()),N.appendChild(kt);const z=r("label","lab","Chiều dài h (xMax):");ht=r("input","fld"),ht.type="number",ht.step="0.5",ht.min="1",ht.max="10",ht.value=String(S),ht.addEventListener("input",()=>j()),z.appendChild(ht),pe.append(N,z),e.appendChild(pe),Ot=r("div","s3d-eq-box"),e.appendChild(Ot);const g=r("div","s3d-canvas-wrap");De=g,V=r("canvas","s3d-canvas"),V.width=Tt,V.height=Lt,V.style.aspectRatio=`${Tt} / ${Lt}`,n=V.getContext("2d"),new ResizeObserver(()=>{const $=Math.min(window.devicePixelRatio||1,3),F=V.clientWidth;if(!F)return;const H=Math.round(F*$);V.width!==H&&(V.width=H,V.height=Math.round(H*Lt/Tt),Fe())}).observe(V),g.appendChild(V),e.appendChild(g),Q=new je({points:Ve[0].pts,lockX0:!0,height:300,onChange:($,F)=>{if(C==="poly"){if(F==="end"){cancelAnimationFrame(ee),ee=0,j();return}ee||(ee=requestAnimationFrame(()=>{ee=0,j("drag")}))}}}),e.appendChild(Q.root);const w=()=>{re.style.display=C==="piecewise"?"":"none",ce.style.display=C==="piecewise"?"":"none",de.style.display=C==="single"?"":"none",pe.style.display=C==="single"?"":"none",De.style.display=C==="poly"?"none":"",Q.root.style.display=C==="poly"?"":"none"};setTimeout(w,0);const k=fe("Thiết lập Thiết diện & Trục","s3d-panel"),M=r("div","frow"),P=r("label","lab","Hình dạng thiết diện S(x):"),R=r("select","fld");R.innerHTML=`
      <option value="circle">Hình tròn (Tròn xoay) [K = π]</option>
      <option value="square">Hình vuông [K = 2]</option>
      <option value="triangle">Tam giác đều [K = 3√3/4]</option>
      <option value="hexagon">Lục giác đều [K = 3√3/2]</option>
      <option value="pentagon">Ngũ giác đều [K ≈ 1.72]</option>
    `,R.value=A,R.addEventListener("change",()=>{A=R.value,j()}),P.appendChild(R);const J=r("label","lab","Hướng trục:"),Z=r("select","fld");Z.innerHTML=`
      <option value="horizontal">Trục hoành Ox (Nằm ngang)</option>
      <option value="vertical">Trục tung Oy (Thẳng đứng)</option>
    `,Z.value=me,Z.addEventListener("change",()=>{me=Z.value,j()}),J.appendChild(Z);const ut=r("label","lab","Số lát cắt hiển thị:");St=r("input","fld"),St.type="number",St.min="3",St.max="12",St.value=String(st),St.addEventListener("input",()=>j()),ut.appendChild(St),M.append(P,J,ut),k.appendChild(M);const Nt=fe("Từng bước tính thể tích V = ∫ S(x) dx","s3d-panel");zt=r("div","s3d-solution-grid"),Nt.appendChild(zt);const gt=it("📋 Sao chép Lời giải toán","sm ghost",()=>{const $=zt.innerText;navigator.clipboard?.writeText($).then(()=>{qt("✅ Đã sao chép lời giải!")})});Nt.appendChild(gt);let Ft="classic";const tt=We(()=>D,Te),At=Pe([{id:"classic",label:"◈ Khối f(x) + mã Typst/TikZ"},{id:"rev",label:"🌀 Quay miền 1–3 đường"},{id:"slab",label:"🔷 Thiết diện lát cắt"}],Ft,$=>{Ft=$,It()});a.append(At,tt.root,e,k,Nt),tt.root.style.display="none";const It=()=>{const $=Ft==="classic";tt.root.style.display=$?"none":"";for(const F of[e,k,Nt])F.style.display=$?"":"none";Jt.style.display=$?"":"none",$?j():tt.activate(Ft)},Rt=r("div","s3d-col s3d-right"),Pt=r("section","panel s3d-panel"),Bt=r("div","s3d-panel-head"),Wt=r("h3","","Mô phỏng 3D"),Ut=r("div","s3d-head-tools"),O=it("🎥 Xuất video 360° (WebM)","ghost sm",()=>rn(O));O.title="Quay video động WebM quét tròn xoay 360° tạo khối để chèn slide hoặc báo cáo";const _t=it("📷 Lưu ảnh 3D","ghost sm",()=>cn());_t.title="Tải ảnh chụp snapshot mô hình 3D hiện tại (PNG)",Ut.append(O,_t),Bt.append(Wt,Ut),Pt.appendChild(Bt);const Zt=r("div","s3d-canvas-wrap s3d-gl");Pt.appendChild(Zt);try{D=new Oe(Zt)}catch{Zt.appendChild(r("div","err","Trình duyệt không hỗ trợ WebGL — không dựng được khối 3D."))}const yt=($,F)=>{const H=r("label","s3d-ctl",$+" ");return H.appendChild(F),H},Et=r("div","s3d-orbit-box"),bt=r("div","toolbar s3d-sweep-toolbar");let jt=360,v=!1,L=0;const y=r("input");y.type="range",y.min="5",y.max="360",y.step="5",y.value="360",y.title="Kéo tay góc quay tròn xoay α (5° - 360°) để quan sát khối tạo thành từ mặt phẳng";const G=r("span","badge-tag","360°");ft=$=>{jt=$,y.value=String(Math.round($)),G.textContent=`${Math.round($)}°`,D?.setSweep($)};const K=()=>{v=!1,cancelAnimationFrame(L),U.textContent="▶ Tự tạo khối (Auto)",U.className="btn sm primary"},nt=()=>{jt>=355&&ft(5),v=!0,U.textContent="⏸ Dừng auto",U.className="btn sm warn";let $=performance.now();const F=H=>{if(!v)return;const te=(H-$)/1e3;$=H;let xt=jt+te*85;if(xt>=360){xt=360,ft(360),K();return}ft(xt),L=requestAnimationFrame(F)};L=requestAnimationFrame(F)},U=it("▶ Tự tạo khối (Auto)","sm primary",()=>{v?K():nt()});y.addEventListener("input",()=>{v&&K(),ft(Number(y.value))});const X=it("📐 0°","sm ghost",()=>{v&&K(),ft(5)});X.title="Xem hình phẳng ban đầu (5°)";const at=it("Bán khối 180°","sm ghost",()=>{v&&K(),ft(180)}),ot=it("↺ 360° Đầy đủ","sm ghost",()=>{v&&K(),ft(360)}),$t=r("label","s3d-ctl s3d-sweep-lab","Quay tròn xoay α: ");$t.append(y,G),bt.append(U,$t,X,at,ot);const Mt=r("div","toolbar s3d-view-toolbar"),B=it("📷 Góc chuẩn","sm ghost",()=>D?.resetCamera()),mt=r("input");mt.type="checkbox",mt.title="Tự xoay 360° liên tục trong không gian",mt.addEventListener("change",()=>{D?.setAutoRotate(mt.checked,2)});const E=yt("🔄 Tự xoay 3D",mt),Yt=it("▶ Quét lát","sm ghost",()=>D?.play()),dt=r("input");dt.type="range",dt.min="0",dt.max="100",dt.value=String(ie),dt.title="Vị trí lát cắt",dt.addEventListener("input",()=>{ie=Number(dt.value),D?.setProfileT(ie/100)});const pt=r("input");pt.type="range",pt.min="20",pt.max="100",pt.value="100",pt.title="Độ trong suốt",pt.addEventListener("input",()=>D?.setOpacity(Number(pt.value)/100));const se=r("input");se.type="checkbox",se.addEventListener("change",()=>D?.setWire(se.checked));const ae=r("input");ae.type="checkbox",ae.addEventListener("change",()=>D?.setCut(ae.checked));const Qt=r("input");Qt.type="checkbox",Qt.checked=!0,Qt.addEventListener("change",()=>D?.setShowAxes3D(Qt.checked)),D&&D.setOpacity(1),D&&D.setShowAxes3D(!0),D&&(D.onSweep=$=>{Ft==="classic"?(ie=$,dt.value=String(Math.round($))):tt.onSweep($)}),Ct=r("div","s3d-vol-head"),Mt.append(B,E,Yt,yt("Lát cắt",dt),yt("Trong suốt",pt),yt("3 trục",Qt),yt("Lưới",se),yt("Cắt nửa",ae),Ct),Et.append(bt,Mt),Pt.appendChild(Et);const Jt=fe("Sinh mã nguồn đồ hoạ (Typst CeTZ & TikZ LaTeX)","s3d-panel"),Me=r("div","tabs"),oe=r("button","tab on","Typst (CeTZ / hung-math)"),le=r("button","tab","TikZ (LaTeX)");oe.addEventListener("click",()=>{ne="typst",oe.classList.add("on"),le.classList.remove("on"),xe.textContent="📋 Sao chép Typst",we()}),le.addEventListener("click",()=>{ne="tikz",le.classList.add("on"),oe.classList.remove("on"),xe.textContent="📋 Sao chép TikZ",we()}),Me.append(oe,le),Jt.appendChild(Me),vt=r("textarea","fld s3d-code"),vt.rows=15,vt.spellcheck=!1,vt.addEventListener("click",()=>vt.select()),Jt.appendChild(vt);const Se=r("div","toolbar");xe=it("📋 Sao chép Typst","primary",()=>{navigator.clipboard?.writeText(vt.value).then(()=>{qt(ne==="typst"?"✅ Đã sao chép mã Typst CeTZ!":"✅ Đã sao chép mã TikZ LaTeX!")})});const Ie=it("💾 Tải file","ghost",()=>{const $=ne==="typst"?"typ":"tex",F=new Blob([vt.value],{type:"text/plain;charset=utf-8"}),H=document.createElement("a");H.href=URL.createObjectURL(F),H.download=`solid_3d_${A}.${$}`,H.click(),URL.revokeObjectURL(H.href),qt(`✅ Đã tải file .${$}`)});Se.append(xe,Ie),Jt.appendChild(Se),Rt.append(Pt,Jt),Gt=r("div","s3d-toast"),t.append(a,Rt,Gt),l.appendChild(t),Ke(a,Rt,"col","shape3dSplit",.5),V.addEventListener("mousedown",$=>{const F=V.getBoundingClientRect(),H=($.clientX-F.left)*(Tt/F.width),te=($.clientY-F.top)*(Lt/F.height);if(C==="drag"){let xt=-1,wt=400;rt.forEach((Ce,Re)=>{const Le=q(Ce.x,Ce.y),Ne=(Le.px-H)**2+(Le.py-te)**2;Ne<wt&&(wt=Ne,xt=Re)}),xt!==-1&&wt<260&&(he=!0,Dt=xt)}});let Vt=0;window.addEventListener("mousemove",$=>{if(!he)return;const F=V.getBoundingClientRect(),H=($.clientX-F.left)*(Tt/F.width),te=($.clientY-F.top)*(Lt/F.height);let{x:xt,y:wt}=nn(H,te);xt=Math.max(0,Math.min(S,xt)),wt=Math.max(0,wt),Dt===0?rt[0].y=wt:Dt===3?rt[3].y=wt:(rt[Dt].x=xt,rt[Dt].y=wt),Vt||(Vt=requestAnimationFrame(()=>{Vt=0,j("drag")}))}),window.addEventListener("mouseup",()=>{he&&(he=!1,Dt=-1,Vt&&(cancelAnimationFrame(Vt),Vt=0),j("full"))}),j()},show(){j()}};export{I as Frac,Ze as PIECEWISE_PRESETS,ue as Polynomial,ke as branchesToPiecewise,Te as parseFormulaFunc,Ye as parsePiecewiseFormula,He as pointsToPiecewise,xn as shape3dApp};
