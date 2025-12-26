// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDafRqDTf7OwXullnS0-tOSUIxi7qN7NjQ",
  authDomain: "portfolio-form-96c61.firebaseapp.com",
  projectId: "portfolio-form-96c61",
  storageBucket: "portfolio-form-96c61.appspot.com",
  messagingSenderId: "1077051803317",
  appId: "1:1077051803317:web:4f029ed6a517a1d3a4e0fc",
  measurementId: "G-CT3LFYSE5X"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
