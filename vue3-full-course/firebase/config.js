import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBTezYY2svk3cGNnBZ086KJCuTy2MV-nhk",
  authDomain: "vue-full-course-c55bb.firebaseapp.com",
  projectId: "vue-full-course-c55bb",
  storageBucket: "vue-full-course-c55bb.appspot.com",
  messagingSenderId: "534808855389",
  appId: "1:534808855389:web:ab492d47c08ec3cf3bdeb4"
}

// Initialize firebase
firebase.initializeApp(firebaseConfig)

// Initialize firestore service
const db = firebase.firestore()

export { db }
