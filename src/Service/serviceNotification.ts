import { initializeApp } from 'firebase/app';
import { getToken } from 'firebase/messaging';
import { getMessaging } from 'firebase/messaging/sw';

const firebaseConfig = {
    apiKey: "AIzaSyAJqt1FsFb42kzmLuTqf0XF4AwNYcxqrPc",
    authDomain: "bandejapp-ea918.firebaseapp.com",
    projectId: "bandejapp-ea918",
    storageBucket: "bandejapp-ea918.appspot.com",
    messagingSenderId: "1047645357942",
    appId: "1:1047645357942:web:2f3f5810793dbd87349c57",
    measurementId: "G-EWYDXZMRF3"
};

const firebase = initializeApp(firebaseConfig);
const FCM = getMessaging(firebase);

export function registrarNoFCM(serviceAtual: ServiceWorkerRegistration) {

    if(Notification.permission !== 'granted') {
        Notification.requestPermission().then(permissao => {
            console.log(`Notificações: ${permissao}`)
        }).catch(error => console.log(`[ERRO] Notificações: ${error}`));
    }

    navigator.serviceWorker.ready.then(async () => {
        if(localStorage.getItem('tokenFCM') === null) {
            const token = await getToken(FCM, {
                serviceWorkerRegistration: serviceAtual,
                vapidKey: 'BE3bbEGaD8jYhX9hFS51VBPNAN5UkbSiQvpn0Ui7CbPvnvm-ybGqIcEYUF8Jfo7PPNImNkrgIxhZjHkmCvPVTY8'
            }).then(token => {return token})
            .catch(error => console.log(`[ERRO] Token: ${error}`));

            console.log(`TOKEN: ${token}`);

            fetch(`${process.env.REACT_APP_REGISTRO_TOKEN}`, {
                method: 'post',
                body: JSON.stringify({token: token}),
                mode: 'cors',
                headers: {'Content-Type': 'application/json'}
            }).then(resposta => {
                resposta.json().then(r => console.log(r));
                localStorage.setItem('tokenFCM', `${token}`)
            })
            .catch(erro => console.log(`[ERRO] Token: Falha ao registrar: ${erro}`));
        }
    });
}

export default FCM;