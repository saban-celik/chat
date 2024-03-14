import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDBURZOG2GlHS8b65moloZiAQ0io3w0_mU",
    authDomain: "lookchat-64b42.firebaseapp.com",
    projectId: "lookchat-64b42",
    storageBucket: "lookchat-64b42.appspot.com",
    messagingSenderId: "629755343620",
    appId: "1:629755343620:web:cdc307ac2b519691e19651",
    measurementId: "G-CD4YS88E9X"
};

if (!firebase.app.length) {
    firebase.initializeApp(firebaseConfig)
}

export { firebase }