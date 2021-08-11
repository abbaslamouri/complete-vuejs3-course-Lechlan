<template>
  <div v-if="playlists" class="playlists">
    <ListView :playlists="playlists" />
  </div>
  <div v-if="error" class="error">{{ error }}</div>
</template>

<script>

import getCollection from '../composables/getCollection'
import ListView from "./../components/ListView.vue"

export default {

  components: { ListView },

  setup() {
    const { documents: playlists, error } = getCollection("playlists")
  


  return { playlists, error }
  }

}
</script>

<style>

</style>