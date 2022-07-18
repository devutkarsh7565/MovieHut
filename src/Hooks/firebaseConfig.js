// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAv7M7OArTYEu1Ns4PvmGJHHK9gTrO2KA",
  authDomain: "moviehut-7d251.firebaseapp.com",
  projectId: "moviehut-7d251",
  storageBucket: "moviehut-7d251.appspot.com",
  messagingSenderId: "265151157247",
  appId: "1:265151157247:web:e2b7a375e58c66c4514dca",
  measurementId: "G-WGDK50C19S",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
