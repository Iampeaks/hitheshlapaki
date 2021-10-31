import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDUuYL9DBehsHmwauK2JQu0vrZ6xPNrhPc",
    authDomain: "hithesh-app.firebaseapp.com",
    projectId: "hithesh-app",
    storageBucket: "hithesh-app.appspot.com",
    messagingSenderId: "345660086061",
    appId: "1:345660086061:web:b35a7940ca966b13bce5a4",
    measurementId: "G-5Y3Q60DT70"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };