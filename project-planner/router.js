import { createWebHistory, createRouter } from 'vue-router'
import Hello from './views/Home.vue'
// import About from './views/About.vue'
import Jobs from './views/jobs/Jobs.vue'
import JobDetails from './views/jobs/JobDetails.vue'
import NotFound from './views/NotFound.vue'

const routes = [ 
  {
    path: '/',
    name: 'Home',
    component: Hello
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/*webpackChunkName: "about"*/ "./views/About.vue"),
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs,
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true
  },
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter( {
  history: createWebHistory(),
  routes
})

export default router