import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

require("dotenv").config();

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCYQr-4LMWmCzunluqR0W_6_IeVBFG9hho",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});
console.log(firebaseConfig, "firebaseConfig");

export const auth = firebaseConfig.auth();
export default firebaseConfig;
