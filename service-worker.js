/* AYUSOLUTION V13 — cache seguro e leve para redes móveis */
const VERSION = 'ayusolution-v13-mobile-metrics-1';
const SHELL_CACHE = VERSION + '-shell';
const ASSETS_CACHE = VERSION + '-assets';
const PRECACHE = ['/offline.html', '/index.html', '/assets/css/site-v13.css?v=20261017-mobile1', '/assets/js/site-v13.js'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(SHELL_CACHE).then(cache => cache.addAll(PRECACHE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(key => key.startsWith('ayusolution-') && ![SHELL_CACHE, ASSETS_CACHE].includes(key))
        .map(key => caches.delete(key))
  )).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Crucial: never intercept/cache AdSense ads, analytics, external fonts or third parties.
  if (url.origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    event.respondWith(fetch(req).then(response => {
      if (response.ok && url.pathname !== '/offline.html') {
        const copy = response.clone();
        event.waitUntil(caches.open(ASSETS_CACHE).then(cache => cache.put(req, copy)));
      }
      return response;
    }).catch(async () => {
      const cached = await caches.match(req);
      if (cached) return cached;
      return (url.pathname === '/' || url.pathname === '/index.html')
        ? (await caches.match('/index.html') || await caches.match('/offline.html'))
        : await caches.match('/offline.html');
    }));
    return;
  }
  const staticAsset = url.pathname.startsWith('/assets/') || url.pathname === '/manifest.webmanifest';
  if (!staticAsset) return;
  event.respondWith(caches.match(req).then(async cached => {
    const update = fetch(req).then(response => {
      if (response.ok) {
        const copy = response.clone();
        event.waitUntil(caches.open(ASSETS_CACHE).then(cache => cache.put(req, copy)));
      }
      return response;
    }).catch(() => cached);
    return cached || update;
  }));
});
self.addEventListener('message', event => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});
