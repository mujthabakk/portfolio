import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBlFWGA6xQ2ltFX4X3QrIo2ieSm6kELIKw",
    authDomain: "portfolio-af58b.firebaseapp.com",
    projectId: "portfolio-af58b",
    storageBucket: "portfolio-af58b.firebasestorage.app",
    messagingSenderId: "200292295270",
    appId: "1:200292295270:web:5fea7c1a9a7a9bbf76c3a7",
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };