import { ref } from 'vue'
import { db } from '../firebase/config'

const getPost = (id) => {

  const post = ref(null)
  const error = ref(null)

  const load = async () => {
    try {

      const res  = await db.collection("posts").doc(id).get()

      if (! res.exists) throw Error (`Post with id=${id} does not exist` )

      post.value = {...res.data(), id: res.id}
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { load, post, error } 
}

export default getPost