importScripts ('/cache-polyfill.js');

(function() {
  self.addEventListener('install', event => {
    console.log('Service worker installing...');
    self.skipWaiting();
    event.waitUntil(
      caches
        .open('getFixed')
        .then(cache => {
          // console.log(cache);
          return cache.addAll([
            'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css',
            '/bundle.js'
          ]);
        })
        .catch(err => console.log('Install Error:', err))
    );
  });

  self.addEventListener('activate', event => console.log('Service worker activating...'));

  self.addEventListener('fetch', event => {
    // console.log(event.request.url);
    event.respondWith(
      caches
        .match(event.request)
        .then(response => { return response || fetch(event.request); })
        .catch(err => console.log('Fetch Error:', err))
    );
  });
})();