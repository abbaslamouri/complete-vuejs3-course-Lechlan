<template>
   <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click='deletePost'>Delete Post</button>
  </div>
  <div v-if='!post && !error'>
    Loading...
    <Spinner />
  </div>
</template>

<script>
import getPost from '../composables/getPost'
import Spinner from '../Components/Spinner.vue'
import { useRoute, useRouter } from 'vue-router'
import { db } from '../firebase/config'
export default {

  components: {Spinner},
  props: ['id'],
  setup(props) {
    const route = useRoute()
    const router = useRouter()
    const { load, post, error,  } = getPost(route.params.id)
    load()

    const deletePost = async () => {
      await db.collection('posts').doc(props.id).delete()
      router.push({name: "Home"})
    }

    console.log(route)
    return { post, error, deletePost }
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