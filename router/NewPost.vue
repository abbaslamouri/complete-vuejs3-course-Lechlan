<template>
  <h3>New Post</h3>
  <form @submit.prevent='submit'>
    <input v-model='newPost.title' placeholder="Title">
    <br>
    <textarea v-model='newPost.content' cols="50" rows="10" />
    <br>
    <button>Submit</button>
  </form>
</template>

<script>

import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { usePosts} from './usePosts'


export default {
  setup() {

    const router = useRouter()

    const postStore = usePosts()

    const newPost = reactive({
      title: null,
      content: null
    })


    const submit = () => {
      newPost.id = postStore.posts.value.length + 1
      postStore.addPost(newPost)
      router.push(`/posts/${newPost.id}`)
    }

    return { newPost, submit }
    
  },
}
</script>
