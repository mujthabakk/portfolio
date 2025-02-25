import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlFWGA6xQ2ltFX4X3QrIo2ieSm6kELIKw",
  authDomain: "portfolio-af58b.firebaseapp.com",
  projectId: "portfolio-af58b",
  storageBucket: "portfolio-af58b.firebasestorage.app",
  messagingSenderId: "200292295270",
  appId: "1:200292295270:web:5fea7c1a9a7a9bbf76c3a7",
  measurementId: "G-WJ6C353GC3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };