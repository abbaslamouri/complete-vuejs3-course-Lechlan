<template>
<Card v-for='post in store.state.posts' :key='post.id' @click='click(post)' class='card'>
      <template v-slot:title>{{ post.title }}</template>
      <template v-slot:content>{{ post.content }}</template>
      <template v-slot:description><Controls :post='post' @setHashtag='setHashtag'/></template>
    </Card>
    Current {{currentTag}}
</template>

<script>
import { ref } from 'vue'
import { store } from './store'
import Card from '../pokemon/components/Card.vue'
import Controls from './components/Controls.vue'

export default {

  components: {
    Card,
    Controls,
  },

  setup() {

    const currentTag = ref()
    const setHashtag = (hashtag) => {
      currentTag.value = hashtag
    }

    return { store, setHashtag, currentTag }

  }

}
</script>

<style scoped>

</style>