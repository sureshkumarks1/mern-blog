// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
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
const app = initializeApp(firebaseConfig);
export { app };
