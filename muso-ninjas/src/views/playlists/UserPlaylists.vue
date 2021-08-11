<template>
  <div v-if="playlists" class="user-playlists">
    <ListView :playlists="playlists" />
  </div>
  <div v-if="error" class="error">{{ error }}</div>
</template>

<script>

import ListView from "../../components/ListView.vue"
import getCollection from "../../composables/getCollection"
import getUser from "../../composables/getUser"

export default {

  components: {ListView},

  setup() {
    const { user } = getUser()
    const { documents: playlists, error } = getCollection("playlists", ["userId", "==", user.value.uid])

    return {playlists, error}
  }


}
</script>

<style scoped>
  h2 {
    padding-bottom: 10px;
    margin-bottom: 30px;
    border-bottom: 1px solid var(--secondary)
  }
  .btn {
    margin-top: 20px;
  }
</style>