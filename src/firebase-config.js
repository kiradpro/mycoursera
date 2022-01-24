import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCobcnnMUcneAdyuFM55w3V4QNCK8ukKNc",
  authDomain: "mycoursera-3e5bf.firebaseapp.com",
  projectId: "mycoursera-3e5bf",
  storageBucket: "mycoursera-3e5bf.appspot.com",
  messagingSenderId: "346871723316",
  appId: "1:346871723316:web:5df028b38da242e742a161"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

 