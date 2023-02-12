import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_UN5UoK4LEkUz2v3Qaan89PHb6GpfaRQ",
  authDomain: "react-auth-5944c.firebaseapp.com",
  projectId: "react-auth-5944c",
  storageBucket: "react-auth-5944c.appspot.com",
  messagingSenderId: "531559665310",
  appId: "1:531559665310:web:f97e4523f320f0d8ae358f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;