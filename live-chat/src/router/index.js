import { createWebHistory, createRouter } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'
import { auth } from '../firebase/config'

// auth guard
const requireAuth = (to, from , next) => {
  const user = auth.currentUser
  if (! user) {
    next({name: "Welcome"})
  } else {
    next()

  }
}

const requireNoAuth = (to, from, next) => {
  const user = auth.currentUser
  if ( user) {
    next({name: "Chatroom"})
  } else {
    next()

  }
}

const routes= [
    
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: requireNoAuth
  },

  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  },

]

const router = createRouter( {
  history:createWebHistory(),
  routes
})

export { router }