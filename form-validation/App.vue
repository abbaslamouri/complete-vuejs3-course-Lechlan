<template>

  <form @submit.prevent='submit'>

    <MyInput :type='username.type' name='username' :value='username.value' :rules='{required: true, min: 5}' :error='username.error' @update='update'/>
    <MyInput :type='password.type' name='password' :value='password.value' :rules='{required: true, min: 10}' :error='password.error' @update='update'/>
    <MyButton background='darkslateblue' color='white' :disabled='valid'/>

  </form>
  
</template>

<script>

import MyButton from '/components/MyButton.vue'
import MyInput from '/components/MyInput.vue'

export default {

  components: {
    MyButton,
    MyInput
  },

  data () {
    return {
      username: {
        type: 'text',
        value: '',
        error: ''
      },
       password: {
        type: 'password',
        value: '',
        error: ''
      }
    }
  },

  computed: {
    valid() {
      return this.username.error || this.password.error ? false : true
    }
  },

  methods: {
    update( {name, value, error}) {
      this[name].value = value
      this[name].error = error
    },

    submit($event) {
      console.log($event)
    }
  }


}
</script>

<style scoped>

  button {
    background:none;
    color:black;
    border:none;
    border-radius: 5px;
    padding:10px 40px;
    font-size:16px;
    cursor: pointer;
  }

  button:hover {
    filter: brightness(125%);
  }

   button:disabled {
    opacity:0.4;
  }


</style>