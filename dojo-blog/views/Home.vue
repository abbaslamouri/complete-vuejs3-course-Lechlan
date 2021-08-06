<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if='error'>{{ error }}</div>
    <div v-if='posts.length'><PostList :posts="posts" /></div>
    <div v-if='!posts.length && !error'>
      Loading ...
      <Spinner />
    </div>
  </div>
</template>

<script>
import getPosts from '../composables/getPosts'
import PostList from '../Components/PostList.vue'
import Spinner from '../Components/Spinner.vue'
import CreatePost from '../Components/Spinner.vue'
export default {
  name: 'Home',
  components: { PostList, Spinner, CreatePost },
  setup() {  
    
    const { load, posts, error } = getPosts()

    load()
    
    return { 
      posts,
      error 
      }
  },
}
</script>