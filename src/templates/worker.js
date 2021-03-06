var cacheName = 'weatherlite';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(
        [
          {% for type in assets %}
            {% for link in assets[type] %}
              '{{link}}',
            {% endfor %}
          {% endfor %}
        ]
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return true;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});
