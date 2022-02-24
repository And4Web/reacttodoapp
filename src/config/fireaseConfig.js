import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvIVt7hPpKCsrnLkt6bwJgXNPgZjO2d9g",
  authDomain: "todoappchaoocharles.firebaseapp.com",
  projectId: "todoappchaoocharles",
  storageBucket: "todoappchaoocharles.appspot.com",
  messagingSenderId: "236339434148",
  appId: "1:236339434148:web:45d1ab0667a1bdb1cacc31",
  measurementId: "G-WCTHN08SVQ",
};

// Initialize Firebase:
firebase.initializeApp(firebaseConfig);

//Initialize Firestore:
firebase.firestore();

export default firebase;
