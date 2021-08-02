<template>
  Vuex  
  <hr>
  <button v-for='post in posts' :key='post.id' @click="click(post)">{{ post.title}}</button>
  <hr>
  <div v-if='currentPost'>
    <h1>{{ currentPost.title }}</h1>
    <h4>{{ currentPost.content }}</h4>
  </div>
</template>

<script>

import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {

    const store = useStore() 

    const click = (post) => {
      store.commit('posts/setId', post.id)
    }

    const fetchData = () => {
      store.dispatch('posts/fetch', 'VARIABLE')
    }

    onMounted( () => {
      fetchData()
    })

    return { 
      click,
      currentPost: computed(() => store.getters['posts/current']),
      posts: computed( () => store.state.posts.allPosts)
    }
  }
}
</script>

<style scoped>

</style>

