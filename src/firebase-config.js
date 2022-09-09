// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJAigzaisWl24-tpiHPeCppD1xOw_eo60",
  authDomain: "chat-app-d3c99.firebaseapp.com",
  projectId: "chat-app-d3c99",
  storageBucket: "chat-app-d3c99.appspot.com",
  messagingSenderId: "634251478500",
  appId: "1:634251478500:web:82b35fae3b98fabdf033f1",
  measurementId: "G-5K8YGENX8B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
