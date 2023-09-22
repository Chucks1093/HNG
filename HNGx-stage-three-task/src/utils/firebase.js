// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCut3a8P2Mb95Z8Rij0syqsMOziGC4p0h4",
  authDomain: "gallery-c68e4.firebaseapp.com",
  projectId: "gallery-c68e4",
  storageBucket: "gallery-c68e4.appspot.com",
  messagingSenderId: "973993420754",
  appId: "1:973993420754:web:498d4cf1aae8678af18a0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;
// Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);

