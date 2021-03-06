import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoCjveep5TdMiiiJXbqBppi9TzG6Bt--M",
  authDomain: "netflix-clone-61fee.firebaseapp.com",
  projectId: "netflix-clone-61fee",
  storageBucket: "netflix-clone-61fee.appspot.com",
  messagingSenderId: "363440997052",
  appId: "1:363440997052:web:9846d2a9053e9792d0c6b9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };

export default db;
