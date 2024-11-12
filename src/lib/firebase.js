// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-b6c35.firebaseapp.com",
  projectId: "reactchat-b6c35",
  storageBucket: "reactchat-b6c35.firebasestorage.app",
  messagingSenderId: "910307099084",
  appId: "1:910307099084:web:0611845c89486f4bf79d69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();