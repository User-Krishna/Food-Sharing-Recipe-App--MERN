import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signOut
} from "firebase/auth";

// Firebase Config (Replace with your actual Firebase config)
const firebaseConfig = {
  apiKey: "AIzaSyA2-BRPQedUKv04SOMl_HNDmDvoa6MKH-0",
  authDomain: "foodrecipe-2628c.firebaseapp.com",
  projectId: "foodrecipe-2628c",
  storageBucket: "foodrecipe-2628c.appspot.com", // Fixed incorrect storageBucket
  messagingSenderId: "655529703172",
  appId: "1:655529703172:web:94ddf631844dbb6ad28251",
  measurementId: "G-TMVXEEFPGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Google Auth Provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" }); // Force account selection

// GitHub Auth Provider
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, githubProvider, signInWithPopup, signOut };
