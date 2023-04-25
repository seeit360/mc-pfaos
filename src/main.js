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
  apiKey: "AIzaSyBY8s_JvTSqzI6WNKQFa5xcBoV4C2rvaSQ",
  authDomain: "phantom-frames-website.firebaseapp.com",
  projectId: "phantom-frames-website",
  storageBucket: "phantom-frames-website.appspot.com",
  messagingSenderId: "494912035656",
  appId: "1:494912035656:web:78927ed8fbd0b9b092f17d",
  measurementId: "G-GQ1RRCYPE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
