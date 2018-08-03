var deferredPrompt;
var enableNotiBtn = document.querySelector('.enable_notifications');

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


function permissionNotifikationAsk() {
    //Objekt ist im Window zu finden
    Notification.requestPermission(res => {
        console.log('User Auswahl', res);
        if (res !== 'Zugriff erlaubt') {
            console.log('Kein Zugriff erlaubt');
        } else {
            displayNotificationConfirm();
            //Kann man verwenden
            //um den Button verschwinden zu lassen falls
            // der User keine Benachrichtugungen will
        }
    })
}

function displayNotificationConfirm() {
    new Notification('Juhu');
}

//enable button oder diese Funktion kann
// auch verwendet werden um den Button erst anzuzeigen wenn dieser auch vom Browser supported wird
//in diesem Fall wird nur mit Google Chromebrowser gearbeitet, darum ist dieser Teil auskommentiert

//Falls mehre Buttons als Notifikationbuttons
// benötigt werden kann man durch diese wie folgt durch Iterieren
if ('Notification' in window !== null) {
    for (let i = 0; i < enableNotiBtn; i++) {
        //enableNotiBtn[i].style.display='inlin-block';
        enableNotiBtn[i].addEndEventListener('click', permissionNotifikationAsk);
        console.log('Button Clicked')
    }
}
