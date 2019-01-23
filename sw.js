// Install Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('static-v1').then(function(cache) {
      return cache.addAll([
        '/',
        'index.html',
        'anfahrt.html',
        'buchen.html',
        'datenschutz.html',
        'eindruecke.html',
        'impressum.html',
        'preise.html',
        'css/styles.css',
        'img/anfahrt_desktop.jpg',
        'img/anfahrt_tablet.jpg',
        'img/anfahrt_mobil.jpg',
        'img/datenschutz_desktop.jpg',
        'img/datenschtz_tablet.jpg',
        'img/datenschutz_mobil.jpg',
        'img/einzel_desktop.jpg',
        'img/einzel_tablet.jpg',
        'img/einzel_mobil.jpg',
        'img/fruehstueck_desktop.jpg',
        'img/fruehstueck_tablet.jpg',
        'img/fruehstueck_mobil.jpg',
        'img/impressum_desktop.jpg',
        'img/impressum_tablet.jpg',
        'img/impressum_mobil.jpg',
        'img/preise_desktop.jpg',
        'img/preise_tablet.jpg',
        'img/preise_mobil.jpg',
        'img/willkommen_desktop.jpg',
        'img/willkommen_tablet.jpg',
        'img/willkommen_mobil.jpg',
        'img/10.jpg',
        'js/app.js',
        'js/data.js'
      ]);
    })
  );
});

// Service Worker should return requests with cache, otherwise fetch data from network
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || event.default();
    }).catch(function() {
      return caches.match('index.html');
    })
  );
});

// Update Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('static-v2').then(function(cache) {
      return cache.addAll([
        '/',
        'index.html',
        'anfahrt.html',
        'buchen.html',
        'datenschutz.html',
        'eindruecke.html',
        'impressum.html',
        'preise.html',
        'css/styles.css',
        'img/anfahrt_desktop.jpg',
        'img/anfahrt_tablet.jpg',
        'img/anfahrt_mobil.jpg',
        'img/datenschutz_desktop.jpg',
        'img/datenschtz_tablet.jpg',
        'img/datenschutz_mobil.jpg',
        'img/einzel_desktop.jpg',
        'img/einzel_tablet.jpg',
        'img/einzel_mobil.jpg',
        'img/fruehstueck_desktop.jpg',
        'img/fruehstueck_tablet.jpg',
        'img/fruehstueck_mobil.jpg',
        'img/impressum_desktop.jpg',
        'img/impressum_tablet.jpg',
        'img/impressum_mobil.jpg',
        'img/preise_desktop.jpg',
        'img/preise_tablet.jpg',
        'img/preise_mobil.jpg',
        'img/willkommen_desktop.jpg',
        'img/willkommen_tablet.jpg',
        'img/willkommen_mobil.jpg',
        'img/10.jpg',
        'js/app.js',
        'js/data.js'
      ]);
    })
  );
});

// Check for old Service Workers and delete them
self.addEventListener('activate', function(event) {
  var cacheWhitelist = ['static-v2'];

  event.waitUntil(
    caches.keys(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) == -1) {
            return caches.delete(cacheName);
          }
        })
      )
    })
  );
});