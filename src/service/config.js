// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log(process)
const firebaseConfig = {
  apiKey: /* process.env.FIREBASE_API_KEY */ "AIzaSyAyZJrmhqLZjpPKGOoFbhbt8oelOwP9esc",
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

// Storage
export const storage = getStorage()

//Firestore
export const db = getFirestore();