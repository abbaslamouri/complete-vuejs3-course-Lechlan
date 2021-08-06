<template>
  <NavBar />
  <router-view />
</template>

<script>

import { useRouter } from 'vue-router'
import NavBar from './Components/NavBar.vue'

export default {

  components: { NavBar },

  setup() {

    const router = useRouter()

    const redirect = (page) => {
      router.push({ name: page})
    }

    const back = () => {
      router.go(-1)
    }

    const forward = () => {
      router.go(1)
    }


    return {
      redirect,
      back,
      forward

    }
  }

}
</script>

<style>
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 960px;
  margin: 0 auto;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}
#nav a.router-link-exact-active {
  color: white;
  background: crimson;
}
button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>