<template>
<h1>Markdown App</h1>
  <div class='markdown-container'>
    <article class="left"><textarea :value='text' @input='update'></textarea></article>
  <article class="right" v-html='markedText'></article>
  </div>
</template>

<script>

import { ref, computed } from 'vue'
import marked from 'marked'

import debounce from '../composables/useBounce'

export default {

  setup () {
    const text = ref('')

    const update = (event) => {
      const task = () => {text.value = event.target.value}
      debounce (task)
    }

    return { 
      text,
      update,
      markedText: computed(() => marked(text.value))
    }
  }

}
</script>

<style scoped>
  .markdown-container {
    display:grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
  }
  
  .markdown-container textarea {
    width:90%;
    height: 90%;
  }

</style>