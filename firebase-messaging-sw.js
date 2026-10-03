importScripts("https://www.gstatic.com/firebasejs/12.5.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.5.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyB7vx6sQyUkv-pAGqnyIXejwEt35T_",
  authDomain: "al-muthanna-radiology.firebaseapp.com",
  projectId: "al-muthanna-radiology",
  storageBucket: "al-muthanna-radiology.firebasestorage.app",
  messagingSenderId: "323461576495",
  appId: "1:323461576495:web:48a8469a4fba9d76f049a8"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "🩻 حجز جديد";
  const options = {
    body: payload.notification?.body || "تم تسجيل حجز جديد في قسم الأشعة والمفراس",
    icon: "hospital-logo.jpg.jpg"
  };

  self.registration.showNotification(title, options);
});
