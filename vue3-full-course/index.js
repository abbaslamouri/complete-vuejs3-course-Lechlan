import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import firebase from 'firebase/app'
// import 'firebase/firestore'
// import 'firebase/auth'


// const firebaseConfig = {
//   apiKey: "AIzaSyBTezYY2svk3cGNnBZ086KJCuTy2MV-nhk",
//   authDomain: "vue-full-course-c55bb.firebaseapp.com",
//   projectId: "vue-full-course-c55bb",
//   storageBucket: "vue-full-course-c55bb.appspot.com",
//   messagingSenderId: "534808855389",
//   appId: "1:534808855389:web:ab492d47c08ec3cf3bdeb4"
// }

// // Initialize firebase
// firebase.initializeApp(firebaseConfig)

// const projectFirestore = firebase.firestore()



library.add(fas)

const app = createApp(App)
app.use(router)


app.component('fa', FontAwesomeIcon)

app.mount('#app')