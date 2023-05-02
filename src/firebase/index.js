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
  appId: "1:223135693664:web:cf3c06d46e3f69b60ffc05"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
/**
 * Initialize Cloud Firestore and get a reference to the service 
 * IMPORTANT: must be down of initializeApp(), because "app" must be desplegated.
*/
export const db = getFirestore();