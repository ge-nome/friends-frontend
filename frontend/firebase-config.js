// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm6m3YRKehdzRhtpHb-gaxEmROUBYflXA",
  authDomain: "friends-b0d75.firebaseapp.com",
  projectId: "friends-b0d75",
  storageBucket: "friends-b0d75.appspot.com",
  messagingSenderId: "850364035974",
  appId: "1:850364035974:web:53a8251a17d98c6c1af207",
  measurementId: "G-TSM9TS00L9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);