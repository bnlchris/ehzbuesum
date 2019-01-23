// Install Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('static-v1').then(function(cache) {
      return cache.addAll([
        '/ehzbuesum/index.html',
        '/ehzbuesum/anfahrt.html',
        '/ehzbuesum/buchen.html',
        '/ehzbuesum/datenschutz.html',
        '/ehzbuesum/eindruecke.html',
        '/ehzbuesum/impressum.html',
        '/ehzbuesum/preise.html',
        '/ehzbuesum/css/styles.css',
        '/ehzbuesum/img/anfahrt_desktop.jpg',
        '/ehzbuesum/img/anfahrt_tablet.jpg',
        '/ehzbuesum/img/anfahrt_mobil.jpg',
        '/ehzbuesum/img/datenschutz_desktop.jpg',
        '/ehzbuesum/img/datenschtz_tablet.jpg',
        '/ehzbuesum/img/datenschutz_mobil.jpg',
        '/ehzbuesum/img/einzel_desktop.jpg',
        '/ehzbuesum/img/einzel_tablet.jpg',
        '/ehzbuesum/img/einzel_mobil.jpg',
        '/ehzbuesum/img/fruehstueck_desktop.jpg',
        '/ehzbuesum/img/fruehstueck_tablet.jpg',
        '/ehzbuesum/img/fruehstueck_mobil.jpg',
        '/ehzbuesum/img/impressum_desktop.jpg',
        '/ehzbuesum/img/impressum_tablet.jpg',
        '/ehzbuesum/img/impressum_mobil.jpg',
        '/ehzbuesum/img/preise_desktop.jpg',
        '/ehzbuesum/img/preise_tablet.jpg',
        '/ehzbuesum/img/preise_mobil.jpg',
        '/ehzbuesum/img/willkommen_desktop.jpg',
        '/ehzbuesum/img/willkommen_tablet.jpg',
        '/ehzbuesum/img/willkommen_mobil.jpg',
        '/ehzbuesum/img/10.jpg',
        '/ehzbuesum/js/app.js',
        '/ehzbuesum/js/data.js'
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
        '/ehzbuesum/index.html',
        '/ehzbuesum/anfahrt.html',
        '/ehzbuesum/buchen.html',
        '/ehzbuesum/datenschutz.html',
        '/ehzbuesum/eindruecke.html',
        '/ehzbuesum/impressum.html',
        '/ehzbuesum/preise.html',
        '/ehzbuesum/css/styles.css',
        '/ehzbuesum/img/anfahrt_desktop.jpg',
        '/ehzbuesum/img/anfahrt_tablet.jpg',
        '/ehzbuesum/img/anfahrt_mobil.jpg',
        '/ehzbuesum/img/datenschutz_desktop.jpg',
        '/ehzbuesum/img/datenschtz_tablet.jpg',
        '/ehzbuesum/img/datenschutz_mobil.jpg',
        '/ehzbuesum/img/einzel_desktop.jpg',
        '/ehzbuesum/img/einzel_tablet.jpg',
        '/ehzbuesum/img/einzel_mobil.jpg',
        '/ehzbuesum/img/fruehstueck_desktop.jpg',
        '/ehzbuesum/img/fruehstueck_tablet.jpg',
        '/ehzbuesum/img/fruehstueck_mobil.jpg',
        '/ehzbuesum/img/impressum_desktop.jpg',
        '/ehzbuesum/img/impressum_tablet.jpg',
        '/ehzbuesum/img/impressum_mobil.jpg',
        '/ehzbuesum/img/preise_desktop.jpg',
        '/ehzbuesum/img/preise_tablet.jpg',
        '/ehzbuesum/img/preise_mobil.jpg',
        '/ehzbuesum/img/willkommen_desktop.jpg',
        '/ehzbuesum/img/willkommen_tablet.jpg',
        '/ehzbuesum/img/willkommen_mobil.jpg',
        '/ehzbuesum/img/10.jpg',
        '/ehzbuesum/js/app.js',
        '/ehzbuesum/js/data.js'
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