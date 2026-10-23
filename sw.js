// Tự sinh bởi scripts/make-sw.mjs — đừng sửa tay.
const VERSION = '20261023_v2_emulator';
const CACHE = 'hungcal-' + VERSION;
const ASSETS = ["./","./assets/BufferGeometryUtils-DqMSSaab.js","./assets/KaTeX_AMS-Regular-BQhdFMY1.woff2","./assets/KaTeX_AMS-Regular-DMm9YOAa.woff","./assets/KaTeX_AMS-Regular-DRggAlZN.ttf","./assets/KaTeX_Caligraphic-Bold-ATXxdsX0.ttf","./assets/KaTeX_Caligraphic-Bold-BEiXGLvX.woff","./assets/KaTeX_Caligraphic-Bold-Dq_IR9rO.woff2","./assets/KaTeX_Caligraphic-Regular-CTRA-rTL.woff","./assets/KaTeX_Caligraphic-Regular-Di6jR-x-.woff2","./assets/KaTeX_Caligraphic-Regular-wX97UBjC.ttf","./assets/KaTeX_Fraktur-Bold-BdnERNNW.ttf","./assets/KaTeX_Fraktur-Bold-BsDP51OF.woff","./assets/KaTeX_Fraktur-Bold-CL6g_b3V.woff2","./assets/KaTeX_Fraktur-Regular-CB_wures.ttf","./assets/KaTeX_Fraktur-Regular-CTYiF6lA.woff2","./assets/KaTeX_Fraktur-Regular-Dxdc4cR9.woff","./assets/KaTeX_Main-Bold-Cx986IdX.woff2","./assets/KaTeX_Main-Bold-Jm3AIy58.woff","./assets/KaTeX_Main-Bold-waoOVXN0.ttf","./assets/KaTeX_Main-BoldItalic-DxDJ3AOS.woff2","./assets/KaTeX_Main-BoldItalic-DzxPMmG6.ttf","./assets/KaTeX_Main-BoldItalic-SpSLRI95.woff","./assets/KaTeX_Main-Italic-3WenGoN9.ttf","./assets/KaTeX_Main-Italic-BMLOBm91.woff","./assets/KaTeX_Main-Italic-NWA7e6Wa.woff2","./assets/KaTeX_Main-Regular-B22Nviop.woff2","./assets/KaTeX_Main-Regular-Dr94JaBh.woff","./assets/KaTeX_Main-Regular-ypZvNtVU.ttf","./assets/KaTeX_Math-BoldItalic-B3XSjfu4.ttf","./assets/KaTeX_Math-BoldItalic-CZnvNsCZ.woff2","./assets/KaTeX_Math-BoldItalic-iY-2wyZ7.woff","./assets/KaTeX_Math-Italic-DA0__PXp.woff","./assets/KaTeX_Math-Italic-flOr_0UB.ttf","./assets/KaTeX_Math-Italic-t53AETM-.woff2","./assets/KaTeX_SansSerif-Bold-CFMepnvq.ttf","./assets/KaTeX_SansSerif-Bold-D1sUS0GD.woff2","./assets/KaTeX_SansSerif-Bold-DbIhKOiC.woff","./assets/KaTeX_SansSerif-Italic-C3H0VqGB.woff2","./assets/KaTeX_SansSerif-Italic-DN2j7dab.woff","./assets/KaTeX_SansSerif-Italic-YYjJ1zSn.ttf","./assets/KaTeX_SansSerif-Regular-BNo7hRIc.ttf","./assets/KaTeX_SansSerif-Regular-CS6fqUqJ.woff","./assets/KaTeX_SansSerif-Regular-DDBCnlJ7.woff2","./assets/KaTeX_Script-Regular-C5JkGWo-.ttf","./assets/KaTeX_Script-Regular-D3wIWfF6.woff2","./assets/KaTeX_Script-Regular-D5yQViql.woff","./assets/KaTeX_Size1-Regular-C195tn64.woff","./assets/KaTeX_Size1-Regular-Dbsnue_I.ttf","./assets/KaTeX_Size1-Regular-mCD8mA8B.woff2","./assets/KaTeX_Size2-Regular-B7gKUWhC.ttf","./assets/KaTeX_Size2-Regular-Dy4dx90m.woff2","./assets/KaTeX_Size2-Regular-oD1tc_U0.woff","./assets/KaTeX_Size3-Regular-CTq5MqoE.woff","./assets/KaTeX_Size3-Regular-DgpXs0kz.ttf","./assets/KaTeX_Size3-Regular-gV2CO0n9.woff2","./assets/KaTeX_Size4-Regular-BF-4gkZK.woff","./assets/KaTeX_Size4-Regular-DWFBv043.ttf","./assets/KaTeX_Size4-Regular-Dl5lxZxV.woff2","./assets/KaTeX_Typewriter-Regular-C0xS9mPB.woff","./assets/KaTeX_Typewriter-Regular-CO6r4hn1.woff2","./assets/KaTeX_Typewriter-Regular-D3Ib7_Hf.ttf","./assets/OrbitControls-CC1Q_oXb.js","./assets/OrbitControls-DMUBSaLC.css","./assets/__vite-browser-external-BIHI7g3E.js","./assets/docx-preview-bw4jluI6.js","./assets/index-Cs9OzAhw.js","./assets/ink-DTl8XHud.js","./assets/main-DSAFqZh2.css","./assets/main-QrBuoGVf.js","./assets/mtbt_core-DB4u7Cfa.wasm","./assets/numtheory-DtGe4Pl1.js","./assets/oxyz-BKIGzft8.js","./assets/param-vSoio7RZ.js","./assets/pdf-D4yMy14z.js","./assets/pdf.worker.min-DGf6LXVo.mjs","./assets/realmath-BuNFDGpb.js","./assets/shape3d-DMfz7Ckw.js","./assets/solids-C24TzALm.js","./assets/unfold-C-F2v-op.js","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./icons/maskable-512.png","./images/qr-donate.png","./index.html","./manifest.webmanifest","./mathjax/tex-svg.js","./realmath.html"];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await Promise.allSettled(
      ASSETS.map(async (u) => {
        try {
          const res = await fetch(u, { cache: 'no-cache' });
          if (res && res.ok) await c.put(u, res);
        } catch (_err) {}
      })
    );
  })());
});

