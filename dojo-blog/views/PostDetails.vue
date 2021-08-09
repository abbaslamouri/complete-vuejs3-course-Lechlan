<template>
   <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
  </div>
  <div v-if='!post && !error'>
    Loading...
    <Spinner />
  </div>
</template>

<script>
import getPost from '../composables/getPost'
import Spinner from '../Components/Spinner.vue'
import { useRoute } from 'vue-router'
export default {

  components: {Spinner},
  props: ['id'],
  setup(props) {
    const route = useRoute()
    const { load, post, error,  } = getPost(route.params.id)
    load()

    console.log(route)
    return { post, error }
  },
}
</script>

<style scoped>
  .tags a {
    margin-right: 10px;
  }
  .post {
    max-width: 1200px;
    margin: 0 auto;
  }
  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }
  .pre {
    white-space: pre-wrap;
  }
</style>