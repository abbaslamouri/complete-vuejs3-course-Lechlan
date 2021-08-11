<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <h4>Create a New Playlist</h4>
      <input type="text" required placeholder="Playlist title" v-model="title">
      <textarea required placeholder="Playlist description..." v-model="description"></textarea>
      <!-- upload playlist image -->
      <label>Upload Playlist Cover Image</label>
      <input type="file" @change="handleFileChange">
      <div class="error">{{ fileError }}</div>
      <div class="error"></div>
      <button v-if="!isPending">Create</button>
      <button v-else disabled>Saving ...</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import useStorage from "../../composables/useStorage"
import useCollection from "../../composables/useCollection"
import getUser from "../../composables/getUser"
import { timestamp } from "../../firebase/config"
import { useRouter } from 'vue-router'
export default {
  setup() {

    const router = useRouter() 
    const { uploadImage, url, filePath } = useStorage()
    const { addDoc, error } = useCollection("playlists")
    const { user } = getUser()
    const title = ref('')
    const description = ref('')
    const file = ref(null)
    const fileError = ref(null)
    const isPending = ref(false)

    // Allowed file types
    const types = ["image/png", "image/jpeg"]

    const handleSubmit = async () => {
      if(file.value) {
        isPending.value = true
        await uploadImage(file.value)
        const res = await addDoc ({
          title: title.value,
          description: description.value,
          userId: user.value.uid,
          userName: user.value.displayName,
          coverUrl: url.value,
          filePath: filePath.value,
          songs: [],
          createdAt: timestamp()
        })
        
        isPending.value = false
        if (!error.value ) {
          // console.log("RES", res)
          router.push({name: 'PlaylistDetails', params: {id: res.id}})
        }
      }
    }

    const handleFileChange = (event) => {
      const selected = event.target.files[0]
      if (selected && types.includes(selected.type)) {
        file.value = selected
        fileError.value = null
      } else {
        file.value = null
        fileError.value = "please selected a valid image file (png or jpeg)"
      }

    }
    
    return { title, description, handleSubmit, handleFileChange, fileError, isPending }
  }
}
</script>

<style>
  form {
    background: white;
  }
  input[type="file"] {
    border: 0;
    padding: 0;
  }
  label {
    font-size: 12px;
    display: block;
    margin-top: 30px;
  }
  button {
    margin-top: 20px;
  }
</style>