import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA9NcRgvHpVw12Ma9ogON8Ef1K-gCeMhQQ",
  authDomain: "vue-test-projects-a649d.firebaseapp.com",
  projectId: "vue-test-projects-a649d",
  storageBucket: "vue-test-projects-a649d.appspot.com",
  messagingSenderId: "992898635166",
  appId: "1:992898635166:web:f288b65833d116d0c5f28f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Initialize firestore
const db = firebase.firestore()
const auth = firebase.auth()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { db, auth, timestamp }

