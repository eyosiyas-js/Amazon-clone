import {initializeApp,getApp} from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDW1WjRP6VHMShUpkPGcm_1Pefm3t4gH0g",
  authDomain: "eth-ecommerce-1.firebaseapp.com",
  projectId: "eth-ecommerce-1",
  storageBucket: "eth-ecommerce-1.appspot.com",
  messagingSenderId: "170864195580",
  appId: "1:170864195580:web:53f88095645f7709502479",
};




const app = initializeApp(firebaseConfig);


export const auth = getAuth();
export const provider = new GoogleAuthProvider();
