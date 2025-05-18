// Activity-9/app/firebase.config.js
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';  
import { getFirestore } from 'firebase/firestore'; 
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBSLf2JjQVhcuCBopDziQmTLrzA5dotLHM",
  authDomain: "activity-9-c8583.firebaseapp.com",
  projectId: "activity-9-c8583",
  storageBucket: "activity-9-c8583.firebasestorage.app",
  messagingSenderId: "484749875413",
  appId: "1:484749875413:web:55e7fbdffe92ae89acea5c",
  measurementId: "G-YPWHLW1MES"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  
const db = getFirestore(app); 
const analytics = getAnalytics(app); 

export { auth, db, analytics, createUserWithEmailAndPassword }; 