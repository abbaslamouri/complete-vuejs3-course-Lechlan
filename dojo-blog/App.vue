<template>
  <NavBar />
  <router-view/>
</template>

<script>
import NavBar from './Components/NavBar.vue'

export default ({

  components: {
    NavBar
  },

  setup() {
    
  },
})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>