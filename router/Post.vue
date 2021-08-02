<template>
  <h1>{{ post.title }}</h1>
  <div>{{post.content }}</div>
</template>

<script>
import { computed } from 'vue'
import {useRoute} from 'vue-router'
import { usePosts} from './usePosts'
export default {
  setup() {

    const postStore = usePosts()
    const post = computed( () => postStore.posts.value.find( el => parseInt(el.id) === parseInt(useRoute().params.id, 10)))

    return { post }

  },
}

</script>
