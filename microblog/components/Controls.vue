<template>
  <button @click='onLikePost'>Like</button>
  {{ post.likes }}
  <Hashtag v-for='hashtag in post.hashtags' :key='hashtag' :hashtag='hashtag' />
</template>

<script>

import { store } from '../store'
import Hashtag from './Hashtag.vue'

export default {

   components: {
    Hashtag,
  },

  //  emits: [
  //   'setHashtag'
  // ],

  props: {
    post: {
      type: Object,
      required: true
    }
  },

  setup(props, ctx) {


    const onLikePost = () => {
      store.incrementLike(props.post)
    }
    // const setHashtag = (hashtag) => {
    //   ctx.emit('setHashtag', hashtag)
    // }

    return { onLikePost }


  }

}
</script>

<style scoped>

</style>