const { createApp } = require('vue');
import App from "./App.vue";

createApp(App).mount("#app");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_ciTaud6T8nuK3gTlCYCH64lwuiSXmz4",
  authDomain: "phantom-frames.firebaseapp.com",
  projectId: "phantom-frames",
  storageBucket: "phantom-frames.appspot.com",
  messagingSenderId: "983648704077",
  appId: "1:983648704077:web:e350b9cf5fcfc33ab5ee04",
  measurementId: "G-JWTJZ0FB6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);