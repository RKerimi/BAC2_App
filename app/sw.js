//install and activate Lifecycle
//wird nur einmal Aufgerufen
//https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle

//wenn änderungen im sw.js gemacht werden müssen alle dazugehörigenm Taps geschlossen und die Seite muss neu geladen werden um den SW zu aktivieren

// install und  activate wird vom Browser getriggert
//mit event.waitUntil() wird gewartet mit der SW installation bis Cachevorgang fertig ist
//Zugriff auf Cache Methoden --> https://developer.mozilla.org/de/docs/Web/API/Cache
//Caches ist der gesamte Cachespeicher und Cache sind die Supcaches gemeint
//add() --> erhalten wir eine Resource mit addAll()erhalten wir alle die wir brauchen
//promise.js und fetch.js wird nur bei Browsern die keinen SW supporten benötigt
//files können auch über URL geladen werden, d.h es muss nicht der eigene Server sein
//'/' muss in denm Cache hinzugefügt werden, damit die App den Root Folder cachen kann
//das ist sehr wichtig
//der cache wird nur gecached weenn sich in der addAll Methode was verändert
//beim auf genaue Spreibweise des Filetypen achten --> case Sensitive

let cacheName = 'precache';
let filesToCache = [
    '/',
    '/app',
    '/dist/index.html',
    '/src/js/app.js',
    '/src/js/feed.js',
    '/src/js/promise.js',
    '/static/img/',
    '/static/img/dashboard-mockup.jpg',
    '/static/img/bulp.jpeg',
    '/static/img/garage.jpeg',
    '/static/img/Graph_Heizung.JPG',
    '/manifest.json'
];

self.addEventListener('install', event => {
    console.log('[Service Worker] Installing Service Worker ....', event);
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                console.log('[Service Worker] Precaching App Frame');
                cache.addAll(filesToCache);
            })
    )
});

self.addEventListener('activate', event => {
    console.log('[Service Worker] Activating Service Worker ....', event);
    return self.clients.claim();
})


//fetch Event wird von der aktuellen Seite getriggert
//request sind die Keys im Key:Value pair vom Cache --> key ist ein Objekt und niemals ein String
//falls kein Wert in response vorhanden ist wird 0 zurückgegeben
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response; //wenn die Daten im Cache wird nur hier aufgerufen sonst wird der fetch event aufgerufen
                }else{
                    return fetch(event.request);
                }
            })
    );
});