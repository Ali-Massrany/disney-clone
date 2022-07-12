import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getApp, getApps, initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCLd0wUDnAHtFN4Q9SMOU0NyHRekE1iBnI",
  authDomain: "disney-clone-f6a81.firebaseapp.com",
  databaseURL: "https://disney-clone-f6a81-default-rtdb.firebaseio.com",
  projectId: "disney-clone-f6a81",
  storageBucket: "disney-clone-f6a81.appspot.com",
  messagingSenderId: "885685968200",
  appId: "1:885685968200:web:7d93646477cc2cd0cc277d",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
