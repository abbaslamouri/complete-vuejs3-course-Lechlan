import { ref } from 'vue'
import { db } from '../firebase/config'

const getPosts = () => {
  const posts = ref([])
  const error = ref('')

  const load = async() => {
    try {

      const res  = await db.collection("posts").orderBy('createdAt', 'desc').get()
      posts.value = res.docs.map(doc => {
        return {...doc.data(), id: doc.id}
      })

    } catch (err) {
      error.value = err.message
    }
  }

  return {load, posts, error}
  
}

export default getPosts