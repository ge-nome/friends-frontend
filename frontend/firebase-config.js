// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7od0hAtxgDrOie_AP3AChBbHBqXKNPpA",
  authDomain: "friends-v1-ff6aa.firebaseapp.com",
  projectId: "friends-v1-ff6aa",
  storageBucket: "friends-v1-ff6aa.appspot.com",
  messagingSenderId: "292120318215",
  appId: "1:292120318215:web:e62555f81cb1b3652975a2",
  measurementId: "G-Q43M04HXYS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);