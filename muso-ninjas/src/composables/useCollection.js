import { ref } from "vue"
import { db } from "../firebase/config"

const useCollection = (collection) =>{

  const error = ref(null)
  const isPending = ref(false)


  const addDoc = async(doc) => {
    error.value = null
    isPending = true
    try {
      await db.collection(collection).add(doc)
      isPending = false

    } catch (err) {
      console.log(err.message)
      error.value = err.message
      isPending = false
    }
  }

  return { addDoc, isPending, error }

}


export default useCollection