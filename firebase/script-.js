

//import { initializeApp } from './node_modules/@firebase';
//import { getAuth, createUserWithEmailAndPassword } from './node_modules/@firebase/auth'  
//import { initializeApp } from './home/teodoros/node_modules/firebase/firebase-firestore';
//import { firestore } from 'firebase/firestore';
//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration

import {  } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js'
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js'
import { auth } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js'

//const db = getFirestore(app);
auth = firebase.getAuth()
firebase.initializeApp(firebaseConfig);

const firebaseConfig = {
    apiKey: "AIzaSyCytvju7Ki3VtacB2jZZJZWWI2b4j1M3ww",
    authDomain: "colegio-9e699.firebaseapp.com",
    projectId: "colegio-9e699",
    storageBucket: "colegio-9e699.appspot.com",
    messagingSenderId: "877611695941",
    appId: "1:877611695941:web:10fbf88eb37d75b782882c",
    measurementId: "G-KB4Q6HEF5C"
  };
const app = initializeApp(firebaseConfig);
  function a(){
    let email = "esther@yahoo.com"
    let password = "esther@yahoo.com"

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }
  
  a()


console.log('123')