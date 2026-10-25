// ============================================================================
// ROY'S ATELIER STUDIO — OFFLINE SERVICE WORKER (v1.1 - Scope Aware)
// Complete offline standalone execution for desktop PWA & spatial instruments.
// Handles app shell, Vite bundles, MediaPipe WASM/assets, and typography.
// ============================================================================

const CACHE_NAME = 'roys-atelier-studio-v1.1';
const RUNTIME_CACHE = 'roys-atelier-runtime-v1.1';

const PRECACHE_LOCAL_PATHS = [
  '',
  'index.html',
  'manifest.json',
  'favicon.ico',
  'favicon.svg',
  'favicon-16.png',
  'favicon-32.png',
  'favicon-48.png',
  'icon-192.png',
  'icon-512.png',
  'apple-touch-icon.png',
  'og-preview.png',
  'icons.svg',
];

const EXTERNAL_ASSETS = [
  'https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js',
  'https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js'
];

// Install: precache critical assets dynamically matching registration scope
self.addEventListener('install', (event) => {
  const scope = self.registration ? self.registration.scope : '/atelier/';
  const fullList = [
    ...PRECACHE_LOCAL_PATHS.map((p) => new URL(p, scope).toString()),
    ...EXTERNAL_ASSETS
  ];

  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return Promise.allSettled(
          fullList.map((url) => {
            const req = new Request(url, {
              mode: url.startsWith('http') && !url.startsWith(self.location.origin) ? 'cors' : 'same-origin'
            });
            return cache.add(req).catch((err) => {
              console.warn('[SW] Pre-caching asset failed (ignoring):', url, err);
            });
          })
        );
      })
      .then(() => self.skipWaiting())
  );
});

// Activate: purge outdated caches from earlier versions
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_NAME && name !== RUNTIME_CACHE)
            .map((name) => {
              console.info('[SW] Purging outdated cache:', name);
              return caches.delete(name);
            })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch: offline-first strategy with dynamic runtime caching
self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Ignore non-GET and non-HTTP(S) requests (such as POST to Netlify serverless functions)
  if (req.method !== 'GET' || !req.url.startsWith('http')) {
    return;
  }

  const scope = self.registration ? self.registration.scope : '/atelier/';

  // Handle SPA navigation requests: serve cached index.html if offline
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const copy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          }
          return networkResponse;
        })
        .catch(async () => {
          const indexUrl = new URL('index.html', scope).toString();
          const cached = (await caches.match(indexUrl)) || (await caches.match(scope));
          if (cached) return cached;
          return caches.match(req);
        })
    );
    return;
  }

  const url = new URL(req.url);

  // 1. External MediaPipe & CDN assets: Cache-First with runtime fallback
  if (
    url.hostname.includes('cdn.jsdelivr.net') ||
    url.hostname.includes('fonts.googleapis.com') ||
    url.hostname.includes('fonts.gstatic.com')
  ) {
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const copy = networkResponse.clone();
              caches.open(RUNTIME_CACHE).then((cache) => cache.put(req, copy));
            }
            return networkResponse;
          })
          .catch((err) => {
            console.warn('[SW] Offline CDN fetch failed:', req.url, err);
            return cached || Response.error();
          });
      })
    );
    return;
  }

  // 2. Same-origin assets: Cache-First with Stale-While-Revalidate
  event.respondWith(
    caches.match(req).then((cached) => {
      const fetchPromise = fetch(req)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const copy = networkResponse.clone();
            caches.open(RUNTIME_CACHE).then((cache) => cache.put(req, copy));
          }
          return networkResponse;
        })
        .catch((err) => {
          if (!cached) {
            console.warn('[SW] Offline asset unavailable:', req.url, err);
          }
          return cached;
        });

      return cached || fetchPromise;
    })
  );
});
