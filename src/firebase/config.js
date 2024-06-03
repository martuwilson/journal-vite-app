// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY-t6WxLBxX3un5bIhIBqFwfS4RaQtujw",
  authDomain: "journal-app-24.firebaseapp.com",
  projectId: "journal-app-24",
  storageBucket: "journal-app-24.appspot.com",
  messagingSenderId: "363047301363",
  appId: "1:363047301363:web:3b684d43ad2c37e8250786",
  measurementId: "G-WGEFDPGCET"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);