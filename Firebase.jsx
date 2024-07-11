import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApzr3N4gAkWmCv8XDMcaURdA8eUcPtwwE",
  authDomain: "chit-chat-18a31.firebaseapp.com",
  projectId: "chit-chat-18a31",
  storageBucket: "chit-chat-18a31.appspot.com",
  messagingSenderId: "342444590026",
  appId: "1:342444590026:web:1e372c970764b329bbc533",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
