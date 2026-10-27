/* QSL Apps - service worker (generado en postbuild por scripts/generate-sw.mjs; sin Workbox).
 * Estrategias:
 *   - precache del shell (HTML de cada ruta exportada, _next/static, iconos, manifest), versionado por hash;
 *   - _next/static/*      : cache-first (los nombres llevan hash, son inmutables);
 *   - navegación (HTML)   : network-first con tiempo límite y respaldo en caché (offline a cualquier ruta exportada);
 *   - data/*              : stale-while-revalidate;
 *   - resto del mismo ámbito: stale-while-revalidate (RSC .txt: network-first).
 * El ámbito se deduce de self.registration.scope, así funciona con cualquier basePath.
 */
const VERSION = "af4d014507d9";
const PRECACHE = [{"url":"","rev":"1d7fb600d4"},{"url":"404.html","rev":"1b4ff93d34"},{"url":"404/","rev":"1b4ff93d34"},{"url":"_next/static/chunks/112-6800d1fd9ce10b05.js","rev":"f651581dc7"},{"url":"_next/static/chunks/119.043e42776c4df4bf.js","rev":"71c97593e6"},{"url":"_next/static/chunks/163-48098e8d68e714a0.js","rev":"9b532c0190"},{"url":"_next/static/chunks/214-e133eb771d5df724.js","rev":"7e19465bee"},{"url":"_next/static/chunks/274-477694079bbb86a0.js","rev":"8432765ae2"},{"url":"_next/static/chunks/336-9ba1582b8dc17907.js","rev":"ac09f63d25"},{"url":"_next/static/chunks/4bd1b696-01cf5ad76f6822d1.js","rev":"37241cd318"},{"url":"_next/static/chunks/684-8a0716398d9507d0.js","rev":"644ee6de77"},{"url":"_next/static/chunks/747-817a0846519768d3.js","rev":"d1fcd8885f"},{"url":"_next/static/chunks/778-bd4f9840efff9d88.js","rev":"28ca75c80c"},{"url":"_next/static/chunks/862.675e49e5073165ff.js","rev":"726fba98a3"},{"url":"_next/static/chunks/89-8cc85d24008fde1b.js","rev":"b734271a64"},{"url":"_next/static/chunks/891-662115d552e4d8c8.js","rev":"d847fdfca4"},{"url":"_next/static/chunks/903-674d90902d420026.js","rev":"dc083a57e9"},{"url":"_next/static/chunks/931-fadbd934ed9a3802.js","rev":"5c212e7c26"},{"url":"_next/static/chunks/app/_not-found/page-b53cefc8a86fc28c.js","rev":"d990a17ab3"},{"url":"_next/static/chunks/app/calculadora/page-5c5a7600da675f84.js","rev":"9a231b0164"},{"url":"_next/static/chunks/app/concurso/page-69e080d5a6b633e0.js","rev":"57e99c5e05"},{"url":"_next/static/chunks/app/confirmaciones/page-e77c9a0b3116804d.js","rev":"930f93cb88"},{"url":"_next/static/chunks/app/control-de-redes/page-3ed7490cfaef7cb8.js","rev":"6af4afef8a"},{"url":"_next/static/chunks/app/diplomas/page-7337e18a902a011b.js","rev":"2be8997b52"},{"url":"_next/static/chunks/app/entrenador-morse/page-741be56e07012412.js","rev":"c5d8234b31"},{"url":"_next/static/chunks/app/examen/page-73a0a09a18dc4d13.js","rev":"12c7a5b39c"},{"url":"_next/static/chunks/app/layout-7033f1d44ef0d5ee.js","rev":"25b945ea21"},{"url":"_next/static/chunks/app/libreta/page-d2725fbe88bbf3e8.js","rev":"1de92fc2a2"},{"url":"_next/static/chunks/app/logbook/page-c8ccc22c53f3c7e9.js","rev":"d346739810"},{"url":"_next/static/chunks/app/page-d0a40456a35ed0d1.js","rev":"82c0fc1f42"},{"url":"_next/static/chunks/app/propagacion/page-20f3df33d9c01e44.js","rev":"6e2a9c13b8"},{"url":"_next/static/chunks/app/qr-generator/page-7281db96f4e797c0.js","rev":"aa662be72b"},{"url":"_next/static/chunks/app/qsl-creator/page-c525ff36952cd691.js","rev":"9082205a55"},{"url":"_next/static/chunks/app/qsl-generator/page-625c25b785ef6737.js","rev":"7846d44841"},{"url":"_next/static/chunks/app/station-manager/page-4312e979726e0fda.js","rev":"ea4f15b0d3"},{"url":"_next/static/chunks/app/utilidades/page-e2da86b58580c1b9.js","rev":"c106a94a22"},{"url":"_next/static/chunks/framework-337bc64e443a9800.js","rev":"851aea5c8b"},{"url":"_next/static/chunks/main-9c985642a55d6999.js","rev":"3a7f80e37e"},{"url":"_next/static/chunks/main-app-007e3ec88113e898.js","rev":"d90748309c"},{"url":"_next/static/chunks/pages/_app-964dd818df32c3a5.js","rev":"82e0f28a3c"},{"url":"_next/static/chunks/pages/_error-dd88a916c510c29a.js","rev":"1f45800986"},{"url":"_next/static/chunks/polyfills-42372ed130431b0a.js","rev":"0973c1d64c"},{"url":"_next/static/chunks/webpack-0642101f4cb710a4.js","rev":"3b72b12422"},{"url":"_next/static/css/34e3235c0fcd5cc3.css","rev":"f4eaf2505a"},{"url":"_next/static/css/a4d0935acbcd1d62.css","rev":"5db8f53927"},{"url":"_next/static/media/013b72fa676f92e0-s.woff2","rev":"e27f657e38"},{"url":"_next/static/media/22a5144ee8d83bca-s.p.woff2","rev":"9b6f5ff45b"},{"url":"_next/static/media/2b5b02fc7e511755-s.woff2","rev":"745994b5cd"},{"url":"_next/static/media/65f03d54ccadf4a8-s.woff2","rev":"d67e4a94ba"},{"url":"_next/static/media/7d4881bb7e1bf84d-s.p.woff2","rev":"5f3d6ad60f"},{"url":"_next/static/media/9766a7e9e2e0ad5a-s.woff2","rev":"6129fc8571"},{"url":"_next/static/media/aa016aab0e6d1295-s.woff2","rev":"58a6b173d5"},{"url":"_next/static/media/b66cf8e69499582a-s.woff2","rev":"f689f638f2"},{"url":"_next/static/media/b9408752a0c24fb9-s.woff2","rev":"75b3bedbeb"},{"url":"_next/static/media/e038a29029a234f2-s.woff2","rev":"16e1d48b6d"},{"url":"_next/static/media/f639721981034f88-s.woff2","rev":"b7a545bbb0"},{"url":"_next/static/oZVgQFHeATitmvWYITmBZ/_buildManifest.js","rev":"705cc51275"},{"url":"_next/static/oZVgQFHeATitmvWYITmBZ/_ssgManifest.js","rev":"678f6ce2cb"},{"url":"calculadora/","rev":"16e53eac57"},{"url":"calculadora/index.txt","rev":"3d0700ab71"},{"url":"concurso/","rev":"8317fd5717"},{"url":"concurso/index.txt","rev":"0c02bb89ac"},{"url":"confirmaciones/","rev":"a5d3a6cac8"},{"url":"confirmaciones/index.txt","rev":"5c095ef982"},{"url":"control-de-redes/","rev":"cd304b1d5e"},{"url":"control-de-redes/index.txt","rev":"e4a12f86c4"},{"url":"diplomas/","rev":"28e9acfe64"},{"url":"diplomas/index.txt","rev":"199cb49cdd"},{"url":"entrenador-morse/","rev":"4456f28ae6"},{"url":"entrenador-morse/index.txt","rev":"7134a1bf7e"},{"url":"examen/","rev":"7157f4ef42"},{"url":"examen/index.txt","rev":"8467017bc6"},{"url":"favicon.ico","rev":"2b8ad2d334"},{"url":"icons/apple-touch-icon.png","rev":"ef62da6559"},{"url":"icons/icon-192.png","rev":"931c96c6d6"},{"url":"icons/icon-512.png","rev":"1f6fded083"},{"url":"icons/icon-maskable-192.png","rev":"0190a64913"},{"url":"icons/icon-maskable-512.png","rev":"b9c813cd3f"},{"url":"index.txt","rev":"c983c88646"},{"url":"libreta/","rev":"b2a70b946f"},{"url":"libreta/index.txt","rev":"bb68c2a461"},{"url":"logbook/","rev":"dd5e45ed05"},{"url":"logbook/index.txt","rev":"5ff9167256"},{"url":"manifest.webmanifest","rev":"12b3fb7c1e"},{"url":"placeholder-template.png","rev":"36a9e7f1c9"},{"url":"propagacion/","rev":"cb1a7289f7"},{"url":"propagacion/index.txt","rev":"0a52be8977"},{"url":"qr-generator/","rev":"7430d65caf"},{"url":"qr-generator/index.txt","rev":"5ee455e921"},{"url":"qsl-creator/","rev":"b93b9eafa7"},{"url":"qsl-creator/index.txt","rev":"0f7a5ba9ba"},{"url":"qsl-generator/","rev":"6f8150ae1a"},{"url":"qsl-generator/index.txt","rev":"fb5caac491"},{"url":"station-manager/","rev":"69c70df7c3"},{"url":"station-manager/index.txt","rev":"7b1b8d9f3e"},{"url":"utilidades/","rev":"190073975a"},{"url":"utilidades/index.txt","rev":"39719c32ba"}];
const PRECACHE_NAME = 'qsl-precache-' + VERSION;
const RUNTIME_NAME = 'qsl-runtime-v1';
const NAV_TIMEOUT_MS = 3500;
const SCOPE_URL = new URL(self.registration.scope);
const toAbs = (p) => new URL(p, SCOPE_URL).href;

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(PRECACHE_NAME);
    // Todo o nada: si falta algo, la instalación falla y se reintenta (no queda un shell incompleto).
    await Promise.all(PRECACHE.map(async (entry) => {
      const req = new Request(toAbs(entry.url), { cache: 'reload' });
      const res = await fetch(req);
      if (!res.ok) throw new Error('precache ' + entry.url + ' -> ' + res.status);
      await cache.put(req, res);
    }));
    // Sin skipWaiting automático: la página avisa «Hay una versión nueva» y pide SKIP_WAITING.
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names
      .filter((n) => n.startsWith('qsl-') && n !== PRECACHE_NAME && n !== RUNTIME_NAME)
      .map((n) => caches.delete(n)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', (event) => {
  const data = event.data || {};
  if (data.type === 'SKIP_WAITING') self.skipWaiting();
  else if (data.type === 'GET_VERSION' && event.source) event.source.postMessage({ type: 'VERSION', version: VERSION });
});

