import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAExDoPh3ntThJ6uickw35nvyXFX20DmGQ",
  authDomain: "muso-ninjas-b27b9.firebaseapp.com",
  projectId: "muso-ninjas-b27b9",
  storageBucket: "muso-ninjas-b27b9.appspot.com",
  messagingSenderId: "1074825257462",
  appId: "1:1074825257462:web:c2cb4a9f07f69a108ba7d7"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Initialize firestore
const db = firebase.firestore()
const auth = firebase.auth()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { db, auth, timestamp }

