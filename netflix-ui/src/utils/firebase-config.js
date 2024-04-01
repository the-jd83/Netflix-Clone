import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCS6A2yuBxf1LOrNVP6jj3PTkcP_OIUmI0",
  authDomain: "react-netflix-clone-8ff21.firebaseapp.com",
  projectId: "react-netflix-clone-8ff21",
  storageBucket: "react-netflix-clone-8ff21.appspot.com",
  messagingSenderId: "287858747041",
  appId: "1:287858747041:web:3a1e715f5865290ad7b2e0",
  measurementId: "G-NKYSWHJ40W"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);