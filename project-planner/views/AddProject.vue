<template>
  <form @submit.prevent='submit'>
    <label>Title:</label>
    <input v-model='title' type="text" reuquired />
    <label>Details:</label>
    <textarea v-model='details' required></textarea>
    <button>Add Project</button>
  </form>
</template>

<script>

import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {

  setup(props, ctx) {

    const router = useRouter()
    const title = ref('')
    const details = ref('')
    const baseUri = ref(`http://localhost:3001/projects/`)


    const submit = async() => {

      const project = {
        title: title.value,
        details: details.value,
        complete: false
      }
      const response = await fetch(`${baseUri.value}`, 
        {method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(project)
      })
      if ( response.status === 201 ) ctx.emit('added', project)
      router.push({name: 'Home'})
    }



    return {
      title,
      details,
      submit

    }
  }

}
</script>

<style scoped>
form {
    background: white;
    padding: 20px;
    border-radius: 10px;
  }
  label {
    display: block;
    color: #bbb;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    margin: 20px 0 10px 0
  }
  input {
    padding: 10px;
    border: 0;
    border-bottom: 1px solid #ddd;
    width: 100%;
    box-sizing: border-box;
  }
  textarea {
    border: 1px solid #ddd;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    height: 100px;
  }
  form button {
    display: block;
    margin: 20px auto 0;
    background: #00ce89;
    color: white;
    padding: 10px;
    border: 0;
    border-radius: 6px;
    font-size: 16px;
  }

</style>