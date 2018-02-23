var deferredPrompt;

if (!window.Promise) {
    window.Promise = Promise;
}

//Registrierung vom Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')  		//Pfadname aus dem Projekt; kann auch anders
        .then(reg => console.log('Service worker registered!', reg))
        .catch(err => console.log(err));
}

/*window.addEventListener('beforeinstallprompt', event => {
    console.log('beforeinstallprompt fired');
    event.preventDefault();
    deferredPrompt = event;
    return false;
});*/