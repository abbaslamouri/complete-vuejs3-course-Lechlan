import { ref } from 'vue'
import { db } from '../firebase/config'

const getPosts = () => {
  const posts = ref([])
  const error = ref('')

  const load = async() => {
    try {

      // simulate delay
      await new Promise( resolve => {
        setTimeout(resolve, 1000)
      })
      
      const response = await fetch(`http://localhost:3001/posts`)
      if( !response.ok ) throw Error('No data available')
      posts.value = await response.json()
    } catch (err) {
      error.value = err.message
    }
  }

  return {load, posts, error}
  
}

export default getPosts