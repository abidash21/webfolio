// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "webfolio-20e91.firebaseapp.com",
  projectId: "webfolio-20e91",
  storageBucket: "webfolio-20e91.appspot.com",
  messagingSenderId: "1007373361990",
  appId: "1:1007373361990:web:5de5de2c0f0dd91ada3b47",
  measurementId: "G-N5NMK0VCXP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;