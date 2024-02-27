// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaXGNn0DKPwnWU64KSqdenCwxM6BYsvNU",
  authDomain: "academy-mingle.firebaseapp.com",
  projectId: "academy-mingle",
  storageBucket: "academy-mingle.appspot.com",
  messagingSenderId: "131254434421",
  appId: "1:131254434421:web:8f430c2114efeada6a563c",
  measurementId: "G-JTGRPKFFW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);