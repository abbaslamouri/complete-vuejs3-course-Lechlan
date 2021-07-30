<template>
  <button>Like</button>
  {{ post.likes }}
  <Hashtag v-for='hashtag in post.hashtags' :key='hashtag' :hashtag='hashtag' @setHashtag='setHashtag' />
</template>

<script>

import Hashtag from './Hashtag.vue'

export default {

   components: {
    Hashtag,
  },

   emits: [
    'setHashtag'
  ],

  props: {
    post: {
      type: Object,
      required: true
    }
  },

  setup(props, ctx) {

    const setHashtag = (hashtag) => {
      ctx.emit('setHashtag', hashtag)
    }

    return { setHashtag}


  }

}
</script>

<style scoped>

</style>