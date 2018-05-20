/*eslint-disable*/

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

// 静态资源预先填充
workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

const bookCache = 'book'
const readCache = 'read'
const imageCache = 'image'


// 更新立即激活
self.addEventListener('install', function (event) {
  self.skipWaiting()
})

self.addEventListener('activate', function (event) {
  event.waitUntil(clients.claim());
})

workbox.routing.registerRoute(
  /\/api\/book/,
  workbox.strategies.networkFirst({
    cacheName: bookCache
  })
)

workbox.routing.registerRoute(
  /\/api\/read/,
  workbox.strategies.cacheFirst({
    cacheName: bookCache,
  })
);

workbox.routing.registerRoute(
  /\/api\/image/,
  workbox.strategies.cacheFirst({
    cacheName: imageCache,
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 7 * 24 * 60 * 60,
      })
    ],
  })
);
