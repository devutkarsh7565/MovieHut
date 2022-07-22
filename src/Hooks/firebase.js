// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;
const appId = process.env.REACT_APP_APP_ID;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
console.log(apiKey);
const firebaseConfig = {
  apiKey: "AIzaSyC4RTrfT5qnPPefpuvl3X_3UoHCna2CR5Y",
  authDomain: "moviehut-c36e6.firebaseapp.com",
  projectId: "moviehut-c36e6",
  storageBucket: "moviehut-c36e6.appspot.com",
  messagingSenderId: "162384839869",
  appId: "1:162384839869:web:a89eb381bfdfeb3e3323d4",
  measurementId: "G-JYB8S05PJH",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
