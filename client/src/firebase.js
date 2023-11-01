// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernproject-19228.firebaseapp.com",
  projectId: "mernproject-19228",
  storageBucket: "mernproject-19228.appspot.com",
  messagingSenderId: "863393708786",
  appId: "1:863393708786:web:da34c348f2b0a14d3e2e6b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);