// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlu1QlFW4wfeAdEJxNKumDUdM8J_ZCSpY",
  authDomain: "fir-shopping-85a5d.firebaseapp.com",
  projectId: "fir-shopping-85a5d",
  storageBucket: "fir-shopping-85a5d.appspot.com",
  messagingSenderId: "223135693664",
  appId: "1:223135693664:web:cf3c06d46e3f69b60ffc05",
};

// Firebase development configuration
const devFirebaseConfig = {
  apiKey: "AIzaSyABSkGWEV16gWm2804kFNdvdcGDQ6puqpo",
  authDomain: "fir-shopping-dev-6c0ea.firebaseapp.com",
  projectId: "fir-shopping-dev-6c0ea",
  storageBucket: "fir-shopping-dev-6c0ea.appspot.com",
  messagingSenderId: "862877563735",
  appId: "1:862877563735:web:05fbf35180a025c566dc12",
};

// Initialize Firebase
let app;
if (process.env.NODE_ENV === "production") {
  app = initializeApp(firebaseConfig);
} else {
  app = initializeApp(devFirebaseConfig);
}
console.log("[ Firebase - Config ] NODE_ENV: ", process.env.NODE_ENV);
/**
 * Initialize Cloud Firestore and get a reference to the service
 * IMPORTANT: must be down of initializeApp(), because "app" must be desplegated.
 */
const db = getFirestore();

export { app, db };
