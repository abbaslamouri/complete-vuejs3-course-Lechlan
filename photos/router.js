import { createRouter, createWebHistory } from 'vue-router'
import PhotoApp from './PhotoApp.vue'
import PhotoView from './PhotoView.vue'

const router = createRouter( {
  history:createWebHistory(),
  routes: [
    {
      path: '/',
      component: PhotoApp,
      children: [
        {
          path: 'albums/:id',
          component: PhotoView
        }
      ]
    }
  ]
})

export { router }