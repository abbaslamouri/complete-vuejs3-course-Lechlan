import { ref } from 'vue'
import { db } from '../firebase/config'

const getPost = (id) => {

  const post = ref(null)
  const error = ref(null)

  const load = async () => {
    try {

      // simulate delay
      await new Promise( resolve => {
        setTimeout(resolve, 1000)
      })
      
      let response = await fetch('http://localhost:3001/posts/' + id)
      if (!response.ok) {
        throw Error('That post does not exist')
      }
      post.value =  await response.json()
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { load, post, error } 
}

export default getPost