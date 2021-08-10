<template>
<router-view />
</template>

<script>

import Welcome from './views/Welcome.vue'
import Chatroom from './views/Chatroom.vue'

export default {

  components: { Welcome, Chatroom },
  setup() {


    return {}
  }
}


// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
