<template>
  <Layout>

    <template v-slot:header>
      <h1>Photo Album</h1>
    </template>

    <template v-slot:sidebar>
      <Album v-for='album in albums' :key='album.id' :album='album' />
    </template>

    <template v-slot:content>
      <router-view />
    </template>

  </Layout>
</template>

<script>
import { computed, onMounted} from 'vue'
import { useStore } from 'vuex'
import Layout from './Layout.vue'
import Album from './Album.vue'
export default {

  components: {
    Layout,
    Album
  },

  setup() {

    const store = useStore()

    onMounted(() => {
      store.dispatch('albums/fetch')
    })

    const albums = computed(() => store.state.albums.all)
    // const photos = computed(() => store.state.photos.all)


    return {
      albums,
      // photos
    }
  }

}
</script>

<style scoped>

</style>