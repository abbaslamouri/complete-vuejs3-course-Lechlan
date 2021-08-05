<template>
<h1>{{ title }}</h1>
  <input type="text" ref='inputRef'>
  <button @click='handleClick'>Click me</button>
  <teleport to='#my-nice-modal'>
    <Modal v-if='showModal' theme='light' @closeModal='closeModal'>
      <template #header>
        <h1>Login</h1>
      </template>
      <template #default>
        <form @submit.prevent='submit'>
          <div class="form-group">
            <label for="">Email</label>
            <input v-model='username' type="text" placeholder='Email'>
          </div>
          <div class="form-group">
            <label for="">Password</label>
            <input v-model='password' type="password" placeholder='Password'>
          </div>
          <button class='submit-btn' type='submit'>Login</button>
        </form>
      </template>
      <template #footer>
        <p>footer</p>
      </template>
    </Modal>
  </teleport>
  <button @click='toggleModal'>Toggle Modal</button>
</template>

<script>

import { ref, onMounted } from 'vue'
import Modal from './Components/Modal.vue'

export default {
  name: 'App',

  components:{ Modal },

  setup() {
    const title = ref('My First Vue.js 3 App')
    const inputRef = ref(null)
    const showModal = ref(false)
    onMounted (() => {
      inputRef.value.focus()
    })
    const handleClick = () => {
      console.log(inputRef.value)
      inputRef.value.classList.add('active')
    }
    const toggleModal = () => {
      showModal.value = ! showModal.value
    }
    const closeModal = (target) => {
       showModal.value = false 
    }
    return {
      title,
      header,
      text,
      showModal,
      toggleModal,
      closeModal,
      inputRef,
      handleClick,
    }
  }

}
</script>

<style lang='scss'>

  .active {
    border: 1px red solid;
  }

</style>