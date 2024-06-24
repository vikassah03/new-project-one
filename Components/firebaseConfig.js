// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAj0_4TtPYwym-TgYY14Z-78C-3qa-SRmA",
  authDomain: "codingquizgame.firebaseapp.com",
  projectId: "codingquizgame",
  storageBucket: "codingquizgame.appspot.com",
  messagingSenderId: "459700648082",
  appId: "1:459700648082:web:9a88a4fc961023b2f18e4b",
  measurementId: "G-6FRYL3J2SK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
