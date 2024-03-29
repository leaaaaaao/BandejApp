export function enviarNotificacao() {
    Notification.requestPermission().then((result) => {
      if (result === "granted") {
        navigator.serviceWorker.ready.then((registration) => {
          registration.showNotification("Vibration Sample", {
            body: "Buzz! Buzz!",
            icon: "../images/touch/chrome-touch-icon-192x192.png",
            tag: "vibration-sample",
          });
        });
      }
    });
  }