import { createWebHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import PostDetails from './views/PostDetails.vue'
import CreatePost from './views/CreatePost.vue'
import Tag from './views/Tag.vue'

const routes = [ 
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts/:id',
    name: 'PostDetails',
    component: PostDetails,
    props: true
  },
  {
    path: '/create',
    name: 'CreatePost',
    component: CreatePost
  },
  {
    path: '/tags/:tag',
    name: 'Tag',
    component: Tag,
  },
]

const router = createRouter( {
  history: createWebHistory(),
  routes
})

export default router