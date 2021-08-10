<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if='error'>{{ error }}</div>
    <div v-else>
      <div v-if='posts.length' class='layout'>
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-if='!posts.length && !error'>
      Loading ...
      <Spinner />
    </div>
    </div>
  </div>
</template>

<script>
import getPosts from '../composables/getPosts'
import PostList from '../Components/PostList.vue'
import Spinner from '../Components/Spinner.vue'
import TagCloud from '../Components/TagCloud.vue'
import CreatePost from '../Components/Spinner.vue'
export default {
  name: 'Home',
  components: { PostList, Spinner, CreatePost, TagCloud },
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

<style>

.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap:20px;
}

</style>