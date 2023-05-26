// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPRWzO9lllh6-WMWRjB_N2ITvz_hDOp0I",
  authDomain: "chatter-e1be7.firebaseapp.com",
  projectId: "chatter-e1be7",
  storageBucket: "chatter-e1be7.appspot.com",
  messagingSenderId: "340895486129",
  appId: "1:340895486129:web:8785f01daaf6b6d1275290",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get provider for google sign in
export const provider = new GoogleAuthProvider();

export const auth = getAuth(app);
export const db = getFirestore(app);

export const addMessage = async (username, text, userImageUrl) => {
  let messagesRef = collection(db, "messages");
  await addDoc(messagesRef, {
    username,
    time: serverTimestamp(),
    text,
    userImageUrl,
  });
};

export const signOutUser = async () => {
  await signOut(auth);
};
