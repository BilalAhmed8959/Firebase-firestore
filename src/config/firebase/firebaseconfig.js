import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCXcrUeBeSq3e__BeVeMgkhWq1IG-CnmLk",
    authDomain: "fir-authentication-f6efa.firebaseapp.com",
    projectId: "fir-authentication-f6efa",
    storageBucket: "fir-authentication-f6efa.appspot.com",
    messagingSenderId: "677610573368",
    appId: "1:677610573368:web:f76402b43b1a8fb7b3a0cd",
    measurementId: "G-SLKPN935SF"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);