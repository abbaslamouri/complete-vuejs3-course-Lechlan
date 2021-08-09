// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// Add the Firebase products that you want to use
// import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9NcRgvHpVw12Ma9ogON8Ef1K-gCeMhQQ",
  authDomain: "vue-test-projects-a649d.firebaseapp.com",
  projectId: "vue-test-projects-a649d",
  storageBucket: "vue-test-projects-a649d.appspot.com",
  messagingSenderId: "992898635166",
  appId: "1:992898635166:web:9104228589efe723c5f28f"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize firestore
const db = firebase.firestore()

export { db }