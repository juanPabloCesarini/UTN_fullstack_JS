import  firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBCwCwTb1LLbaiExWEljLf9GxgtQMjujfA",
    authDomain: "ecommerce-8c444.firebaseapp.com",
    projectId: "ecommerce-8c444",
    storageBucket: "ecommerce-8c444.appspot.com",
    messagingSenderId: "1006812424982",
    appId: "1:1006812424982:web:f9e97beeb2616bb0b7fe37"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Propiedades ausiliares --> optativo
firebase.db = firebase.firestore();
firebase.auth = firebase.auth();
export default firebase;
        