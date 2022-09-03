import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNAayifv3-MruF4jN6Bq2mzNxe6YaWRyk",
  authDomain: "login-dedc7.firebaseapp.com",
  projectId: "login-dedc7",
  storageBucket: "login-dedc7.appspot.com",
  messagingSenderId: "290903587902",
  appId: "1:290903587902:web:091d3163e4c09d7480e56f",
  measurementId: "G-J046VDB2LH",
};

const app = initializeApp(firebaseConfig);
const Auth = getAuth();

export function sinup(email, password) {
  return createUserWithEmailAndPassword(Auth, email, password);
}
