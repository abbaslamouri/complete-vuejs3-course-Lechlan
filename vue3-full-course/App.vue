<template>
  <AppHeader @toggleModal='toggleModal' />
  <router-view></router-view>
  <teleport to='#my-nice-modal'>
    <LoginModal theme='' :showModal='showModal' @toggleModal='toggleModal'>
      <template #header>
        <h1>Login</h1>
      </template>
      <template #default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>
      <template #footer>
        <p>Here's the footer</p>
      </template>
    </LoginModal>
  </teleport>
</template>

<script>

import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import LoginModal from './components/LoginModal.vue'

export default {

  components: {
    AppHeader,
    LoginModal
  },

  setup() {

    const showModal = ref(false)

    const toggleModal = (event) => {
      showModal.value = event
    }

    return {
      showModal,
      toggleModal
    }
  }

}
</script>

<style lang='scss'>
  body {
    margin:0;
    padding:0;
  }
</style>