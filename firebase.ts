
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiAKXm9sOrjPmKb0qgY6h4jQ-f763NDZM",
  authDomain: "streamvibely.firebaseapp.com",
  projectId: "streamvibely",
  storageBucket: "streamvibely.firebasestorage.app",
  messagingSenderId: "731940880209",
  appId: "1:731940880209:web:43adce6688fd4245db9d70",
  measurementId: "G-9QCWFV3X71"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
