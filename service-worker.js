// service-worker.js
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('my-cache')
            .then(cache => {
                return cache.addAll([
                    '/pgg.pdf',
                    // Adicione outros arquivos que você deseja armazenar em cache
                ]);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
