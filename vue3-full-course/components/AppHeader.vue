<template>
<div class='header'>
  <router-link v-for='link in links' :key='link.to' :to='link.to'>{{ link.title }}</router-link>
  <a href="#" @click='login'>Login</a>
</div>
    
</template>

<script>

import { reactive, ref } from 'vue'

export default {

  setup(props, ctx) {

    const links = reactive([
      {to: '/', title: 'Home'},
      {to: '/heroes', title: 'Heroes'},
      {to: '/calendar', title: 'Calendar'},
      {to: '/markdown', title: 'Markdown'},
      {to: '/slider', title: 'Slider'},
    ])

    const login = () => {
      ctx.emit ('toggleModal', true)
    } 

    return {
      links,
      login
      }
  }

}
</script>

<style scoped>

.header {
  background-color: aquamarine;
  padding: 1rem;
}

.header a {
  margin-right:1rem;
}

</style>