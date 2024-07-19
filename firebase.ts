// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
   apiKey: 'AIzaSyAW_ktA7li21EYWuhZueVa11e8Fds-WR9g',
   authDomain: 'phind-collab-c0af3.firebaseapp.com',
   projectId: 'phind-collab-c0af3',
   storageBucket: 'phind-collab-c0af3.appspot.com',
   messagingSenderId: '457859054645',
   appId: '1:457859054645:web:b02e4af070e44fe32bc57c',
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
