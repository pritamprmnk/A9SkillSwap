// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgiI_RYkCFTr4mzMzPuhxnvOHHGfp4WGo",
  authDomain: "skill-swap-13832.firebaseapp.com",
  projectId: "skill-swap-13832",
  storageBucket: "skill-swap-13832.firebasestorage.app",
  messagingSenderId: "177814312242",
  appId: "1:177814312242:web:4d78a62a806f736606332b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);