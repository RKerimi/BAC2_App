var deferredPrompt;

if (!window.Promise) {
    window.Promise = Promise;
}
//Registrierung und Validierung vom Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(reg => console.log('Service worker registered!', reg))
        .catch(err => console.log(err));
}

//Callbackfunktion falls der Add to Homescreen banner sich erst nach einem Event zeigen darf

window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    deferredPrompt = event;
    return false;
});