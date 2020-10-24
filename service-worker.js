importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"
);

const { registerRoute } = workbox.routing;
const { CacheFirst } = workbox.strategies;
const { StaleWhileRevalidate } = workbox.strategies;
const { CacheableResponsePlugin } = workbox.cacheableResponse;
const { precacheAndRoute } = workbox.precaching;
const { ExpirationPlugin } = workbox.expiration;

if (workbox) {
  console.log(`Workbox berhasil dimuat`);
  precacheAndRoute([
    { url: "/", revision: "1" },
    { url: "/nav.html", revision: "1" },
    { url: "/index.html", revision: "1" },
    { url: "/css/materialize.min.css", revision: "1" },
    { url: "/css/global.css", revision: "1" },
    { url: "/js/materialize.min.js", revision: "1" },
    { url: "/js/nav.js", revision: "1" },
    { url: "/js/api.js", revision: "1" },
    { url: "/js/idb.js", revision: "1" },
    { url: "/manifest.json", revision: "1" },
    { url: "/icon.png", revision: "1" },
    {
      url:
        "https://fonts.gstatic.com/s/materialicons/v55/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2",
      revision: "1",
    },
  ]);

  registerRoute(
    ({ request }) => request.destination === "image",
    new CacheFirst({
      cacheName: "images-cache",
      plugins: [
        new CacheableResponsePlugin({
          statuses: [0, 200],
        }),
        new ExpirationPlugin({
          maxEntries: 100,
          maxAgeSeconds: 30 * 24 * 60 * 60,
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    new RegExp("https://api.football-data.org/v2/"),
    new StaleWhileRevalidate()
  );

  // Menyimpan cache dari CSS Google Fonts
  workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new StaleWhileRevalidate({
      cacheName: "google-fonts-stylesheets",
    })
  );

  // Caching Google Fonts
  registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new CacheFirst({
      cacheName: "google-fonts-webfonts",
      plugins: [
        new CacheableResponsePlugin({
          statuses: [0, 200],
        }),
        new ExpirationPlugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    /\.(?:js|css)$/,
    new StaleWhileRevalidate({
      cacheName: "static-resources",
    })
  );
} else {
  console.log(`Workbox gagal dimuat`);
}

//Response Push Notification
self.addEventListener("push", (event) => {
  var body;

  console.log(event);

  if (event.data) {
    body = event.data.text();
  } else {
    body = "This is push message";
  }

  var options = {
    body: body,
    icon: "/img/ball.png",
    vibrate: [500, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
  };

  event.waitUntil(
    self.registration.showNotification("Push Notification", options)
  );
});