self.addEventListener('message', (e) => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
  if (e.data === 'VERSION') e.source && e.source.postMessage({ version: VERSION });
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) {
      if (k.startsWith('hungcal-') && k !== CACHE) await caches.delete(k);
    }
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (e) => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url);
  if (u.origin !== location.origin) return;

  if (r.mode === 'navigate') {
    e.respondWith((async () => {
      try {
        const cached = (await caches.match(r, { ignoreSearch: true, ignoreVary: true }))
          || (await caches.match('./index.html', { ignoreVary: true }))
          || (await caches.match('./', { ignoreVary: true }))
          || (await caches.match('/casio/', { ignoreVary: true }))
          || (await caches.match('/casio/index.html', { ignoreVary: true }));

        if (cached && !navigator.onLine) return cached;

        const ctrl = new AbortController();
        const t = setTimeout(() => ctrl.abort(), 3000);
        try {
          const netRes = await fetch(r, { signal: ctrl.signal });
          clearTimeout(t);
          if (netRes && netRes.ok) {
            const copy = netRes.clone();
            caches.open(CACHE).then((c) => c.put(r, copy)).catch(() => {});
            return netRes;
          }
        } catch (_netErr) {
          clearTimeout(t);
        }

        if (cached) return cached;

        const anyIndex = (await caches.match('./index.html')) || (await caches.match('./')) || (await caches.match('/casio/'));
        if (anyIndex) return anyIndex;

        return new Response(
          '<!DOCTYPE html><html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Ngoại tuyến</title><style>body{font-family:system-ui,-apple-system,sans-serif;background:#0f172a;color:#f8fafc;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;padding:20px;box-sizing:border-box;text-align:center}.card{background:#1e293b;padding:32px;border-radius:16px;max-width:420px;border:1px solid #334155;box-shadow:0 10px 25px rgba(0,0,0,0.5)}h2{margin:0 0 12px;font-size:20px;color:#38bdf8}p{margin:0 0 20px;font-size:14px;color:#94a3b8;line-height:1.5}button{background:#38bdf8;color:#0f172a;border:none;padding:10px 22px;border-radius:8px;font-weight:600;font-size:14px;cursor:pointer}button:hover{background:#7dd3fc}</style></head><body><div class="card"><h2>📡 Đang ngoại tuyến hoặc kết nối gián đoạn</h2><p>Trang web chưa kịp lưu vào bộ nhớ máy hoặc mạng bị ngắt. Hãy thử tải lại khi có mạng.</p><button onclick="location.reload()">Tải lại trang</button></div></body></html>',
          { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
        );
      } catch (_fatal) {
        return new Response('<html><body>Đang ngoại tuyến. Hãy tải lại trang.</body></html>', {
          status: 200,
          headers: { 'Content-Type': 'text/html; charset=utf-8' }
        });
      }
    })());
    return;
  }

  e.respondWith((async () => {
    try {
      const cached = await caches.match(r, { ignoreSearch: true, ignoreVary: true });
      if (cached) return cached;
      const res = await fetch(r);
      if (res && res.ok) {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(r, copy)).catch(() => {});
      }
      return res;
    } catch (_err) {
      const fallback = await caches.match(r, { ignoreSearch: true, ignoreVary: true });
      if (fallback) return fallback;
      return new Response('', { status: 504, statusText: 'Offline / Gateway Timeout' });
    }
  })());
});
