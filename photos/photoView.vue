<template>
  <!-- <h1>{{photos}}</h1> -->
    <img v-for='photo in photos' :key='photo.id' :src="photo.thumbnailUrl" :alt="photo.title" width='200'>
</template>

<script>

import { computed, watchEffect } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default {

  setup() {

    const store = useStore()
    const route = useRoute()

    watchEffect( () => {
      if (! route.params.id) return
      const albumId = route.params.id
      store.dispatch('photos/getByAlbum', {albumId}  )
    })
    const photos = computed(() => store.state.photos.all)

    return {
    photos
    
    }
  }

}
</script>

<style scoped>

  img {
    margin-right:5px
  }
</style>