<template>
  <form @submit.prevent='submit'>
    <label>Title:</label>
    <input v-model='title' type="text" reuquired />
    <label>Details:</label>
    <textarea v-model='details' required></textarea>
    <button>Update Project</button>
  </form>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {

  props: {
    id: {
      type: String
    }
  },

  setup(props, ctx) {

    const router = useRouter()
    const title = ref('')
    const details = ref('')
    const baseUri = ref(`http://localhost:3001/projects/`)

    onMounted( async() => {
      const response = await fetch(`${baseUri.value}${props.id}`)
      const project = await response.json()
      title.value = project.title
      details.value = project.details
    })

    const submit = async () => {
      const response = await fetch(`${baseUri.value}${props.id}`, 
        {method: 'PATCH', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title: title.value, details: details.value})
      })
      if ( response.status === 200 )router.push({name: 'Home'})
    }

    return {
      title,
      details,
      submit

    }
  }

}
</script>

<style lang='scss' scoped>
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