function classify(request, rel) {
  if (request.mode === 'navigate') return 'navigate';
  const accept = request.headers && request.headers.get ? request.headers.get('accept') || '' : '';
  if (accept.indexOf('text/html') !== -1) return 'navigate';
  if (rel.indexOf('_next/static/') === 0) return 'static';
  if (rel.indexOf('data/') === 0) return 'data';
  if (/\.txt$/.test(rel)) return 'rsc';
  return 'other';
}

async function matchAny(request, extraUrls) {
  const pre = await caches.open(PRECACHE_NAME);
  const run = await caches.open(RUNTIME_NAME);
  const candidates = [request].concat((extraUrls || []).map((u) => new Request(u)));
  for (const c of candidates) {
    const hit = (await pre.match(c, { ignoreSearch: true })) || (await run.match(c, { ignoreSearch: true }));
    if (hit) return hit;
  }
  return undefined;
}

async function putRuntime(request, response) {
  if (!response || !response.ok) return;
  try { await (await caches.open(RUNTIME_NAME)).put(request, response); } catch (e) { /* cuota llena: se ignora */ }
}

function withTimeout(promise, ms) {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error('timeout')), ms);
    promise.then((v) => { clearTimeout(t); resolve(v); }, (e) => { clearTimeout(t); reject(e); });
  });
}

