// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDVYfof3GB1j5axDEEONpRyb9t2t2tFt6s",
    authDomain: "netflixgpt-f8433.firebaseapp.com",
    projectId: "netflixgpt-f8433",
    storageBucket: "netflixgpt-f8433.firebasestorage.app",
    messagingSenderId: "325946990168",
    appId: "1:325946990168:web:201b2f1895e3d9e314b42d",
    measurementId: "G-YJPJEQD6ML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
