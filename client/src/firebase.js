// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvPohts0uCybnRtYaOPHwb3cYoI2v6K7Q",
  authDomain: "mern-blog-f1133.firebaseapp.com",
  projectId: "mern-blog-f1133",
  storageBucket: "mern-blog-f1133.appspot.com",
  messagingSenderId: "701724233457",
  appId: "1:701724233457:web:c27aaaadea9b7400a22350",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