async function networkFirst(request, fallbackUrls, event) {
  const net = fetch(request);
  // La respuesta se guarda aunque ya hayamos desistido por tiempo (así la próxima vez está fresca).
  const saved = net.then((res) => { putRuntime(request, res.clone()); return res; }).catch(() => undefined);
  if (event && event.waitUntil) event.waitUntil(saved);
  try {
    return await withTimeout(net, NAV_TIMEOUT_MS);
  } catch (err) {
    const hit = await matchAny(request, fallbackUrls);
    if (hit) return hit;
    // Último recurso: seguir esperando a la red, si no hay nada guardado.
    try { return await net; } catch (e2) { return undefined; }
  }
}

async function cacheFirst(request) {
  const hit = await matchAny(request);
  if (hit) return hit;
  const res = await fetch(request);
  putRuntime(request, res.clone());
  return res;
}

async function staleWhileRevalidate(request, event) {
  const hit = await matchAny(request);
  const update = fetch(request).then((res) => { putRuntime(request, res.clone()); return res; }).catch(() => undefined);
  if (hit) {
    if (event && event.waitUntil) event.waitUntil(update);
    return hit;
  }
  return (await update) || undefined;
}

async function handle(event) {
  const request = event.request;
  const url = new URL(request.url);
  const rel = url.pathname.slice(SCOPE_URL.pathname.length);
  const kind = classify(request, rel);
  let res;
  try {
    if (kind === 'static') res = await cacheFirst(request);
    else if (kind === 'navigate') {
      const slash = rel === '' || rel.endsWith('/') ? rel : rel + '/';
      res = await networkFirst(request, [toAbs(slash), toAbs(rel), toAbs(slash + 'index.html')], event);
      if (!res) res = (await matchAny(new Request(toAbs('404.html')))) || (await matchAny(new Request(toAbs(''))));
    } else if (kind === 'rsc') res = await networkFirst(request, [], event);
    else res = await staleWhileRevalidate(request, event);
  } catch (e) {
    res = undefined;
  }
  return res || new Response('Sin conexión / Offline', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== SCOPE_URL.origin || url.href.indexOf(SCOPE_URL.href) !== 0) return;
  if (url.pathname === SCOPE_URL.pathname + 'sw.js') return; // el propio SW siempre va a la red
  event.respondWith(handle(event));
});
