import{e as l,p as qt,a as bt,b as Pt,R as de,c as zn,S as pe,P as me,W as ue,d as ge,O as ve,ai as $e,D as On,a6 as fe,G as Qn,ae as Kn,z as vt,x as an,M as Q,ag as Ae,n as ae,L as xe,a8 as Re,q as be,l as ye,V as sn,o as Be,a1 as et,ab as Mn,aq as Dt,k as se,a9 as ie,aa as wn,w as en,ah as He,A as ce,I as De,i as qn}from"./OrbitControls-CC1Q_oXb.js";const oe=[{id:"cone_inv",name:"Bình nón úp ngược",icon:"🔻",desc:"Đỉnh nhọn ở đáy, miệng nón ở trên (bài toán kinh điển nhất trong SGK)",H:4,R:2,radiusAt:(i,c,e)=>e/c*Math.max(0,i),areaAt:(i,c,e)=>Math.PI*Math.pow(e/c*Math.max(0,i),2),volAt:(i,c,e)=>1/3*Math.PI*Math.pow(e/c,2)*Math.pow(Math.max(0,i),3),totalVol:(i,c)=>1/3*Math.PI*c*c*i,lathePoints:(i,c,e=32)=>{const s=[];for(let a=0;a<=e;a++){const d=i*a/e;s.push(new et(c/i*d,d))}return s}},{id:"cone_up",name:"Bình nón đứng",icon:"🔺",desc:"Đáy to ở dưới, chóp nhọn ở trên — nước dâng càng lên cao càng nhanh phi mã",H:4,R:2,radiusAt:(i,c,e)=>e*Math.max(0,1-i/c),areaAt:(i,c,e)=>Math.PI*Math.pow(e*Math.max(0,1-i/c),2),volAt:(i,c,e)=>{const s=Math.max(0,Math.min(c,i));return 1/3*Math.PI*e*e*c*(1-Math.pow(1-s/c,3))},totalVol:(i,c)=>1/3*Math.PI*c*c*i,lathePoints:(i,c,e=32)=>{const s=[];for(let a=0;a<=e;a++){const d=i*a/e;s.push(new et(c*(1-d/i),d))}return s}},{id:"sphere",name:"Bình bán cầu",icon:"🥣",desc:"Bát hoặc chậu dạng bán cầu (chỏm cầu r = √(2Rh - h²))",H:3,R:3,radiusAt:(i,c,e)=>{const s=2*e*i-i*i;return s>0?Math.sqrt(s):0},areaAt:(i,c,e)=>Math.PI*Math.max(0,2*e*i-i*i),volAt:(i,c,e)=>{const s=Math.max(0,Math.min(c,i));return Math.PI*s*s*(e-s/3)},totalVol:(i,c)=>2/3*Math.PI*Math.pow(c,3),lathePoints:(i,c,e=40)=>{const s=[];for(let a=0;a<=e;a++){const d=i*a/e,p=2*c*d-d*d;s.push(new et(p>0?Math.sqrt(p):0,d))}return s}},{id:"cyl",name:"Bình hình trụ",icon:"🥫",desc:"Thiết diện không đổi S = πR² — tốc độ dâng đều không đổi theo thời gian",H:4,R:1.8,radiusAt:(i,c,e)=>e,areaAt:(i,c,e)=>Math.PI*e*e,volAt:(i,c,e)=>Math.PI*e*e*Math.max(0,i),totalVol:(i,c)=>Math.PI*c*c*i,lathePoints:(i,c)=>[new et(0,0),new et(c,0),new et(c,i)]},{id:"frustum",name:"Chóp cụt tứ giác đều",icon:"🏛️",desc:"Bể nước dạng chóp cụt đáy vuông (S(z) = a(z)²)",H:4,R:2.2,radiusAt:(i,c,e)=>{const s=e*.4;return s+(e-s)*(i/c)},areaAt:(i,c,e)=>{const s=2*(e*.4+(e-e*.4)*(i/c));return s*s},volAt:(i,c,e)=>{const s=2*e*.4,a=2*e,d=s+(a-s)*(i/c);return i/3*(s*s+s*d+d*d)},totalVol:(i,c)=>{const e=2*c*.4,s=2*c;return i/3*(e*e+e*s+s*s)},lathePoints:(i,c)=>{const e=c*.4;return[new et(0,0),new et(e,0),new et(c,i)]}},{id:"vase",name:"Bình hoa xoay cong f(x)",icon:"🏺",desc:"Thành bình uốn lượn hình sin mềm mại — nước dâng uốn lượn nhanh chậm",H:4.5,R:1.8,radiusAt:(i,c,e)=>e*(.7+.35*Math.sin(Math.PI*i/(c*.5))),areaAt:(i,c,e)=>{const s=e*(.7+.35*Math.sin(Math.PI*i/(c*.5)));return Math.PI*s*s},volAt:(i,c,e)=>{const a=i/60;let d=0;for(let p=0;p<=60;p++){const y=p*a,$=e*(.7+.35*Math.sin(Math.PI*y/(c*.5))),L=Math.PI*$*$,D=p===0||p===60?1:p%2===1?4:2;d+=D*L}return a/3*d},totalVol:(i,c)=>{const s=i/100;let a=0;for(let d=0;d<=100;d++){const p=d*s,y=c*(.7+.35*Math.sin(Math.PI*p/(i*.5))),$=Math.PI*y*y,L=d===0||d===100?1:d%2===1?4:2;a+=L*$}return s/3*a},lathePoints:(i,c,e=50)=>{const s=[];for(let a=0;a<=e;a++){const d=i*a/e,p=c*(.7+.35*Math.sin(Math.PI*d/(i*.5)));s.push(new et(p,d))}return s}}];function qe(){const i=l("div","realmath-module water-module");let c="cone_inv",e=oe[0],s=e.H,a=e.R,d=1.5,p=1.8,y=0,$=!1,L=0,D=0;const F=l("div","stcol"),E=l("div","rm-vis"),z=qt("1. Chọn hình dạng bình chứa","rm-panel"),X=l("div","vessel-grid"),G=[];oe.forEach(S=>{const u=l("button","vessel-btn"+(S.id===c?" on":""));u.innerHTML=`<span class="v-ico">${S.icon}</span><span class="v-name">${bt(S.name)}</span>`,u.title=S.desc,u.addEventListener("click",()=>{c=S.id,e=S,s=S.H,a=S.R,p=s*.45,G.forEach(P=>P.classList.toggle("on",P===u)),dt(),Ot(),Mt()}),G.push(u),X.appendChild(u)}),z.appendChild(X);const O=qt("2. Kích thước & Lưu lượng bơm Q","rm-panel"),M=l("input","fld");M.type="number",M.step="0.5",M.min="1",M.max="10",M.value=String(s);const w=l("input","fld");w.type="number",w.step="0.5",w.min="0.5",w.max="6",w.value=String(a);const _=l("input","fld");_.type="number",_.step="0.2",_.min="0.1",_.max="10",_.value=String(d);const j=(S,u,P="")=>{const R=l("div","frow");return R.append(l("label","lab",`<span>${S}</span>`),u,l("span","unit",P)),R},dt=()=>{M.value=String(s),w.value=String(a),_.value=String(d)};M.addEventListener("input",()=>{s=Math.max(1,Number(M.value)||4),p=Math.min(p,s),Ot(),Mt()}),w.addEventListener("input",()=>{a=Math.max(.5,Number(w.value)||2),Ot(),Mt()}),_.addEventListener("input",()=>{d=Math.max(.1,Number(_.value)||1),Mt()}),O.append(j("Chiều cao bình H",M,"dm"),j("Bán kính chuẩn R",w,"dm"),j("Lưu lượng bơm Q = dV/dt",_,"L/s"));const rt=qt("3. Quá trình dâng nước (Động)","rm-panel"),Y=Pt("▶ Bơm nước","btn primary pump-btn",()=>Sn()),ht=Pt("↺ Đặt lại","btn ghost",()=>Zt()),b=Object.assign(l("input"),{type:"range",min:"0.01",max:String(s),step:"0.02",value:String(p),className:"slider"}),C=l("span","val-badge",`${p.toFixed(2)} dm`);b.addEventListener("input",()=>{p=Number(b.value),C.textContent=`${p.toFixed(2)} dm`,Mt(),wt()});const K=l("div","sim-ctl-bar");K.append(Y,ht);const Z=l("div","slider-row");Z.append(l("span","s-lab","Mực nước h:"),C,b),rt.append(K,Z);const V=qt("4. Phân tích Tốc độ & Lời giải THPT","rm-panel"),st=l("div","solution-box");V.appendChild(st),F.append(z,O,rt,V);const Ft=l("div","toolbar");Ft.append(l("span","rm-title","💧 Mô hình Bơm nước 3D & Tốc độ tức thời"),Pt("🔍 Vừa khung","ghost sm",()=>Yt()),de(i,()=>tt()));const J=l("div","rm-vis-boxes"),xt=l("div","rm-box box-3d"),Lt=l("canvas");Lt.className="solid-canvas";const Ut=l("div","ghint","xoay chuột để quay 3D · cuộn để phóng to/thu nhỏ · kéo thanh mực nước bên trái");xt.append(Lt,Ut);const N=l("div","rm-box box-2d"),k=l("canvas");k.className="graph-canvas";const _t=l("div","graph-header",`
    <span class="gh-tit">📈 Đồ thị Mực nước h(t) & Tốc độ dh/dt</span>
    <span class="gh-tag">Tích phân & Đạo hàm liên hệ</span>
  `);N.append(_t,k),J.append(xt,N),E.append(Ft,J),i.append(F,E),zn(F,E,"col","waterSplitX",.26,()=>tt()),zn(xt,N,"col","waterSplitVis",.56,()=>tt());const yt=new pe,pt=new me(40,1,.05,100);pt.position.set(5.5,4,7.5);const It=new ue({canvas:Lt,antialias:!0,alpha:!0});ge(It);const zt=new ve(pt,Lt);zt.enableDamping=!0,zt.dampingFactor=.08;const ln=new $e(16777215,.7),dn=new On(16777215,1.2);dn.position.set(6,10,6);const Tn=new On(9684477,.6);Tn.position.set(-6,-4,-6),yt.add(ln,dn,Tn);const pn=new fe(10,20,9741240,14870768);pn.position.y=0,yt.add(pn);const it=new Qn;yt.add(it);let jt=null,Cn=null,Vt=null,Et=null,mt=null;function Yt(){zt.target.set(0,s*.45,0),pt.position.set(a*2.8,s*.9+1.5,a*3.4),zt.update()}function Ot(){for(;it.children.length>0;){const lt=it.children[0];it.remove(lt),lt.geometry?.dispose()}b.max=String(s);const S=e.lathePoints(s,a,40),u=new Kn(S,48),P=new vt({color:9741240,transparent:!0,opacity:.28,roughness:.1,metalness:.05,transmission:.85,ior:1.45,side:an,depthWrite:!1});jt=new Q(u,P),it.add(jt);const R=new Ae(u),q=new ae({color:6583435,transparent:!0,opacity:.25});Cn=new xe(R,q),it.add(Cn);const I=e.radiusAt(s,s,a);if(I>.01){const lt=new Re(I*.98,I*1.02,48);lt.rotateX(-Math.PI/2),lt.translate(0,s,0);const $t=new be({color:3718648,side:an});it.add(new Q(lt,$t))}const B=new ye().setFromPoints([new sn(0,s+1.2,0),new sn(0,p,0)]),A=new ae({color:3718648,linewidth:2,transparent:!0,opacity:.8});mt=new Be(B,A),mt.visible=$,it.add(mt),wt(),Yt()}function wt(){if(Vt&&(it.remove(Vt),Vt.geometry.dispose(),Vt=null),Et&&(it.remove(Et),Et.geometry.dispose(),Et=null),p<=.02)return;const S=Math.max(8,Math.round(p/s*36)),u=[new et(0,0)];for(let I=0;I<=S;I++){const B=p*I/S;u.push(new et(e.radiusAt(B,s,a),B))}u.push(new et(0,p));const P=new Kn(u,48),R=new vt({color:440020,transparent:!0,opacity:.78,roughness:.12,metalness:.08,clearcoat:.8,clearcoatRoughness:.15,side:an});Vt=new Q(P,R),it.add(Vt);const q=e.radiusAt(p,s,a);if(q>.02){const I=new Mn(q,48);I.rotateX(-Math.PI/2),I.translate(0,p,0);const B=new vt({color:3718648,transparent:!0,opacity:.88,roughness:.05,clearcoat:1,side:an});Et=new Q(I,B),it.add(Et)}if(mt){const I=mt.geometry.attributes.position;I.setXYZ(1,0,p,0),I.needsUpdate=!0,mt.visible=$&&p<s}}function Mt(){const S=e.volAt(p,s,a),u=e.totalVol(s,a),P=e.areaAt(p,s,a),R=P>1e-6?d/P:0,q=d>0?u/d:0;y=d>0?S/d:0;let I="",B="";c==="cone_inv"?(I="V(h) = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi \\left(\\frac{R}{H}h\\right)^2 h = \\frac{\\pi R^2}{3H^2} h^3",B="\\frac{dV}{dt} = \\frac{\\pi R^2}{H^2} h^2 \\cdot \\frac{dh}{dt} = S(h) \\cdot \\frac{dh}{dt} = Q \\implies \\frac{dh}{dt} = \\frac{Q}{\\pi \\left(\\frac{R}{H}\\right)^2 h^2}"):c==="cone_up"?(I="r(h) = R\\left(1 - \\frac{h}{H}\\right) \\implies S(h) = \\pi R^2\\left(1 - \\frac{h}{H}\\right)^2",B="\\frac{dh}{dt} = \\frac{Q}{S(h)} = \\frac{Q}{\\pi R^2 \\left(1 - \\frac{h}{H}\\right)^2}"):c==="sphere"?(I="V(h) = \\pi h^2\\left(R - \\frac{h}{3}\\right) \\implies S(h) = \\pi(2Rh - h^2)",B="\\frac{dh}{dt} = \\frac{Q}{S(h)} = \\frac{Q}{\\pi (2Rh - h^2)}"):c==="cyl"?(I="V(h) = \\pi R^2 h \\implies S(h) = \\pi R^2 = \\text{hằng số}",B="\\frac{dh}{dt} = \\frac{Q}{\\pi R^2} = \\text{không đổi (mực nước dâng đều)}"):(I="V(h) = \\int_0^h S(z)\\,dz \\implies \\frac{dV}{dt} = S(h) \\cdot \\frac{dh}{dt} = Q",B="\\frac{dh}{dt} = \\frac{Q}{S(h)}"),st.innerHTML=`
      <div class="s-card">
        <div class="s-title">📐 Công thức liên hệ Thể tích & Mặt cắt:</div>
        <div class="s-math">${Dt(I)}</div>
      </div>
      <div class="s-card">
        <div class="s-title">⚡ Tốc độ dâng tức thời (Đạo hàm hàm ẩn):</div>
        <div class="s-math">${Dt(B)}</div>
      </div>
      <div class="s-metrics">
        <div class="m-item">
          <span class="m-lbl">Độ cao mực nước $h$:</span>
          <span class="m-val highlight">${p.toFixed(2)} <small>dm</small></span>
        </div>
        <div class="m-item">
          <span class="m-lbl">Thiết diện mặt nước $S(h)$:</span>
          <span class="m-val">${P.toFixed(3)} <small>dm²</small></span>
        </div>
        <div class="m-item">
          <span class="m-lbl">Tốc độ nước dâng $\\frac{dh}{dt}$:</span>
          <span class="m-val speed">${R.toFixed(3)} <small>dm/s</small></span>
        </div>
        <div class="m-item">
          <span class="m-lbl">Thể tích nước đã bơm:</span>
          <span class="m-val">${S.toFixed(2)} / ${u.toFixed(2)} <small>Lít</small></span>
        </div>
        <div class="m-item">
          <span class="m-lbl">Thời gian bơm $t$:</span>
          <span class="m-val">${y.toFixed(1)}s / đầy bình ${q.toFixed(1)}s</span>
        </div>
      </div>
    `,mn(q)}function mn(S){const u=k.getContext("2d");if(!u)return;const P=k.width,R=k.height;u.clearRect(0,0,P,R);const q=48,I=20,B=30,A=40,lt=P-q-I,$t=R-B-A,Jt=Math.max(1,S),At=s;u.strokeStyle="#e2e8f0",u.lineWidth=1,u.beginPath();for(let at=0;at<=5;at++){const ut=B+$t*(5-at)/5;u.moveTo(q,ut),u.lineTo(P-I,ut),u.fillStyle="#94a3b8",u.font="11px system-ui",u.textAlign="right",u.fillText((At*at/5).toFixed(1),q-8,ut+4)}for(let at=0;at<=5;at++){const ut=q+lt*at/5;u.moveTo(ut,B),u.lineTo(ut,R-A),u.fillStyle="#94a3b8",u.font="11px system-ui",u.textAlign="center",u.fillText((Jt*at/5).toFixed(1)+"s",ut,R-A+16)}u.stroke(),u.fillStyle="#475569",u.font="700 11px system-ui",u.textAlign="left",u.fillText("Độ cao h(t) (dm)",q,B-12),u.textAlign="right",u.fillText("Thời gian t (giây)",P-I,R-A+30),u.strokeStyle="#ea580c",u.lineWidth=2.8,u.beginPath();const Rt=100;for(let at=0;at<=Rt;at++){const ut=s*at/Rt,kn=e.volAt(ut,s,a),Pn=d>0?kn/d:0,Ln=q+Pn/Jt*lt,_n=B+$t*(1-ut/At);at===0?u.moveTo(Ln,_n):u.lineTo(Ln,_n)}u.stroke();const Gt=q+y/Jt*lt,Tt=B+$t*(1-p/At);u.setLineDash([4,4]),u.strokeStyle="#f97316",u.lineWidth=1.2,u.beginPath(),u.moveTo(Gt,R-A),u.lineTo(Gt,Tt),u.lineTo(q,Tt),u.stroke(),u.setLineDash([]),u.fillStyle="#ea580c",u.beginPath(),u.arc(Gt,Tt,6,0,Math.PI*2),u.fill(),u.fillStyle="#fff",u.beginPath(),u.arc(Gt,Tt,3,0,Math.PI*2),u.fill()}function Sn(){$=!$,Y.textContent=$?"⏸ Dừng bơm":"▶ Bơm nước",Y.classList.toggle("pumping",$),mt&&(mt.visible=$&&p<s),$?(p>=s-.01&&(p=.05),D=performance.now(),un()):cancelAnimationFrame(L)}function Zt(){$=!1,Y.textContent="▶ Bơm nước",Y.classList.remove("pumping"),cancelAnimationFrame(L),p=.05,b.value=String(p),C.textContent=`${p.toFixed(2)} dm`,Mt(),wt()}function un(){if(!$)return;const S=performance.now(),u=Math.min((S-D)/1e3,.1);D=S;const P=e.areaAt(p,s,a);if(P>1e-5){const R=d/P*u;p+=R,p>=s&&(p=s,$=!1,Y.textContent="▶ Bơm lại",Y.classList.remove("pumping"),mt&&(mt.visible=!1)),b.value=String(p),C.textContent=`${p.toFixed(2)} dm`,Mt(),wt()}$&&(L=requestAnimationFrame(un))}function tt(){const S=xt.getBoundingClientRect();S.width>10&&S.height>10&&(It.setSize(S.width,S.height,!1),pt.aspect=S.width/S.height,pt.updateProjectionMatrix());const u=N.getBoundingClientRect(),P=window.devicePixelRatio||1;if(u.width>10&&u.height>10){k.width=u.width*P,k.height=(u.height-40)*P,k.style.width=`${u.width}px`,k.style.height=`${u.height-40}px`;const R=k.getContext("2d");R&&R.scale(P,P);const q=e.totalVol(s,a);mn(d>0?q/d:0)}}let gn=0;function vn(){zt.update(),It.render(yt,pt),gn=requestAnimationFrame(vn)}return Ot(),Mt(),vn(),window.addEventListener("resize",tt),new ResizeObserver(tt).observe(J),{root:i,resize:tt,show(){requestAnimationFrame(()=>{tt(),Yt()})},dispose(){cancelAnimationFrame(gn),cancelAnimationFrame(L),window.removeEventListener("resize",tt)}}}function Qt(i){return i?i.split(/(\$\$[\s\S]*?\$\$|\$[^$\n]+\$)/g).map(e=>{if(e.startsWith("$$")&&e.endsWith("$$")){const s=e.slice(2,-2).trim();try{return se.renderToString(ie(s),{throwOnError:!1,displayMode:!0,output:"html"})}catch{return bt(e)}}if(e.startsWith("$")&&e.endsWith("$")){const s=e.slice(1,-1).trim();try{return se.renderToString(ie(s),{throwOnError:!1,displayMode:!1,output:"html"})}catch{return bt(e)}}return bt(e).replace(/\n/g,"<br/>")}).join(""):""}function H(i,c=2){const e=Math.pow(10,c);return Math.round(i*e)/e}function o(i,c=2){return H(i,c).toString().replace(".",",")}function Fe(i){const{mode:c,H:e,R:s,r:a,n:d,h0:p,rho:y,material:$}=i;return c==="cone_max"?Ee(e,s,a):c==="cyl_rise"?Ge(e,s,a,d,p,$):Ne(a,y,$)}function Ee(i,c,e){const s=Math.hypot(c,i),a=c/s,d=1/a-1,p=i/d,y=e/a,$=y-e,L=Math.max(0,Math.min(2*e,i-$)),D=L>0?Math.PI*Math.pow(L,2)*(e-L/3):0;let F=.1,E=0;const z=600;for(let N=1;N<=z;N++){const k=p*N/z,yt=k/a-k,pt=i-yt;if(pt>0&&pt<=2*k){const It=Math.PI*Math.pow(pt,2)*(k-pt/3);It>E&&(E=It,F=k)}}const X=H(F,2),G=H(E,2),O=H(D,2),M=`Một chiếc bình thủy tinh hình nón tròn xoay có bán kính miệng bình $R = ${o(c)}\\text{ dm}$, chiều cao $H = ${o(i)}\\text{ dm}$ chứa đầy nước và được đặt đỉnh úp xuống mặt sàn. Người ta thả một quả cầu kim loại đồng chất có bán kính $r = ${o(e)}\\text{ dm}$ vào trong bình sao cho quả cầu tiếp xúc với thành nón. Do quả cầu chiếm chỗ nên một lượng nước bị tràn qua miệng bình ra ngoài. Tính thể tích nước tràn ra khỏi bình (làm tròn kết quả đến hàng phần trăm).`,w=O,_=H(4/3*Math.PI*Math.pow(e,3),2),j=H(Math.abs(Math.PI*Math.pow(L,2)*(e-L)),2),dt=c/i,rt=e/dt,Y=Math.max(0,i-(rt-e)),ht=H(Math.PI*Math.pow(Y,2)*(e-Y/3),2),b=[{val:w,isCorr:!0,trap:""},{val:_>0&&_!==w?_:H(w*1.35,2),isCorr:!1,trap:"Lỗi nhầm: Coi quả cầu chìm trọn vẹn trong bình (lấy cả thể tích quả cầu V = 4/3 pi r^3)."},{val:j>0&&j!==w?j:H(w*.72,2),isCorr:!1,trap:"Lỗi công thức: Nhầm công thức thể tích chỏm cầu thành V = pi h^2 (r - h)."},{val:ht>0&&ht!==w&&ht!==_?ht:H(w*.88,2),isCorr:!1,trap:"Lỗi góc nón: Tính nhầm sin alpha = R/H thay vì R/căn(R^2+H^2)."}],C=Math.floor(c*10+i*3+e*7)%4,K=[b[C%4],b[(C+1)%4],b[(C+2)%4],b[(C+3)%4]],Z=["A","B","C","D"],V=K.map((N,k)=>({id:Z[k],label:Z[k],math:`${o(N.val)}\\text{ dm}^3`,isCorrect:N.isCorr,trapExplanation:N.trap})),st=V.findIndex(N=>N.isCorrect),Ft=[{key:"a",statement:`Góc tạo bởi đường sinh của nón và trục nón có $\\sin\\alpha = \\frac{${o(c)}}{\\sqrt{${o(c)}^2 + ${o(i)}^2}} \\approx ${o(a,3)}$.`,isTrue:!0,explanation:`Đường sinh $l = \\sqrt{R^2+H^2} = ${o(s,2)}$. Do đó $\\sin\\alpha = \\frac{R}{l} \\approx ${o(a,3)}$.`},{key:"b",statement:`Khoảng cách từ tâm quả cầu đến đỉnh nón khi tiếp xúc là $d = ${o(y,2)}\\text{ dm}$.`,isTrue:!0,explanation:`Xét tam giác vuông tạo bởi đỉnh nón, tâm cầu và tiếp điểm: $d = \\frac{r}{\\sin\\alpha} = \\frac{${o(e)}}{${o(a,3)}} = ${o(y,2)}\\text{ dm}$.`},{key:"c",statement:"Quả cầu ngập hoàn toàn bên trong bình nón và không có phần nào lồi ra khỏi miệng nón.",isTrue:y+e<=i,explanation:`Điểm cao nhất của quả cầu là $z = d + r = ${o(y+e,2)}\\text{ dm}$. Chiều cao bình $H = ${o(i)}\\text{ dm}$. Do ${y+e>i?"z > H nên quả cầu bị lồi một phần":"z <= H nên quả cầu ngập trọn vẹn"}.`},{key:"d",statement:`Để thể tích nước tràn ra ngoài là lớn nhất, bán kính quả cầu cần chọn xấp xỉ $r^* \\approx ${o(X)}\\text{ dm}$, khi đó $V_{\\max} \\approx ${o(G)}\\text{ dm}^3$.`,isTrue:!0,explanation:`Khảo sát hàm số $V(r) = \\pi h^2 (r - h/3)$ với $h = H - (r/\\sin\\alpha - r)$, ta thu được giá trị cực đại đạt tại $r^* \\approx ${o(X)}\\text{ dm}$.`}],J=[{title:"Bước 1: Phân tích hình học mặt cắt qua trục",content:`
Cắt khối nón và quả cầu bằng mặt phẳng chứa trục hình nón. Thiết diện nhận được là tam giác cân có đỉnh tại gốc $O(0,0)$ và đường tròn tâm $I(0, z_I)$ bán kính $r$ tiếp xúc hai cạnh bên (đường sinh nón).
Gọi $\\alpha$ là góc giữa đường sinh và trục hình nón:
$$\\sin\\alpha = \\frac{R}{\\sqrt{R^2 + H^2}} = \\frac{${o(c)}}{\\sqrt{${o(c)}^2 + ${o(i)}^2}} = ${o(a,4)}$$
      `},{title:"Bước 2: Xác định toạ độ tâm cầu và chiều cao phần chìm",content:`
Khoảng cách từ đỉnh $O$ đến tâm cầu $I$:
$$z_I = \\frac{r}{\\sin\\alpha} = \\frac{${o(e)}}{${o(a,4)}} \\approx ${o(y,2)}\\text{ dm}$$
Điểm thấp nhất của quả cầu: $z_{\\min} = z_I - r = ${o($,2)}\\text{ dm}$.
Mực nước ban đầu đầy đến miệng nón $z = H = ${o(i)}\\text{ dm}$.
Do đó, chiều cao phần chỏm cầu chìm trong nước là:
$$h_{\\text{chìm}} = H - z_{\\min} = H - r\\left(\\frac{1}{\\sin\\alpha} - 1\\right) = ${o(L,2)}\\text{ dm}$$
      `},{title:"Bước 3: Tính thể tích nước tràn ra ngoài",content:`
Theo định luật Archimedes, thể tích nước tràn ra ngoài đúng bằng thể tích phần quả cầu chìm trong nước (chỏm cầu bán kính $r$, chiều cao $h_{\\text{chìm}}$):
$$V_{\\text{tràn}} = \\pi h_{\\text{chìm}}^2 \\left(r - \\frac{h_{\\text{chìm}}}{3}\\right) = \\pi (${o(L,2)})^2 \\left(${o(e)} - \\frac{${o(L,2)}}{3}\\right) \\approx ${o(w)}\\text{ dm}^3\\text{ (hoặc Lít)}$$
Chọn phương án **${V[st].label}**.
      `}],xt=V.map(N=>N.isCorrect?`True([$${N.math}$])`:`[$${N.math}$]`).join(", "),Lt=`// Đề thi thực tế Hung Math - Toán 12
#tn([${M}],
  (${xt}),
  id: "TN-THUCTE-NON01",
  tags: ("Toán-thực-tế", "Hình-nón", "Khối-cầu", "VD"),
  loigiai: [
    #step[
      Góc tạo bởi đường sinh và trục nón: $\\sin\\alpha = \\frac{R}{\\sqrt{R^2+H^2}} \\approx ${o(a,3)}$.
    ]
    #step[
      Khoảng cách từ đỉnh nón đến tâm quả cầu: $d = \\frac{r}{\\sin\\alpha} \\approx ${o(y,2)}\\text{ dm}$.
      Chiều cao chỏm cầu chìm: $h_{\\text{chìm}} = H - (d - r) \\approx ${o(L,2)}\\text{ dm}$.
    ]
    #step[
      Thể tích nước tràn qua miệng bình:
      $ V_{\\text{tràn}} = \\pi h_{\\text{chìm}}^2 \\left(r - \\frac{h_{\\text{chìm}}}{3}\\right) \\approx ${o(w)}\\text{ dm}^3 $.
      Vậy chọn đáp án *${V[st].label}*.
    ]
  ]
)`,Ut=`ĐỀ BÀI:
${M}
A. ${V[0].math}
B. ${V[1].math}
C. ${V[2].math}
D. ${V[3].math}

ĐÁP ÁN ĐÚNG: ${V[st].label}

LỜI GIẢI CHI TIẾT:
1. Đường sinh nón: l = √(R² + H²) ≈ ${o(s,2)} dm. Sin góc nửa đỉnh: sin α = R / l ≈ ${o(a,3)}.
2. Vị trí tâm cầu: z_I = r / sin α ≈ ${o(y,2)} dm.
   Chiều cao chỏm cầu chìm: h_chìm = H - (z_I - r) ≈ ${o(L,2)} dm.
3. Thể tích nước tràn ra ngoài:
   V_tràn = π * h_chìm² * (r - h_chìm/3) ≈ ${o(w)} dm³ (Lít).`;return{id:"cone_exam",title:"Bình nón chứa nước & Khối cầu cực trị thể tích",contextDesc:"Dạng bài toán hình học không gian kết hợp giải tích cực trị (Mức độ Vận dụng cao 9+ THPT).",problemStatement:M,format:"mcq",options:V,correctIndex:st,shortAnswer:o(w),shortUnit:"dm³",tfItems:Ft,solutionSteps:J,typstCode:Lt,plainText:Ut}}function Ge(i,c,e,s,a,d){const p=Math.PI*c*c,y=4/3*Math.PI*Math.pow(e,3),$=s*y,L=$/p,D=a+L,F=D>i,E=F?(D-i)*p:0,z=i-a,X=Math.ceil(z*p/y),G=d==="steel"?"thép":d==="glass"?"thủy tinh":"sắt",O=`Một chiếc cốc hình trụ có bán kính đáy $R = ${o(c)}\\text{ cm}$ và chiều cao $H = ${o(i)}\\text{ cm}$, bên trong đang chứa nước với chiều cao mực nước ban đầu là $h_0 = ${o(a)}\\text{ cm}$. Người ta thả $n = ${s}$ viên bi ${G} hình cầu đặc cùng bán kính $r = ${o(e)}\\text{ cm}$ vào trong cốc sao cho các viên bi chìm hoàn toàn xuống đáy cốc. Giả sử nước không bị thấm và cốc đặt cân bằng trên bàn nằm ngang. Tính chiều cao mực nước dâng thêm $\\Delta h$ trong cốc (làm tròn đến hàng phần trăm).`,M=H(L,2),w=H(y/p,2),_=H(M/4,2),j=H($/(Math.PI*2*c),2),dt=[{val:M,isCorr:!0,trap:""},{val:w!==M&&w>0?w:H(M*.5,2),isCorr:!1,trap:"Lỗi thiếu số lượng: Chỉ tính độ dâng của 1 viên bi, quên nhân n viên."},{val:_!==M&&_>0?_:H(M*1.5,2),isCorr:!1,trap:"Lỗi công thức: Nhầm thể tích quả cầu V = 1/3 pi r^3 (quên hệ số 4)."},{val:j!==M&&j>0?j:H(M*.75,2),isCorr:!1,trap:"Lỗi diện tích đáy: Quên bình phương bán kính đáy (dùng 2*pi*R thay vì pi*R^2)."}],rt=Math.floor(c*5+i+s*4)%4,Y=[dt[rt%4],dt[(rt+1)%4],dt[(rt+2)%4],dt[(rt+3)%4]],ht=["A","B","C","D"],b=Y.map((J,xt)=>({id:ht[xt],label:ht[xt],math:`${o(J.val)}\\text{ cm}`,isCorrect:J.isCorr,trapExplanation:J.trap})),C=b.findIndex(J=>J.isCorrect),K=[{key:"a",statement:`Tổng thể tích của $${s}$ viên bi sắt được thả vào cốc là $V = ${o($,2)}\\text{ cm}^3$.`,isTrue:!0,explanation:`Mỗi viên bi có thể tích $V_1 = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (${o(e)})^3 \\approx ${o(y,2)}\\text{ cm}^3$. Do đó $n = ${s}$ viên có tổng thể tích $V = ${s} \\times ${o(y,2)} = ${o($,2)}\\text{ cm}^3$.`},{key:"b",statement:`Mực nước trong cốc dâng thêm một đoạn $\\Delta h = ${o(M)}\\text{ cm}$.`,isTrue:!0,explanation:`$\\Delta h = \\frac{V_{\\text{tổng}}}{\\pi R^2} = \\frac{${o($,2)}}{\\pi (${o(c)})^2} \\approx ${o(M)}\\text{ cm}$.`},{key:"c",statement:`Sau khi thả $${s}$ viên bi vào, nước bị tràn ra ngoài cốc một lượng xấp xỉ $${o(E,2)}\\text{ cm}^3$.`,isTrue:F,explanation:`Mực nước sau khi thả là $h_{\\text{mới}} = h_0 + \\Delta h = ${o(D,2)}\\text{ cm}$. Chiều cao cốc $H = ${o(i)}\\text{ cm}$. Do đó ${F?`nước tràn ra ngoài ${(D-i).toFixed(2)} cm tương đương ${E.toFixed(2)} cm³`:"mực nước vẫn thấp hơn miệng cốc nên nước chưa tràn"}.`},{key:"d",statement:`Để nước dâng lên vừa chạm đúng miệng cốc, người ta cần thả tối thiểu $${X}$ viên bi như trên vào cốc.`,isTrue:!0,explanation:`Khoảng cách từ mặt nước ban đầu đến miệng cốc là $\\Delta h_{\\text{cần}} = H - h_0 = ${o(z)}\\text{ cm}$. Số viên bi tối thiểu $n \\ge \\frac{\\Delta h_{\\text{cần}} \\cdot \\pi R^2}{V_1} \\approx ${(z*p/y).toFixed(2)} \\implies n = ${X}$ viên.`}],Z=[{title:"Bước 1: Tính thể tích các viên bi chìm hoàn toàn",content:`
Thể tích của một viên bi hình cầu bán kính $r = ${o(e)}\\text{ cm}$:
$$V_1 = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (${o(e)})^3 \\approx ${o(y,2)}\\text{ cm}^3$$
Tổng thể tích của $n = ${s}$ viên bi sắt là:
$$V_{\\text{tổng}} = n \\cdot V_1 = ${s} \\cdot ${o(y,2)} \\approx ${o($,2)}\\text{ cm}^3$$
      `},{title:"Bước 2: Áp dụng nguyên lý Archimedes tính chiều cao nước dâng",content:`
Khi các viên bi chìm hoàn toàn trong lòng nước, chúng chiếm một khoảng không gian có thể tích bằng đúng thể tích của chúng. Do cốc hình trụ có diện tích đáy không đổi $S_{\\text{đáy}} = \\pi R^2 = \\pi (${o(c)})^2 = ${o(p,2)}\\text{ cm}^2$, lượng nước bị choán chỗ sẽ dâng cao thêm một đoạn $\\Delta h$:
$$\\Delta h = \\frac{V_{\\text{tổng}}}{S_{\\text{đáy}}} = \\frac{n \\cdot \\frac{4}{3}\\pi r^3}{\\pi R^2} = \\frac{4 n r^3}{3 R^2}$$
Thay số cụ thể:
$$\\Delta h = \\frac{4 \\cdot ${s} \\cdot (${o(e)})^3}{3 \\cdot (${o(c)})^2} = \\frac{${o(4*s*Math.pow(e,3),2)}}{${o(3*c*c,2)}} \\approx ${o(M)}\\text{ cm}$$
      `},{title:"Bước 3: Kiểm tra điều kiện tràn nước & Kết luận",content:`
Mực nước mới trong cốc: $h_{\\text{mới}} = h_0 + \\Delta h = ${o(a)} + ${o(M)} = ${o(D,2)}\\text{ cm}$.
So với chiều cao của cốc $H = ${o(i)}\\text{ cm}$:
${F?`Do $h_{\\text{mới}} > H$ nên nước tràn qua miệng cốc một lượng $V_{\\text{tràn}} = (${o(D,2)} - ${o(i)}) \\cdot \\pi R^2 \\approx ${o(E,2)}\\text{ cm}^3$.`:"Do $h_{\\text{mới}} \\le H$ nên nước chưa tràn ra ngoài cốc."}
Chiều cao nước dâng thêm là **${o(M)} cm**. Chọn phương án **${b[C].label}**.
      `}],V=b.map(J=>J.isCorrect?`True([$${J.math}$])`:`[$${J.math}$]`).join(", "),st=`// Đề thi thực tế Hung Math - Toán 12
#tn([${O}],
  (${V}),
  id: "TN-THUCTE-TRU01",
  tags: ("Toán-thực-tế", "Hình-trụ", "Khối-cầu", "Archimedes", "TH"),
  loigiai: [
    #step[
      Tổng thể tích của $n = ${s}$ viên bi sắt:
      $ V_{\\text{tổng}} = n \\cdot \\frac{4}{3}\\pi r^3 = ${s} \\cdot \\frac{4}{3}\\pi (${o(e)})^3 \\approx ${o($,2)}\\text{ cm}^3 $.
    ]
    #step[
      Diện tích đáy cốc hình trụ: $S = \\pi R^2 = \\pi (${o(c)})^2 \\approx ${o(p,2)}\\text{ cm}^2$.
    ]
    #step[
      Theo nguyên lý chiếm chỗ Archimedes, mực nước dâng thêm:
      $ \\Delta h = \\frac{V_{\\text{tổng}}}{S} = \\frac{4 n r^3}{3 R^2} \\approx ${o(M)}\\text{ cm} $.
      Vậy chọn đáp án *${b[C].label}*.
    ]
  ]
)`,Ft=`ĐỀ BÀI:
${O}
A. ${b[0].math}
B. ${b[1].math}
C. ${b[2].math}
D. ${b[3].math}

ĐÁP ÁN ĐÚNG: ${b[C].label}

LỜI GIẢI CHI TIẾT:
1. Thể tích ${s} viên bi: V = n * (4/3)*π*r³ = ${s} * (4/3)*π*(${o(e)})³ ≈ ${o($,2)} cm³.
2. Diện tích đáy cốc: S = π*R² = π*(${o(c)})² ≈ ${o(p,2)} cm².
3. Chiều cao dâng thêm: Δh = V / S = (4*n*r³) / (3*R²) ≈ ${o(M)} cm.`;return{id:"cyl_exam",title:"Cốc trụ chứa nước & Thả n viên bi sắt dâng nước",contextDesc:"Dạng bài toán thể tích khối tròn xoay và mực nước dâng ứng dụng định luật Archimedes.",problemStatement:O,format:"mcq",options:b,correctIndex:C,shortAnswer:o(M),shortUnit:"cm",tfItems:K,solutionSteps:Z,typstCode:st,plainText:Ft}}function Ne(i,c,e){const s=1.3333333333333333*Math.PI*Math.pow(i,3),a=c*s;let d=0,p=2*i;for(let b=0;b<40;b++){const C=(d+p)/2;Math.PI*C*C*(i-C/3)<a?d=C:p=C}const y=(d+p)/2,$=H(y,2),D=`Một quả cầu đồng chất làm bằng ${e==="wood"?"gỗ":"nhựa xốp"} có bán kính $r = ${o(i)}\\text{ dm}$ và khối lượng riêng $\\rho = ${o(c)}\\text{ g/cm}^3$ được thả vào một chậu nước lớn (cho biết khối lượng riêng của nước nguyên chất là $\\rho_0 = 1\\text{ g/cm}^3$). Khi quả cầu ở trạng thái cân bằng tĩnh nổi trên mặt nước, tính chiều cao $h$ của phần quả cầu bị chìm dưới mặt nước (làm tròn kết quả đến hàng phần trăm).`,F=H(2*i*c,2),E=H(i*c,2),z=H(2*i-$,2),X=[{val:$,isCorr:!0,trap:""},{val:F!==$?F:H($*1.25,2),isCorr:!1,trap:"Lỗi trực quan sai lầm: Ngộ nhận tỉ lệ chiều cao chìm bằng tỉ lệ khối lượng riêng (h = 2r * rho). Chỏm cầu có tiết diện biến thiên phi tuyến tính!"},{val:E!==$&&E!==F?E:H($*.75,2),isCorr:!1,trap:"Lỗi nhầm: Lấy h = r * rho thay vì giải phương trình thể tích chỏm cầu."},{val:z!==$&&z!==F?z:H($*1.1,2),isCorr:!1,trap:"Lỗi đọc đề: Tính nhầm chiều cao phần NỔI trên mặt nước thay vì phần CHÌM dưới nước."}],G=Math.floor(i*8+c*15)%4,O=[X[G%4],X[(G+1)%4],X[(G+2)%4],X[(G+3)%4]],M=["A","B","C","D"],w=O.map((b,C)=>({id:M[C],label:M[C],math:`${o(b.val)}\\text{ dm}`,isCorrect:b.isCorr,trapExplanation:b.trap})),_=w.findIndex(b=>b.isCorrect),j=[{key:"a",statement:`Lực đẩy Archimedes cân bằng với trọng lực của quả cầu nên tỉ số thể tích phần chìm bằng tỉ số khối lượng riêng: $\\frac{V_{\\text{chìm}}}{V_{\\text{cầu}}} = ${o(c)}$.`,isTrue:!0,explanation:`Điều kiện cân bằng $P = F_A \\iff \\rho V_{\\text{cầu}} g = \\rho_0 V_{\\text{chìm}} g \\implies \\frac{V_{\\text{chìm}}}{V_{\\text{cầu}}} = \\frac{\\rho}{\\rho_0} = ${o(c)}$.`},{key:"b",statement:`Thể tích phần quả cầu bị chìm trong nước là $V_{\\text{chìm}} \\approx ${o(a,2)}\\text{ dm}^3$.`,isTrue:!0,explanation:`$V_{\\text{cầu}} = \\frac{4}{3}\\pi (${o(i)})^3 \\approx ${o(s,2)}\\text{ dm}^3 \\implies V_{\\text{chìm}} = ${o(c)} \\times ${o(s,2)} \\approx ${o(a,2)}\\text{ dm}^3$.`},{key:"c",statement:`Chiều cao phần chìm bằng đúng $h = 2r \\times \\rho = ${o(2*i*c,2)}\\text{ dm}$.`,isTrue:!1,explanation:"Sai! Quả cầu không phải khối trụ, tiết diện ngang thay đổi từ đáy lên tâm, nên thể tích chỏm cầu $V(h) = \\pi h^2(r - h/3)$ phi tuyến tính bậc 3, không thể lấy tỉ lệ thẳng hàng $2r \\times \\rho$."},{key:"d",statement:`Chiều cao thực tế của phần quả cầu chìm dưới mặt nước là $h \\approx ${o($)}\\text{ dm}$.`,isTrue:!0,explanation:`Giải phương trình $\\pi h^2 (${o(i)} - h/3) = ${o(a,2)}$ ta được nghiệm duy nhất trong khoảng $(0, 2r)$ là $h \\approx ${o($)}\\text{ dm}$.`}],dt=[{title:"Bước 1: Điều kiện cân bằng lực Archimedes",content:`
Khi quả cầu thả vào nước và nổi cân bằng, trọng lượng của quả cầu $P$ triệt tiêu hoàn toàn với lực đẩy Archimedes $F_A$:
$$P = F_A \\iff m g = d_{\\text{nước}} \\cdot V_{\\text{chìm}} \\iff \\rho \\cdot V_{\\text{cầu}} = \\rho_0 \\cdot V_{\\text{chìm}}$$
Do $\\rho_0 = 1\\text{ g/cm}^3$ nên tỉ số thể tích phần chìm đúng bằng khối lượng riêng của quả cầu:
$$V_{\\text{chìm}} = \\rho \\cdot V_{\\text{cầu}} = ${o(c)} \\cdot \\left[\\frac{4}{3}\\pi (${o(i)})^3\\right] \\approx ${o(a,2)}\\text{ dm}^3$$
      `},{title:"Bước 2: Thiết lập phương trình thể tích chỏm cầu",content:`
Phần quả cầu chìm dưới mặt nước là một chỏm cầu bán kính quả cầu $r = ${o(i)}\\text{ dm}$ và chiều cao $h$:
$$V_{\\text{chỏm}}(h) = \\pi h^2 \\left(r - \\frac{h}{3}\\right) = \\pi h^2 \\left(${o(i)} - \\frac{h}{3}\\right)$$
Thay giá trị $V_{\\text{chìm}} = ${o(a,2)}$ vào:
$$\\pi h^2 \\left(${o(i)} - \\frac{h}{3}\\right) = ${o(a,2)}$$
      `},{title:"Bước 3: Giải phương trình tìm chiều cao phần chìm h",content:`
Biến đổi phương trình bậc ba:
$$-\\frac{\\pi}{3} h^3 + \\pi \\cdot ${o(i)} h^2 - ${o(a,2)} = 0$$
Bằng phương pháp số (hoặc bấm máy tính cầm tay giải phương trình bậc ba), ta nhận được nghiệm thực hợp lý trong khoảng $0 < h < 2r = ${o(2*i)}$ là:
$$h \\approx ${o($)}\\text{ dm}$$
Chọn phương án **${w[_].label}**.
      `}],rt=w.map(b=>b.isCorrect?`True([$${b.math}$])`:`[$${b.math}$]`).join(", "),Y=`// Đề thi thực tế Hung Math - Toán 12
#tn([${D}],
  (${rt}),
  id: "TN-THUCTE-NOI01",
  tags: ("Toán-thực-tế", "Vật-nổi", "Khối-cầu", "Archimedes", "VD"),
  loigiai: [
    #step[
      Điều kiện cân bằng Archimedes: $V_{\\text{chìm}} = \\rho \\cdot V_{\\text{cầu}} = ${o(c)} \\cdot \\frac{4}{3}\\pi (${o(i)})^3 \\approx ${o(a,2)}\\text{ dm}^3$.
    ]
    #step[
      Thể tích chỏm cầu chiều cao $h$: $V(h) = \\pi h^2 \\left(${o(i)} - \\frac{h}{3}\\right)$.
    ]
    #step[
      Giải phương trình $\\pi h^2 (${o(i)} - h/3) = ${o(a,2)}$, ta được chiều cao phần chìm:
      $ h \\approx ${o($)}\\text{ dm} $.
      Vậy chọn đáp án *${w[_].label}*.
    ]
  ]
)`,ht=`ĐỀ BÀI:
${D}
A. ${w[0].math}
B. ${w[1].math}
C. ${w[2].math}
D. ${w[3].math}

ĐÁP ÁN ĐÚNG: ${w[_].label}

LỜI GIẢI CHI TIẾT:
1. Thể tích chìm: V_chìm = ρ * V_cầu = ${o(c)} * (4/3)*π*(${o(i)})³ ≈ ${o(a,2)} dm³.
2. Phương trình chỏm cầu: π * h² * (${o(i)} - h/3) = ${o(a,2)}.
3. Nghiệm phương trình trong khoảng (0, 2r): h ≈ ${o($)} dm.`;return{id:"buoy_exam",title:"Vật nổi cân bằng & Thể tích chỏm cầu Archimedes",contextDesc:"Dạng bài toán tích phân chỏm cầu và cân bằng lực trong đời sống thực tế.",problemStatement:D,format:"mcq",options:w,correctIndex:_,shortAnswer:o($),shortUnit:"dm",tfItems:j,solutionSteps:dt,typstCode:Y,plainText:ht}}const re=[{id:"cone_max",name:"Bình nón: Tìm r để Nước trào Max",icon:"🔻",desc:"Bình nón đầy nước, thả quả cầu kim loại. Tìm bán kính r để thể tích nước tràn ra ngoài là lớn nhất (Bài toán 9+ THPT)."},{id:"cyl_rise",name:"Cốc trụ: Mực nước dâng thêm Δh",icon:"🥫",desc:"Cốc trụ có sẵn nước h₀, thả n viên bi chìm xuống đáy. Mực nước dâng lên Δh và tràn qua miệng nếu đầy."},{id:"buoyancy",name:"Vật nổi cân bằng (Gỗ / Nhựa)",icon:"🪵",desc:"Khối cầu có khối lượng riêng nhẹ hơn nước (ρ < 1), nổi bồng bềnh theo định luật Archimedes F_A = P."}],ze=[{id:"gold",name:"Kim loại vàng",icon:"🟡",rho:7.8},{id:"steel",name:"Thép sáng bóng",icon:"⚪",rho:7.8},{id:"glass",name:"Bi thủy tinh",icon:"🔵",rho:2.5},{id:"wood",name:"Gỗ thông nổi",icon:"🪵",rho:.65},{id:"rubber",name:"Nhựa / Cao su",icon:"🔴",rho:.9}];function Oe(){const i=l("div","realmath-module archimedes-module");let c="cone_max",e=6,s=3,a=1.6,d=1,p=3.5,y=.65,$="gold",L="cluster",D="mcq",F=null,E=null,z=!0,X="graph",G=0,O=!1,M=0;const w=l("div","stcol"),_=l("div","rm-vis"),j=qt("1. Chọn bài toán thực tế","rm-panel"),dt=l("div","vessel-grid"),rt=[];re.forEach(n=>{const t=l("button","vessel-btn"+(n.id===c?" on":""));t.innerHTML=`<span class="v-ico">${n.icon}</span><span class="v-name">${bt(n.name)}</span>`,t.title=n.desc,t.addEventListener("click",()=>{c=n.id,c==="cone_max"?(d=1,$="gold"):c==="buoyancy"?(d=1,$="wood"):$="steel",rt.forEach(r=>r.classList.toggle("on",r===t)),xn(),gt(),ot()}),rt.push(t),dt.appendChild(t)}),j.appendChild(dt);const Y=l("div","vessel-desc-box");j.appendChild(Y);const ht=qt("2. Thông số bình & Quả cầu","rm-panel"),b=l("input","fld");b.type="number",b.step="0.5",b.min="2",b.max="15",b.value=String(e);const C=l("input","fld");C.type="number",C.step="0.5",C.min="1",C.max="10",C.value=String(s);const K=l("input","fld");K.type="number",K.step="0.1",K.min="0.2",K.max="6",K.value=String(a);const Z=l("input","fld");Z.type="number",Z.step="0.5",Z.min="0.5",Z.max="12",Z.value=String(p);const V=l("input","fld");V.type="number",V.step="0.05",V.min="0.1",V.max="0.95",V.value=String(y);const st=(n,t,r="",h="")=>{const m=l("div","frow "+h);return m.append(l("label","lab",`<span>${n}</span>`),t,l("span","unit",r)),m},Ft=st("Chiều cao bình H",b,"dm/cm"),J=st("Bán kính miệng R",C,"dm/cm"),xt=st("Bán kính cầu r",K,"dm/cm"),Lt=st("Mực nước đầu h₀",Z,"dm/cm","row-cyl-only"),Ut=st("K.lượng riêng ρ",V,"g/cm³","row-buoy-only"),N=l("div","slider-row"),k=Object.assign(l("input"),{type:"range",min:"0.2",max:"3.5",step:"0.02",value:String(a),className:"slider"}),_t=l("span","val-badge",`r = ${a.toFixed(2)} dm`);N.append(l("span","s-lab","Kéo r:"),_t,k);const yt=l("div","frow row-ball-count"),pt=l("label","lab","<span>Số lượng quả cầu $n$:</span>"),It=l("div","ball-chips"),zt=[1,2,3,4,5,6,8],ln=[];zt.forEach(n=>{const t=l("button","ball-chip"+(n===d?" on":""),String(n));t.addEventListener("click",()=>{d=n,ln.forEach(r=>r.classList.toggle("on",r===t)),gt(),ot()}),ln.push(t),It.appendChild(t)}),yt.append(pt,It);const dn=l("div","frow row-ball-mat"),Tn=l("label","lab","<span>Chất liệu quả cầu:</span>"),pn=l("div","ball-chips mat-chips"),it=[];ze.forEach(n=>{const t=l("button","ball-chip"+(n.id===$?" on":""));t.innerHTML=`<span class="m-ico">${n.icon}</span><span class="m-txt">${n.name.split(" ")[0]}</span>`,t.title=n.name,t.addEventListener("click",()=>{$=n.id,it.forEach(r=>r.classList.toggle("on",r===t)),c==="buoyancy"&&(y=n.rho<1?n.rho:.65,V.value=String(y)),gt(),ot()}),it.push(t),pn.appendChild(t)}),dn.append(Tn,pn);const jt=l("div","frow row-arr-only"),Cn=l("label","lab","<span>Kiểu xếp $n$ viên:</span>"),Vt=l("div","ball-chips"),Et=[{id:"cluster",label:"⭕ Chùm đáy"},{id:"stack",label:"🥞 Xếp chồng"}],mt=[];Et.forEach(n=>{const t=l("button","ball-chip"+(n.id===L?" on":""),n.label);t.addEventListener("click",()=>{L=n.id,mt.forEach(r=>r.classList.toggle("on",r===t)),gt(),ot()}),mt.push(t),Vt.appendChild(t)}),jt.append(Cn,Vt),ht.append(Ft,J,xt,N,yt,dn,jt,Lt,Ut);const Yt=qt("3. Mô phỏng thả cầu & Cực trị","rm-panel"),Ot=l("div","sim-ctl-bar"),wt=Pt("▶ Thả cầu chìm","btn primary pump-btn",()=>Ie()),Mt=Pt("↺ Nhấc cầu ra","btn ghost",()=>Ve()),mn=Pt("⭐ Bán kính r* tối ưu","btn ghost highlight-btn",()=>Le());Ot.append(wt,Mt),Yt.append(Ot,mn);const Sn=qt("4. Phân tích giải tích & Cực trị","rm-panel"),Zt=l("div","solution-box");Sn.appendChild(Zt);const un=qt("5. 📝 Máy Chế Đề Thi & Đáp Án Chuẩn THPT","rm-panel exam-panel-left"),tt=l("div","exam-box-left");un.appendChild(tt),w.append(j,ht,Yt,Sn,un);const gn=l("div","toolbar"),vn=l("div","btn-group"),S=Pt("📈 Đồ thị $V(r)$","btn ghost sm on",()=>Jt("graph")),u=Pt("📝 Tờ Đề Thi Chuẩn THPT","btn ghost sm",()=>Jt("exam"));vn.append(S,u),gn.append(l("span","rm-title","🏀 Định luật Archimedes & Bài toán Cực trị Thể tích"),vn,Pt("🎲 Đổi số đề mới","ghost sm highlight-btn-sm",()=>_e()),Pt("🔍 Vừa khung","ghost sm",()=>jn()),de(i,()=>Nt()));const P=l("div","rm-vis-boxes"),R=l("div","rm-box box-3d"),q=l("canvas");q.className="solid-canvas";const I=l("div","ghint","xoay chuột để quay 3D · cuộn phóng to/thu nhỏ · kéo thanh trượt r hoặc bấm thả cầu");R.append(q,I);const B=l("div","rm-box box-2d"),A=l("canvas");A.className="graph-canvas";const lt=l("div","graph-header",`
    <span class="gh-tit">📈 Đồ thị Thể tích Nước tràn V_trào(r)</span>
    <span class="gh-tag">Điểm Cực Trị Tuyệt Đối r*</span>
  `),$t=l("div","exam-full-view");$t.style.display="none",B.append(lt,A,$t),P.append(R,B),_.append(gn,P),i.append(w,_),zn(w,_,"col","archSplitX",.28,()=>Nt()),zn(R,B,"col","archSplitVis",.52,()=>Nt());function Jt(n){X=n,S.classList.toggle("on",n==="graph"),u.classList.toggle("on",n==="exam"),n==="graph"?(lt.style.display="flex",A.style.display="block",$t.style.display="none",ot()):(lt.style.display="none",A.style.display="none",$t.style.display="block",bn())}const At=new pe,Rt=new me(40,1,.05,100);Rt.position.set(6.5,5,9);const Gt=new ue({canvas:q,antialias:!0,alpha:!0});ge(Gt);const Tt=new ve(Rt,q);Tt.enableDamping=!0,Tt.dampingFactor=.08;const at=new $e(16777215,.75),ut=new On(16777215,1.3);ut.position.set(7,12,8);const kn=new On(3718648,.6);kn.position.set(-6,-3,-6),At.add(at,ut,kn);const Pn=new fe(12,24,9741240,14870768);Pn.position.y=0,At.add(Pn);const Ln=new wn(4.2,4.4,.35,48),_n=new en({color:14870768,roughness:.3,metalness:.1}),Un=new Q(Ln,_n);Un.position.y=.175,At.add(Un);const W=new Qn;At.add(W);let In=null,Bt=null,Ht=null,$n=null,Vn=null;const An=[],ct=[];function jn(){Tt.target.set(0,e*.45,0),Rt.position.set(s*2.6,e*.85+2,s*3.2),Tt.update()}function Kt(){const n=Math.hypot(s,e);return{sinA:s/n,cosA:e/n,tanA:s/e,l:n}}function fn(n){const{sinA:t}=Kt(),r=n/t,h=r,m=r-n,v=r+n;if(m>=e)return{zCenter:h,zBottom:m,zTop:v,hSubmerged:0,vOverflow:0,isFullyInside:!1,isBlocked:!0};if(v<=e){const x=1.3333333333333333*Math.PI*Math.pow(n,3);return{zCenter:h,zBottom:m,zTop:v,hSubmerged:2*n,vOverflow:x,isFullyInside:!0,isBlocked:!1}}const g=e-m,f=Math.PI*Math.pow(g,2)*(n-g/3);return{zCenter:h,zBottom:m,zTop:v,hSubmerged:g,vOverflow:Math.max(0,f),isFullyInside:!1,isBlocked:!1}}function Yn(){const{sinA:n}=Kt(),t=e/(1/n-1);let r=.1,h=0;const m=600;for(let v=1;v<=m;v++){const g=t*v/m,f=fn(g);f.vOverflow>h&&(h=f.vOverflow,r=g)}return{rOpt:r,vMax:h}}function Rn(n,t=d){const r=Math.PI*s*s,h=4/3*Math.PI*Math.pow(n,3),m=t*h,v=r*p,g=r*e;let f=p+m/r,x=!1,T=0;return f>e&&(x=!0,T=v+m-g,f=e),{hFinal:f,deltaH:f-p,vOverflow:T,vBall:h,vTotal:m,isSpilled:x}}function Zn(n,t){const r=1.3333333333333333*Math.PI*Math.pow(n,3),h=t*r;let m=0,v=2*n;for(let g=0;g<40;g++){const f=(m+v)/2;Math.PI*f*f*(n-f/3)<h?m=f:v=f}return{hSubmerged:(m+v)/2,vSubmerged:h,vBall:r,ratio:t}}function xn(){const n=c==="cone_max",t=c==="cyl_rise",r=c==="buoyancy";Lt.style.display=t?"flex":"none",Ut.style.display=r?"flex":"none",yt.style.display=n||t?"flex":"none",jt.style.display=d>1?"flex":"none",mn.style.display=n&&d===1?"inline-flex":"none",Y.innerHTML=bt(re.find(v=>v.id===c)?.desc??"");const{sinA:h}=Kt(),m=n?e/(1/h-1):s;k.max=(m*.98).toFixed(2),a=Math.min(a,Number(k.max)),k.value=String(a),K.value=String(a),_t.textContent=`r = ${a.toFixed(2)} dm`}function Me(n){switch($){case"steel":return new en({color:14870768,metalness:.95,roughness:.1});case"glass":return new vt({color:3718648,transmission:.9,roughness:.05,opacity:.6,transparent:!0,clearcoat:1});case"wood":return new en({color:11817737,roughness:.7,metalness:.05});case"rubber":return new en({color:15680580,roughness:.45,metalness:.1});case"gold":default:return new en({color:16096779,metalness:.88,roughness:.15})}}function Te(){if(ct.length=0,c==="cone_max"){const{sinA:n}=Kt();if(d===1){const t=a/n;ct.push({x:0,y:t,z:0,r:a})}else{let t=a,r=t/n;for(let h=0;h<d;h++){ct.push({x:0,y:r,z:0,r:t});const m=(1+n)/(1-n),v=t*Math.min(1.35,m);r+=t+v,t=v}}}else if(c==="cyl_rise")if(d===1)ct.push({x:0,y:a,z:0,r:a});else if(L==="stack")for(let n=0;n<d;n++)ct.push({x:0,y:a+2*n*a,z:0,r:a});else if(d===2){const n=Math.min(s-a,a*.95);ct.push({x:-n,y:a,z:0,r:a}),ct.push({x:n,y:a,z:0,r:a})}else if(d===3){const n=Math.min(s-a,a*1.15);for(let t=0;t<3;t++){const r=t*2*Math.PI/3;ct.push({x:n*Math.cos(r),y:a,z:n*Math.sin(r),r:a})}}else if(d===4){const n=Math.min(s-a,a*1.2);for(let t=0;t<4;t++){const r=t*2*Math.PI/4+Math.PI/4;ct.push({x:n*Math.cos(r),y:a,z:n*Math.sin(r),r:a})}}else{ct.push({x:0,y:a,z:0,r:a});const n=d-1,t=Math.min(s-a,a*1.55);for(let r=0;r<n;r++){const h=r*2*Math.PI/n;ct.push({x:t*Math.cos(h),y:a,z:t*Math.sin(h),r:a})}}else{const n=Zn(a,y),r=p-n.hSubmerged+a;ct.push({x:0,y:r,z:0,r:a})}}function gt(){for(;W.children.length>0;){const n=W.children[0];W.remove(n),"geometry"in n&&n.geometry&&n.geometry.dispose()}if(An.length=0,c==="cone_max"){const n=[new et(0,0),new et(s,e)],t=new Kn(n,48),r=new vt({color:9741240,transparent:!0,opacity:.32,roughness:.08,transmission:.9,ior:1.45,side:an});In=new Q(t,r),W.add(In);const h=new He(s,.04,16,64);h.rotateX(Math.PI/2),h.translate(0,e,0);const m=new en({color:165063,metalness:.6,roughness:.2});W.add(new Q(h,m))}else{const n=new wn(s,s,e,48,1,!0);n.translate(0,e/2,0);const t=new vt({color:9741240,transparent:!0,opacity:.32,roughness:.08,side:an});In=new Q(n,t),W.add(In);const r=new Mn(s,48);r.rotateX(-Math.PI/2),W.add(new Q(r,t))}if(Wn(),Te(),ct.forEach((n,t)=>{const r=new ce(n.r,40,32),h=Me(n.r),m=new Q(r,h),v=e+2.5+t*.7,g=O?v-G*(v-n.y):n.y;m.position.set(n.x,g,n.z),W.add(m),An.push(m)}),c==="cone_max"&&d===1){Vn=new Qn;const{sinA:n,cosA:t}=Kt(),r=a/n,h=a*t,m=r-a*n,v=[new sn(0,r,0),new sn(h,m,0),new sn(0,r,0),new sn(-h,m,0)],g=new ye().setFromPoints(v),f=new De({color:15680580,dashSize:.15,gapSize:.1}),x=new xe(g,f);x.computeLineDistances(),Vn.add(x);const T=new ce(.06,16,16),Ct=new be({color:15680580}),St=new Q(T,Ct);St.position.set(0,r,0),Vn.add(St),W.add(Vn)}}function Wn(){Bt&&(W.remove(Bt),Bt.geometry?.dispose()),Ht&&(W.remove(Ht),Ht.geometry?.dispose()),$n&&(W.remove($n),$n.geometry?.dispose());let n=e,t=0;if(c==="cone_max"){t=fn(a).vOverflow,n=e;const h=[new et(0,0),new et(s,e)],m=new Kn(h,40),v=new vt({color:165063,transparent:!0,opacity:.72,roughness:.1});Bt=new Q(m,v),W.add(Bt);const g=new Mn(s,48);g.rotateX(-Math.PI/2),g.translate(0,e,0);const f=new vt({color:3718648,transparent:!0,opacity:.85,roughness:.05,clearcoat:1});Ht=new Q(g,f),W.add(Ht)}else if(c==="cyl_rise"){const r=Rn(a,d),h=O?r.deltaH*G:r.deltaH;n=Math.min(e,p+h),t=O?r.vOverflow*G:r.vOverflow;const m=new wn(s*.99,s*.99,n,40);m.translate(0,n/2,0);const v=new vt({color:165063,transparent:!0,opacity:.72,roughness:.1});Bt=new Q(m,v),W.add(Bt);const g=new Mn(s*.99,48);g.rotateX(-Math.PI/2),g.translate(0,n,0);const f=new vt({color:3718648,transparent:!0,opacity:.85,roughness:.05});Ht=new Q(g,f),W.add(Ht)}else{n=p;const r=new wn(s*.99,s*.99,n,40);r.translate(0,n/2,0);const h=new vt({color:165063,transparent:!0,opacity:.72,roughness:.1});Bt=new Q(r,h),W.add(Bt);const m=new Mn(s*.99,48);m.rotateX(-Math.PI/2),m.translate(0,n,0);const v=new vt({color:3718648,transparent:!0,opacity:.85});Ht=new Q(m,v),W.add(Ht)}if(t>.01){const h=Math.min(.28,t/(Math.PI*4.2*4.2)*1.5+.04),m=new wn(4.2*.98,4.2*.98,h,40);m.translate(0,.08+h/2,0);const v=new vt({color:3718648,transparent:!0,opacity:.75,roughness:.1});$n=new Q(m,v),W.add($n)}}function ot(){let n="",t="",r="";if(c==="cone_max"){const{sinA:h}=Kt(),m=fn(a),v=Yn(),g=1/h-1;n=`\\sin\\alpha = \\frac{R}{\\sqrt{R^2+H^2}} = \\frac{${s}}{\\sqrt{${s}^2+${e}^2}} \\approx ${h.toFixed(3)}`,t=`z_I = \\frac{r}{\\sin\\alpha} \\implies h_{\\text{chìm}} = H - r\\left(\\frac{1}{\\sin\\alpha} - 1\\right) = ${e} - ${g.toFixed(3)}r`,r=`
        <div class="m-item">
          <span class="m-lbl">Bán kính quả cầu $r$:</span>
          <span class="m-val highlight">${a.toFixed(2)} <small>dm</small></span>
        </div>
        <div class="m-item">
          <span class="m-lbl">Số lượng quả cầu:</span>
          <span class="m-val">${d} <small>quả</small></span>
        </div>
        <div class="m-item">
          <span class="m-lbl">Lượng nước tràn $V_{\\text{trào}}$:</span>
          <span class="m-val speed">${m.vOverflow.toFixed(3)} <small>Lít</small></span>
        </div>
        <div class="m-item">
          <span class="m-lbl">Bán kính tối ưu $r^*$:</span>
          <span class="m-val highlight">⭐ ${v.rOpt.toFixed(2)} <small>dm</small></span>
        </div>
        <div class="m-item">
          <span class="m-lbl">Nước tràn lớn nhất $V_{\\max}$:</span>
          <span class="m-val speed">🏆 ${v.vMax.toFixed(3)} <small>Lít</small></span>
        </div>
        <div class="m-item">
          <span class="m-lbl">Trạng thái khối cầu:</span>
          <span class="m-val" style="font-size:11px">${m.isFullyInside?"Ngập trọn trong nón":m.isBlocked?"Quá to (kẹt ngoài)":"Ngập một phần chỏm"}</span>
        </div>
      `,Zt.innerHTML=`
        <div class="s-card">
          <div class="s-title">📐 Góc nón & Điều kiện tiếp xúc thành nón:</div>
          <div class="s-math">${Dt(n)}</div>
        </div>
        <div class="s-card">
          <div class="s-title">💧 Hàm số thể tích nước tràn $V_{\\text{trào}}(r)$:</div>
          <div class="s-math">${Dt(t)}</div>
          <div class="s-math" style="margin-top:4px">${Dt("V_{\\text{trào}}(r) = \\pi h_{\\text{chìm}}^2 \\left(r - \\frac{h_{\\text{chìm}}}{3}\\right)")}</div>
        </div>
        <div class="s-metrics">
          ${r}
        </div>
      `,Se(v)}else if(c==="cyl_rise"){const h=Rn(a,d);n=`V_{\\text{tổng}} = n \\cdot \\frac{4}{3}\\pi r^3 = ${d} \\cdot \\frac{4}{3}\\pi (${a})^3 \\approx ${h.vTotal.toFixed(2)}\\text{ cm}^3`,t=`\\Delta h = \\frac{V_{\\text{tổng}}}{\\pi R^2} = \\frac{${h.vTotal.toFixed(2)}}{\\pi (${s})^2} \\approx ${h.deltaH.toFixed(2)}\\text{ cm}`,r=`
        <div class="m-item">
          <span class="m-lbl">Số lượng quả cầu:</span>
          <span class="m-val highlight">${d} <small>viên</small></span>
        </div>
        <div class="m-item">
          <span class="m-lbl">Mực nước dâng thêm $\\Delta h$:</span>
          <span class="m-val highlight">+${h.deltaH.toFixed(2)} <small>cm</small></span>
        </div>
        <div class="m-item">
          <span class="m-lbl">Mực nước mới $h_{\\text{mới}}$:</span>
          <span class="m-val speed">${h.hFinal.toFixed(2)} / ${e} <small>cm</small></span>
        </div>
        <div class="m-item">
          <span class="m-lbl">Lượng nước tràn ra ngoài:</span>
          <span class="m-val speed">${h.vOverflow.toFixed(2)} <small>Lít/cm³</small></span>
        </div>
        <div class="m-item">
          <span class="m-lbl">Trạng thái bình:</span>
          <span class="m-val" style="font-size:11px">${h.isSpilled?"⚠️ Nước tràn qua miệng cốc":"✅ Nước chưa tràn"}</span>
        </div>
      `,Zt.innerHTML=`
        <div class="s-card">
          <div class="s-title">📐 Thể tích ${d} quả cầu chìm vào đáy cốc:</div>
          <div class="s-math">${Dt(n)}</div>
        </div>
        <div class="s-card">
          <div class="s-title">🌊 Chiều cao nước dâng thêm theo nguyên lý Archimedes:</div>
          <div class="s-math">${Dt(t)}</div>
        </div>
        <div class="s-metrics">
          ${r}
        </div>
      `,ke()}else{const h=Zn(a,y);n="F_A = P \\iff \\rho_{\\text{nước}} V_{\\text{chìm}} g = \\rho_{\\text{vật}} V_{\\text{cầu}} g",t=`\\frac{V_{\\text{chìm}}}{V_{\\text{cầu}}} = \\frac{\\rho_{\\text{vật}}}{\\rho_{\\text{nước}}} = ${y.toFixed(2)}`,r=`
        <div class="m-item">
          <span class="m-lbl">Độ sâu phần chìm $h_{\\text{chìm}}$:</span>
          <span class="m-val highlight">${h.hSubmerged.toFixed(2)} <small>dm</small></span>
        </div>
        <div class="m-item">
          <span class="m-lbl">Thể tích phần chìm $V_{\\text{chìm}}$:</span>
          <span class="m-val">${h.vSubmerged.toFixed(2)} <small>dm³</small></span>
        </div>
        <div class="m-item">
          <span class="m-lbl">Tỉ lệ ngập nước:</span>
          <span class="m-val speed">${(y*100).toFixed(1)} <small>%</small></span>
        </div>
        <div class="m-item">
          <span class="m-lbl">Chiều cao phần nổi:</span>
          <span class="m-val">${(2*a-h.hSubmerged).toFixed(2)} <small>dm</small></span>
        </div>
      `,Zt.innerHTML=`
        <div class="s-card">
          <div class="s-title">⚖️ Cân bằng lực Archimedes & Trọng lượng:</div>
          <div class="s-math">${Dt(n)}</div>
        </div>
        <div class="s-card">
          <div class="s-title">🪵 Tỉ số thể tích chìm tương đương tỉ số khối lượng riêng:</div>
          <div class="s-math">${Dt(t)}</div>
        </div>
        <div class="s-metrics">
          ${r}
        </div>
      `,Pe(h)}Ce()}function Ce(){F=Fe({mode:c,H:e,R:s,r:a,n:d,h0:p,rho:y,material:$}),E=null,Xn(),X==="exam"&&bn()}function Xn(){if(!F)return;const n=F;tt.innerHTML=`
      <div class="exam-header-bar">
        <div class="exam-fmt-tabs">
          <button class="fmt-btn ${D==="mcq"?"on":""}" data-fmt="mcq">Trắc nghiệm A-B-C-D</button>
          <button class="fmt-btn ${D==="tf"?"on":""}" data-fmt="tf">Đúng / Sai</button>
        </div>
        <button class="btn-copy-typst" title="Sao chép mã nguồn Typst chuẩn hung-math">📋 Copy Typst</button>
      </div>

      <div class="exam-stem-card">
        <div class="stem-badge">📌 Câu hỏi thực tế (Chuẩn THPT)</div>
        <div class="stem-text">${Qt(n.problemStatement)}</div>
      </div>

      <div class="exam-options-container">
        <!-- Render tương tác tuỳ theo format -->
      </div>

      <div class="exam-actions-bar">
        <button class="btn ghost sm btn-sol-toggle">${z?"👁️ Ẩn Lời Giải":"💡 Xem Lời Giải Chi Tiết"}</button>
        <button class="btn ghost sm btn-copy-text">📄 Copy Đề & Đáp Án</button>
      </div>

      <div class="exam-solution-collapse" style="display: ${z?"block":"none"}">
        <!-- Lời giải step by step -->
      </div>
    `,tt.querySelectorAll(".fmt-btn").forEach(f=>{f.addEventListener("click",()=>{D=f.dataset.fmt,Xn(),X==="exam"&&bn()})});const r=tt.querySelector(".btn-copy-typst");r?.addEventListener("click",()=>{navigator.clipboard.writeText(n.typstCode).then(()=>{r.textContent="✅ Đã copy Typst!",setTimeout(()=>{r.textContent="📋 Copy Typst"},2e3)})});const h=tt.querySelector(".btn-copy-text");h?.addEventListener("click",()=>{navigator.clipboard.writeText(n.plainText).then(()=>{h.textContent="✅ Đã copy Text!",setTimeout(()=>{h.textContent="📄 Copy Đề & Đáp Án"},2e3)})});const m=tt.querySelector(".btn-sol-toggle"),v=tt.querySelector(".exam-solution-collapse");m?.addEventListener("click",()=>{z=!z,m.textContent=z?"👁️ Ẩn Lời Giải":"💡 Xem Lời Giải Chi Tiết",v&&(v.style.display=z?"block":"none")});const g=tt.querySelector(".exam-options-container");if(g)if(D==="mcq"){const f=l("div","mcq-grid");if(n.options.forEach(x=>{const T=E===x.id,Ct=x.isCorrect;let St="mcq-opt-btn";T&&(St+=Ct?" correct":" wrong");const ft=l("button",St);ft.innerHTML=`
            <span class="opt-label">${x.id}.</span>
            <span class="opt-math">${Qt("$"+x.math+"$")}</span>
            ${T?Ct?'<span class="opt-feedback-ico">✅</span>':'<span class="opt-feedback-ico">❌</span>':""}
          `,ft.addEventListener("click",()=>{E=x.id,Xn(),X==="exam"&&bn()}),f.appendChild(ft)}),g.appendChild(f),E){const x=n.options.find(T=>T.id===E);if(x&&!x.isCorrect&&x.trapExplanation){const T=l("div","trap-alert-box",`
              <span class="trap-ico">⚠️</span>
              <span class="trap-text"><strong>Nhận diện bẫy:</strong> ${bt(x.trapExplanation)}</span>
            `);g.appendChild(T)}else if(x&&x.isCorrect){const T=l("div","congrats-alert-box",`
              <span class="congrats-ico">🎉</span>
              <span class="congrats-text"><strong>Xuất sắc!</strong> Bạn đã nắm vững bản chất hình học và giải tích của bài toán.</span>
            `);g.appendChild(T)}}}else{const f=l("div","tf-list");n.tfItems.forEach(x=>{const T=l("div","tf-item-row");T.innerHTML=`
            <div class="tf-head">
              <span class="tf-key">${x.key})</span>
              <span class="tf-stat">${Qt(x.statement)}</span>
              <span class="tf-badge ${x.isTrue?"true":"false"}">${x.isTrue?"ĐÚNG":"SAI"}</span>
            </div>
            <div class="tf-explain">💡 <em>${bt(x.explanation)}</em></div>
          `,f.appendChild(T)}),g.appendChild(f)}v&&(v.innerHTML=n.solutionSteps.map((f,x)=>`
        <div class="exam-sol-step">
          <div class="step-badge">${x+1}</div>
          <div class="step-body">
            <div class="step-title">${bt(f.title)}</div>
            <div class="step-content">${Qt(f.content)}</div>
          </div>
        </div>
      `).join(""))}function bn(){if(!F)return;const n=F;$t.innerHTML=`
      <div class="a4-sheet">
        <div class="a4-header">
          <div class="a4-left">
            <div class="a4-school">BỘ GIÁO DỤC VÀ ĐÀO TẠO</div>
            <div class="a4-exam">ĐỀ THI TỐT NGHIỆP THPT TOÁN</div>
          </div>
          <div class="a4-right">
            <div class="a4-title">BÀI TOÁN THỰC TẾ 3D — HUNG MATH</div>
            <div class="a4-sub">Chủ đề: Khối tròn xoay & Cực trị ứng dụng thực tế</div>
          </div>
        </div>
        <div class="a4-divider"></div>

        <div class="a4-body">
          <div class="a4-stem">
            <strong>Câu hỏi:</strong> ${Qt(n.problemStatement)}
          </div>

          <div class="a4-options">
            ${n.options.map(r=>`
              <div class="a4-opt ${r.isCorrect?"a4-correct":""}">
                <span class="a4-opt-key">(${r.id})</span>
                <span class="a4-opt-val">${Qt("$"+r.math+"$")}</span>
                ${r.isCorrect?'<span class="a4-key-badge">✓ Đáp án chuẩn</span>':""}
              </div>
            `).join("")}
          </div>

          <div class="a4-divider-thin"></div>

          <div class="a4-solution">
            <div class="a4-sol-title">📖 LỜI GIẢI CHI TIẾT SƯ PHẠM (CHUẨN FORM TYPST HUNG-MATH):</div>
            ${n.solutionSteps.map((r,h)=>`
              <div class="a4-sol-step">
                <div class="a4-step-num">Bước ${h+1}: ${bt(r.title)}</div>
                <div class="a4-step-cnt">${Qt(r.content)}</div>
              </div>
            `).join("")}
          </div>

          <div class="a4-typst-box">
            <div class="a4-typst-header">
              <span>📋 Mã nguồn Typst chuẩn gói @preview/hung-math:1.0.6</span>
              <button class="btn ghost sm btn-copy-typst-full">Sao chép Typst</button>
            </div>
            <pre class="a4-code"><code>${bt(n.typstCode)}</code></pre>
          </div>
        </div>
      </div>
    `;const t=$t.querySelector(".btn-copy-typst-full");t?.addEventListener("click",()=>{navigator.clipboard.writeText(n.typstCode).then(()=>{t.textContent="✅ Đã chép!",setTimeout(()=>{t.textContent="Sao chép Typst"},2e3)})})}function Se(n){const t=A.getContext("2d");if(!t)return;const r=A.width/(window.devicePixelRatio||1),h=A.height/(window.devicePixelRatio||1);t.clearRect(0,0,r,h);const m=48,v=24,g=24,f=36,x=r-m-v,T=h-g-f,{sinA:Ct}=Kt(),ft=e/(1/Ct-1),tn=Math.max(1,n.vMax*1.25);t.strokeStyle="#cbd5e1",t.lineWidth=1,t.beginPath(),t.moveTo(m,g),t.lineTo(m,g+T),t.lineTo(m+x,g+T),t.stroke(),t.font="10px sans-serif",t.fillStyle="#64748b",t.textAlign="right";for(let nt=0;nt<=4;nt++){const nn=tn*nt/4,Xt=g+T-T*nt/4;t.fillText(nn.toFixed(1),m-6,Xt+3),t.strokeStyle="#f1f5f9",t.beginPath(),t.moveTo(m,Xt),t.lineTo(m+x,Xt),t.stroke()}t.textAlign="center";for(let nt=0;nt<=4;nt++){const nn=ft*nt/4,Xt=m+x*nt/4;t.fillText(nn.toFixed(1),Xt,g+T+14)}t.fillText("Bán kính r (dm)",m+x/2,g+T+28),t.save(),t.translate(14,g+T/2),t.rotate(-Math.PI/2),t.fillText("V_trào (Lít)",0,0),t.restore(),t.strokeStyle="#0284c7",t.lineWidth=2.4,t.beginPath();const Bn=120;for(let nt=0;nt<=Bn;nt++){const nn=ft*nt/Bn,Xt=fn(nn),ne=m+nn/ft*x,ee=g+T-Xt.vOverflow/tn*T;nt===0?t.moveTo(ne,ee):t.lineTo(ne,ee)}t.stroke(),t.lineTo(m+x,g+T),t.lineTo(m,g+T),t.closePath(),t.fillStyle="rgba(2, 132, 199, 0.08)",t.fill();const Wt=m+n.rOpt/ft*x,kt=g+T-n.vMax/tn*T;t.setLineDash([4,4]),t.strokeStyle="#ef4444",t.lineWidth=1.2,t.beginPath(),t.moveTo(Wt,g+T),t.lineTo(Wt,kt),t.lineTo(m,kt),t.stroke(),t.setLineDash([]),t.fillStyle="#ef4444",t.beginPath(),t.arc(Wt,kt,5,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.beginPath(),t.arc(Wt,kt,2,0,Math.PI*2),t.fill(),t.fillStyle="#ef4444",t.font="bold 10px sans-serif",t.textAlign="left",t.fillText(`Cực đại: (${n.rOpt.toFixed(2)}, ${n.vMax.toFixed(2)})`,Wt+8,kt-4);const Hn=fn(a),Dn=m+a/ft*x,yn=g+T-Hn.vOverflow/tn*T;t.fillStyle="#f59e0b",t.beginPath(),t.arc(Dn,yn,6,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.beginPath(),t.arc(Dn,yn,2.5,0,Math.PI*2),t.fill()}function ke(){const n=A.getContext("2d");if(!n)return;const t=A.width/(window.devicePixelRatio||1),r=A.height/(window.devicePixelRatio||1);n.clearRect(0,0,t,r);const h=48,m=24,v=24,g=36,f=t-h-m,x=r-v-g,T=s,Ct=e*1.15;n.strokeStyle="#cbd5e1",n.lineWidth=1,n.beginPath(),n.moveTo(h,v),n.lineTo(h,v+x),n.lineTo(h+f,v+x),n.stroke();const St=v+x-e/Ct*x;n.setLineDash([4,4]),n.strokeStyle="#ef4444",n.beginPath(),n.moveTo(h,St),n.lineTo(h+f,St),n.stroke(),n.setLineDash([]),n.fillStyle="#ef4444",n.font="10px sans-serif",n.textAlign="right",n.fillText(`Miệng cốc H = ${e}`,h+f,St-4),n.strokeStyle="#0284c7",n.lineWidth=2.4,n.beginPath();const ft=80;for(let kt=0;kt<=ft;kt++){const Hn=T*kt/ft,Dn=Rn(Hn,d),yn=h+Hn/T*f,nt=v+x-Dn.hFinal/Ct*x;kt===0?n.moveTo(yn,nt):n.lineTo(yn,nt)}n.stroke();const tn=Rn(a,d),Bn=h+a/T*f,Wt=v+x-tn.hFinal/Ct*x;n.fillStyle="#f59e0b",n.beginPath(),n.arc(Bn,Wt,6,0,Math.PI*2),n.fill()}function Pe(n){const t=A.getContext("2d");if(!t)return;const r=A.width/(window.devicePixelRatio||1),h=A.height/(window.devicePixelRatio||1);t.clearRect(0,0,r,h);const m=r/2,v=h/2,g=Math.min(r,h)*.28;t.save(),t.beginPath(),t.arc(m,v,g,0,Math.PI*2),t.clip(),t.fillStyle="#fde68a",t.fillRect(m-g,v-g,g*2,g*2);const f=n.hSubmerged/(2*a)*(g*2);t.fillStyle="#38bdf8",t.fillRect(m-g,v+g-f,g*2,f),t.restore(),t.strokeStyle="#0284c7",t.lineWidth=2,t.beginPath(),t.arc(m,v,g,0,Math.PI*2),t.stroke(),t.strokeStyle="#2563eb",t.lineWidth=1.5,t.setLineDash([4,3]),t.beginPath(),t.moveTo(m-g-30,v+g-f),t.lineTo(m+g+30,v+g-f),t.stroke(),t.setLineDash([]),t.font="bold 11px sans-serif",t.fillStyle="#0369a1",t.textAlign="center",t.fillText(`Mặt nước (ngập ${(y*100).toFixed(0)}%)`,m,v+g-f-6)}function Le(){const n=Yn();a=Number(n.rOpt.toFixed(2)),K.value=String(a),k.value=String(a),_t.textContent=`r = ${a.toFixed(2)} dm`,gt(),ot()}function _e(){if(c==="cone_max"){const n=[{R:3,H:4,r:1.5},{R:4,H:3,r:1.2},{R:5,H:12,r:2.2},{R:6,H:8,r:2.5}],t=n[Math.floor(Math.random()*n.length)];s=t.R,e=t.H,a=t.r}else if(c==="cyl_rise"){const n=[{R:4,H:12,h0:7,r:1.5,n:3},{R:5,H:14,h0:8,r:2,n:2},{R:3,H:10,h0:6,r:1.2,n:4},{R:6,H:15,h0:9,r:2.5,n:3}],t=n[Math.floor(Math.random()*n.length)];s=t.R,e=t.H,p=t.h0,a=t.r,d=t.n}else{const n=[{r:2,rho:.6},{r:2.5,rho:.75},{r:1.5,rho:.5},{r:3,rho:.8}],t=n[Math.floor(Math.random()*n.length)];a=t.r,y=t.rho}b.value=String(e),C.value=String(s),K.value=String(a),Z.value=String(p),V.value=String(y),k.value=String(a),_t.textContent=`r = ${a.toFixed(2)} dm`,ln.forEach(n=>n.classList.toggle("on",Number(n.textContent)===d)),xn(),gt(),ot()}function Ie(){if(O){O=!1,wt.textContent="▶ Thả cầu chìm",cancelAnimationFrame(M);return}O=!0,wt.textContent="⏸ Dừng thả",G=0;function n(){if(!O)return;G<1?(G=Math.min(1,G+.045),ct.forEach((r,h)=>{const m=An[h];if(m){const v=e+2.5+h*.7;m.position.y=v-G*(v-r.y)}}),Wn(),M=requestAnimationFrame(n)):(O=!1,wt.textContent="▶ Thả lại",cancelAnimationFrame(M))}n()}function Ve(){O=!1,cancelAnimationFrame(M),wt.textContent="▶ Thả cầu chìm",G=0,ct.forEach((n,t)=>{const r=An[t];r&&(r.position.y=e+2.5+t*.7)}),Wn()}b.addEventListener("input",()=>{e=Math.max(2,Number(b.value)||6),xn(),gt(),ot()}),C.addEventListener("input",()=>{s=Math.max(1,Number(C.value)||3),xn(),gt(),ot()}),K.addEventListener("input",()=>{a=Math.max(.2,Number(K.value)||1.5),k.value=String(a),_t.textContent=`r = ${a.toFixed(2)} dm`,gt(),ot()}),k.addEventListener("input",()=>{a=Number(k.value),K.value=String(a),_t.textContent=`r = ${a.toFixed(2)} dm`,gt(),ot()}),Z.addEventListener("input",()=>{p=Math.min(e,Math.max(.5,Number(Z.value)||3)),gt(),ot()}),V.addEventListener("input",()=>{y=Math.min(.95,Math.max(.1,Number(V.value)||.65)),gt(),ot()});function Nt(){const n=R.getBoundingClientRect();n.width>10&&n.height>10&&(Gt.setSize(n.width,n.height,!1),Rt.aspect=n.width/n.height,Rt.updateProjectionMatrix());const t=B.getBoundingClientRect(),r=window.devicePixelRatio||1;if(t.width>10&&t.height>10){A.width=t.width*r,A.height=(t.height-40)*r,A.style.width=`${t.width}px`,A.style.height=`${t.height-40}px`;const h=A.getContext("2d");h&&h.scale(r,r),X==="graph"?ot():bn()}}let Jn=0;function te(){Tt.update(),Gt.render(At,Rt),Jn=requestAnimationFrame(te)}return xn(),gt(),ot(),te(),window.addEventListener("resize",Nt),new ResizeObserver(Nt).observe(P),{root:i,resize:Nt,show(){requestAnimationFrame(()=>{Nt(),jn()})},dispose(){cancelAnimationFrame(Jn),cancelAnimationFrame(M),window.removeEventListener("resize",Nt)}}}let U="water",cn=null,on=null,rn=null,hn=null,Gn=null,Nn=null,we=[];function Fn(i){U=i,!(!cn||!on||!rn||!hn)&&(cn.hidden=U!=="water",on.hidden=U!=="archimedes",rn.hidden=U!=="napkin",hn.hidden=U!=="kinematics",we.forEach(c=>c.classList.toggle("on",c.dataset.tab===U)),U==="water"?Gn?.show():U==="archimedes"&&Nn?.show())}const he={id:"realmath",name:"Toán Thực tế 3D",glyph:"🌍",color:"#0284c7",desc:"Thế giới mô phỏng Toán Thực tế 3D trực quan: Tốc độ nước dâng (Related Rates), Thả khối cầu Archimedes, Cắt gọt Napkin Ring & Ungula, Động học xe chạy.",mount(i){const c=l("div","unified-app realmath-unified"),e=l("div","subapp-bar realmath-bar"),s=l("button","subapp-btn"+(U==="water"?" on":""),`
      <span class="s-ico">💧</span>
      <span class="s-txt">1. Tốc độ nước dâng</span>
      <span class="s-badge">3D & Đồ thị h(t) thời gian thực</span>
    `);s.dataset.tab="water",s.addEventListener("click",()=>Fn("water"));const a=l("button","subapp-btn"+(U==="archimedes"?" on":""),`
      <span class="s-ico">🏀</span>
      <span class="s-txt">2. Thả khối cầu (Archimedes)</span>
      <span class="s-badge">Nước trào & Cực trị thể tích</span>
    `);a.dataset.tab="archimedes",a.addEventListener("click",()=>Fn("archimedes"));const d=l("button","subapp-btn"+(U==="napkin"?" on":""),`
      <span class="s-ico">🔩</span>
      <span class="s-txt">3. Khoan cắt Napkin Ring</span>
      <span class="s-badge">Móng ngựa Ungula & Steinmetz</span>
    `);d.dataset.tab="napkin",d.addEventListener("click",()=>Fn("napkin"));const p=l("button","subapp-btn"+(U==="kinematics"?" on":""),`
      <span class="s-ico">🚗</span>
      <span class="s-txt">4. Động học & Xe chạy</span>
      <span class="s-badge">Vận tốc v(t), Quãng đường s = ∫v dt</span>
    `);p.dataset.tab="kinematics",p.addEventListener("click",()=>Fn("kinematics")),we=[s,a,d,p],e.append(s,a,d,p),c.appendChild(e),cn=l("div","subapp-view rm-view-water"),on=l("div","subapp-view rm-view-archimedes"),rn=l("div","subapp-view rm-view-preview"),hn=l("div","subapp-view rm-view-preview"),cn.hidden=U!=="water",on.hidden=U!=="archimedes",rn.hidden=U!=="napkin",hn.hidden=U!=="kinematics",Gn=qe(),cn.appendChild(Gn.root),Nn=Oe(),on.appendChild(Nn.root),rn.innerHTML=`
      <div class="rm-preview-container">
        <div class="rm-preview-card">
          <div class="rm-preview-badge">MODULE 3 • KẾ HOẠCH BÀI TOÁN THỰC TẾ</div>
          <h2>🔩 Khoan Cắt Khối Tròn Xoay (Napkin Ring, Móng Ngựa Ungula & Steinmetz)</h2>
          <p class="rm-preview-lead">Khám phá các nghịch lý hình học và bài toán tích phân vi phân không gian kỳ thú:</p>
          <div class="rm-preview-grid">
            <div class="rm-feature-item">
              <span class="feat-ico">💍</span>
              <h4>Nghịch lý Napkin Ring (Chiếc nhẫn khăn ăn)</h4>
              <p>Khoan một lỗ hình trụ xuyên tâm quả cầu có chiều cao $h$. Thể tích chiếc nhẫn còn lại luôn bằng $V = \\frac{\\pi}{6} h^3$, hoàn toàn KHÔNG phụ thuộc vào bán kính $R$ của quả cầu ban đầu!</p>
            </div>
            <div class="rm-feature-item">
              <span class="feat-ico">🐎</span>
              <h4>Móng ngựa trụ (Ungula of Archimedes)</h4>
              <p>Cắt khối trụ bằng một mặt phẳng đi qua đường kính đáy và nghiêng góc $\\alpha$. Archimedes đã tính ra thể tích bằng phương pháp tích phân tiền thân $V = \\frac{2}{3} r^3 \\tan\\alpha$.</p>
            </div>
            <div class="rm-feature-item">
              <span class="feat-ico">🏛️</span>
              <h4>Khối Steinmetz (Giao 2 hình trụ)</h4>
              <p>Giao của hai hình trụ cùng bán kính $r$ đặt vuông góc nhau. Thể tích $V = \\frac{16}{3} r^3$, mô phỏng mái vòm kiến trúc Gothic nổi tiếng.</p>
            </div>
          </div>
          <div class="rm-preview-footer">
            <span class="rm-tag">Khung kiến thức: Tích phân ứng dụng tính thể tích bằng phương pháp lát cắt $V = \\int S(x) dx$</span>
          </div>
        </div>
      </div>
    `,hn.innerHTML=`
      <div class="rm-preview-container">
        <div class="rm-preview-card">
          <div class="rm-preview-badge">MODULE 4 • KẾ HOẠCH BÀI TOÁN THỰC TẾ</div>
          <h2>🚗 Mô Hình Chuyển Động & Động Học (Kinematics & Tích Phân Quãng Đường)</h2>
          <p class="rm-preview-lead">Trực quan hoá mối quan hệ vi tích phân giữa Gia tốc $a(t)$, Vận tốc $v(t)$ và Quãng đường $s(t)$:</p>
          <div class="rm-preview-grid">
            <div class="rm-feature-item">
              <span class="feat-ico">🏎️</span>
              <h4>Xe phanh gấp tránh chướng ngại vật</h4>
              <p>Ô tô đang chạy với vận tốc $v_0$ thì phát hiện chướng ngại vật cách $d$ mét và đạp phanh với gia tốc $a(t) = -k t$. Mô phỏng xe trượt và đồ thị $v(t)$, diện tích dưới đường cong là quãng đường phanh.</p>
            </div>
            <div class="rm-feature-item">
              <span class="feat-ico">🏁</span>
              <h4>Hai xe đuổi nhau / Chuyển động đa giai đoạn</h4>
              <p>Xe 1 tăng tốc đều, xe 2 chuyển động thẳng đều sau $t_0$ giây. Tìm thời điểm và vị trí hai xe gặp nhau thông qua giao điểm của tích phân diện tích.</p>
            </div>
            <div class="rm-feature-item">
              <span class="feat-ico">📊</span>
              <h4>Đồ thị động lực học quét diện tích thời gian thực</h4>
              <p>Xe chạy trên đường băng 3D song hành cùng đồ thị $v-t$ tô màu diện tích quét $\\int_{0}^{t} v(\\tau) d\\tau = s(t)$.</p>
            </div>
          </div>
          <div class="rm-preview-footer">
            <span class="rm-tag">Khung kiến thức: Ứng dụng tích phân trong Vật lý & Động học (Toán 12)</span>
          </div>
        </div>
      </div>
    `,c.append(cn,on,rn,hn),i.appendChild(c)},show(){U==="water"?Gn?.show():U==="archimedes"&&Nn?.show()}},le=document.getElementById("work");le&&(he.mount(le),he.show?.());const En=document.getElementById("themebtn");if(En){let i=localStorage.getItem("theme")||"dark";document.documentElement.dataset.theme=i,En.innerHTML=i==="light"?qn("sun"):qn("moon"),En.addEventListener("click",()=>{i=document.documentElement.dataset.theme==="light"?"dark":"light",document.documentElement.dataset.theme=i,localStorage.setItem("theme",i),En.innerHTML=i==="light"?qn("sun"):qn("moon"),window.dispatchEvent(new Event("themechange"))})}
