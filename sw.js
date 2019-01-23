// Install Service Worker
self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open('myCache')
      .then(function(cache) {
        console.log('Caching ...', urlsToCache);
        return cache.addAll(urlsToCache);
      })
  );
});

// Array for files to be cached
let urlsToCache = [
        '/ehzbuesum/index.html',
        '/ehzbuesum/anfahrt.html',
        '/ehzbuesum/buchen.html',
        '/ehzbuesum/datenschutz.html',
        '/ehzbuesum/eindruecke.html',
        '/ehzbuesum/impressum.html',
        '/ehzbuesum/preise.html',
        '/ehzbuesum/css/styles.css',
        '/ehzbuesum/js/app.js',
        '/ehzbuesum/js/data.js',
        '/ehzbuesum/img/anfahrt_desktop.jpg',
        '/ehzbuesum/img/datenschutz_desktop.jpg',
        '/ehzbuesum/img/einzel_desktop.jpg',
        '/ehzbuesum/img/fruehstueck_desktop.jpg',
        '/ehzbuesum/img/impressum_desktop.jpg',
        '/ehzbuesum/img/preise_desktop.jpg',
        '/ehzbuesum/img/willkommen_desktop.jpg',
]

// Service Worker should return requests with cache, otherwise fetch data from network
self.addEventListener('fetch', function(event) {
    // prevent default fetch event
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // if request URL in cache, use it
                if (response) {
                    console.log('URL used from cache')
                    return response;
                }
                // if not, fetch from network
                console.log('Network request');
                return fetch(event.request); 
            })
        )
})

// Check for old Service Workers and delete them
self.addEventListener('activate', function(event) {

  const cacheWhitelist = ['myCache'];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

/*
let urlsToCache = [
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
        '/ehzbuesum/js/app.js',
        '/ehzbuesum/js/data.js'
]
*/