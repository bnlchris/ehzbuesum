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
];

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