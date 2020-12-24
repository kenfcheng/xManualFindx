import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// This is supposed to pull from .env, but for some reason it will not.  Temporarily am directly plugging API Key.
require("dotenv").config();

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCYQr-4LMWmCzunluqR0W_6_IeVBFG9hho",
  authDomain: "manualfind-6b74b.firebaseapp.com",
  databaseURL: "https://manualfind-6b74b.firebaseio.com",
  projectId: "manualfind-6b74b",
  storageBucket: "manualfind-6b74b.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-BQDY6HTQ8M",
});
console.log(firebaseConfig, "firebaseConfig");

export const auth = firebaseConfig.auth();
export default firebaseConfig;
