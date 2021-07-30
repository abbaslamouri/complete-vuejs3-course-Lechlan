<template>
<input :value='currentTag' @input='setHashtag'>
<Card v-for='post in filteredPosts' :key='post.id' class='card'>
  <template v-slot:title>{{ post.title }}</template>
  <template v-slot:content>{{ post.content }}</template>
  <template v-slot:description><Controls :post='post'/></template>
</Card>
</template>

<script>
import { computed } from 'vue'
import { store } from './store'
import Card from '../pokemon/components/Card.vue'
import Controls from './components/Controls.vue'

export default {

  components: {
    Card,
    Controls,
  },

  setup() {

    const setHashtag = ($event) => {
      store.setHashtag($event.target.value)
    }

    return { 
      filteredPosts: computed(() => store.filteredPosts()), 
      currentTag: computed ( () => store.state.currentTag ),
      setHashtag
    }

  }

}
</script>

<style scoped>

</style>