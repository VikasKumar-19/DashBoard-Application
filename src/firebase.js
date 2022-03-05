// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./secret"; 
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const app = initializeApp(firebaseConfig);

export const auth = getAuth(); 
export const db = getFirestore();

export default app;