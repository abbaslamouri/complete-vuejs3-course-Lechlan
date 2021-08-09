<template>
  <div v-if='error'>{{ error }}</div>
  <div v-if='postsWithTag.length' class='layout'>
    <PostList :posts="postsWithTag" />
    <TagCloud :posts="posts" />
  </div>
  <div v-if='!postsWithTag.length && !error'>
    Loading ...
    <Spinner />
  </div>
</template>

<script>

import { ref, computed } from 'vue'

import getPosts from '../composables/getPosts'
import PostList from '../Components/PostList.vue'
import Spinner from '../Components/Spinner.vue'
import TagCloud from '../Components/TagCloud.vue'
import { useRoute } from 'vue-router'
export default {

  components: {
    PostList,
    Spinner,
    TagCloud
  },

  setup() {

    const route = useRoute()
    const { load, posts, error } = getPosts()

    load()

    const postsWithTag = computed(() => posts.value.filter(post => post.tags.includes(route.params.tag))) 

    return {
      posts, error, postsWithTag

    }
  }

}
</script>

<style>

</style>