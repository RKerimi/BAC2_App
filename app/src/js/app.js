var deferredPrompt;

let optionsPush = {
    body: 'kurzer Text als Untertitel',
    icon: '../static/img/light48.png',
    data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
    }}

if (!window.Promise) {
    window.Promise = Promise;
}
//Registrierung und Validierung vom Service Worker

if ('serviceWorker' in navigator && 'Notification' in window) {
    console.log('Service Worker and Notification is supported')
    navigator.serviceWorker.register('/sw.js')
        .then(reg => {
            console.log('Service worker registered!', reg);

        })
        .catch(err => console.log(err));
}

//Callbackfunktion falls der Add to Homescreen banner sich erst nach einem Event zeigen darf

window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    deferredPrompt = event;
    return false;
});




function displayNotification() {
    if (Notification.permission == 'granted') {
        navigator.serviceWorker.getRegistration()
            .then(reg => {
                reg.showNotification('Neue Nachricht',optionsPush );
                console.log('Notification permission status:', status);
        });
    }
}


displayNotification();
