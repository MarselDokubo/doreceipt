// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "doreceipt-3d5b6.firebaseapp.com",
  projectId: "doreceipt-3d5b6",
  storageBucket: "doreceipt-3d5b6.appspot.com",
  messagingSenderId: "210678695522",
  appId: "1:210678695522:web:9014df525e7fef06d9333b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Auth 
export const auth = getAuth()