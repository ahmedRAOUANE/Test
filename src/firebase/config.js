// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9gXboxjxFKbd5Ed7ZoTO-_LDKAOCHRMw",
    authDomain: "forlearning-32af3.firebaseapp.com",
    projectId: "forlearning-32af3",
    storageBucket: "forlearning-32af3.appspot.com",
    messagingSenderId: "393430228721",
    appId: "1:393430228721:web:e9c61cd6bab6c7d9f21350"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const fireStore = getFirestore(app);