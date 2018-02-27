//install and activate Lifecycle
//wird nur einmal Aufgerufen
//https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle

//wenn änderungen im sw.js gemacht werden müssen alle dazugehörigenm Taps geschlossen und die Seite muss neu geladen werden um den SW zu aktivieren

// install und  activate wird vom Browser getriggert

self.addEventListener('install', event => {
    console.log('[Service Worker] Installing Service Worker ...', event);
    event.waitUntil(
        caches.open('static')       //parameter = Cachename --> kann benannt werden wie man will
            .then(cache => {
                console.log('[Service Worker] Precaching');
                cache.add('/src/js/app.js')
            }))});

self.addEventListener('activate', event => {
    console.log('[Service Worker] Activating Service Worker ....', event);
    return self.clients.claim();
});

//fetch Event wird von der aktuellen Seite getriggert
self.addEventListener('fetch', function(event) {
        event.respondWith(
            caches.match(event.request)     //request sind die Keys
                .then(response => {
                        // Cache hit - return response
                        if (response) {
                            return response;
                        }else{
                        return fetch(event.request);
                    }
                })
        );
    });