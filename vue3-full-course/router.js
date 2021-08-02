import { createWebHistory, createRouter } from 'vue-router'
import Home from './pages/Home.vue'
import Heroes from './pages/Heroes.vue'
import Calendar from './pages/Calendar.vue'
import Markdown from './pages/Markdown.vue'
import Slider from './pages/Slider.vue'

const router = createRouter( {
  history:createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/heroes',
      component: Heroes,
    },
    {
      path: '/calendar',
      component: Calendar,
    },
    {
      path: '/markdown',
      component: Markdown,
    },
    {
      path: '/slider',
      component: Slider,
    }

  ]
})

export { router }