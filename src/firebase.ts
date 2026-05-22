import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDRn8duEWl02g7ORRjJi-o_Bj-0B_cORas",
  authDomain: "real-estate-4f399.firebaseapp.com",
  projectId: "real-estate-4f399",
  storageBucket: "real-estate-4f399.firebasestorage.app",
  messagingSenderId: "36922985107",
  appId: "1:36922985107:web:a429d284aad07475f65b66",
  measurementId: "G-D3MPZQ1V25"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)