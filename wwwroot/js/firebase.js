import { initializeApp } from
    "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {  getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    deleteUser } from
    "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getDatabase } from
    "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCYDG_rALEn9-Einns7DH6tawKLMZcLghY",
    authDomain: "campus-loop-b2772.firebaseapp.com",
    databaseURL: "https://campus-loop-b2772-default-rtdb.firebaseio.com",
    projectId: "campus-loop-b2772",
    storageBucket: "campus-loop-b2772.firebasestorage.app",
    messagingSenderId: "933931664319",
    appId: "1:933931664319:web:15964ab74c72fab5ee170a",
    measurementId: "G-95S66KDZ5R"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);


window.firebaseAuth = {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    deleteUser
};

export{ auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, deleteUser };