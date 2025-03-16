// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC107QHwAEZ_8V4dyHm7rPZFRxOCijxKW4",
  authDomain: "book-store-2b3be.firebaseapp.com",
  projectId: "book-store-2b3be",
  storageBucket: "book-store-2b3be.firebasestorage.app",
  messagingSenderId: "465118121251",
  appId: "1:465118121251:web:82ebaf039cc00acdf25096",
  measurementId: "G-JM08L2N7NN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);