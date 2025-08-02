
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9TwapiVq3MJulJcGM-FXCtWT_shUPw0E",
  authDomain: "portfolio-contact-3d8aa.firebaseapp.com",
  projectId: "portfolio-contact-3d8aa",
  storageBucket: "portfolio-contact-3d8aa.firebasestorage.app",
  messagingSenderId: "233134625519",
  appId: "1:233134625519:web:432165750b7511e2db411a",
  measurementId: "G-P7E97EKK43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };