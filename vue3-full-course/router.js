import { createWebHistory, createRouter } from 'vue-router'
// import Home from './pages/Home.vue'
// import Heroes from './pages/Heroes.vue'
// import Calendar from './pages/Calendar.vue'
// import Markdown from './pages/Markdown.vue'
// import Slider from './pages/Slider.vue'
// import Accordion from './pages/Accordion.vue'

const router = createRouter( {
  history:createWebHistory(),
  routes: [
    {
      path: '/',
      component:  () => import('./pages/Home.vue')
    },
    {
      path: '/heroes',
      component:  () => import('./pages/Heroes.vue')
    },
    {
      path: '/calendar',
      component:  () => import('./pages/Calendar.vue')
    },
    {
      path: '/markdown',
      component:  () => import('./pages/Markdown.vue')
    },
    {
      path: '/slider',
      component:  () => import('./pages/Slider.vue')
    },
    {
      path: '/accordion',
      component: () => import('./pages/Accordion.vue')
    }


  ]
})

export { router }