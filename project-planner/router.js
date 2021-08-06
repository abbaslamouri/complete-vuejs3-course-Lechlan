import { createWebHistory, createRouter } from 'vue-router'
import Hello from './views/Home.vue'

const routes = [ 
  {
    path: '/',
    name: 'Home',
    component: Hello
  },
  {
    path: '/add',
    name: 'AddProject',
    component: () => import(/*webpackChunkName: "addProject"*/ "./views/AddProject.vue"),
  },
  {
    path: '/projects/:id',
    name: 'EditProject',
    component: () => import(/*webpackChunkName: "editProject"*/ "./views/EditProject.vue"),
    props: true,
  },

]

const router = createRouter( {
  history: createWebHistory(),
  routes
})

export default router