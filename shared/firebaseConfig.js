// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "webfolio-395118.firebaseapp.com",
  projectId: "webfolio-395118",
  storageBucket: "webfolio-395118.appspot.com",
  messagingSenderId: "1074985449717",
  appId: "1:1074985449717:web:0ecb7dad7082a2dd3d2dbc",
  measurementId: "G-0YP3T944R3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;