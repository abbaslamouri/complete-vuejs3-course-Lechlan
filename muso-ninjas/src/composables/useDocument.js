import { ref, watchEffect } from "vue"
import { db } from "../firebase/config"

const useDocument = (collection, id) => {
  const error = ref(null)
  const isPending = ref(false)
  const docRef = db.collection(collection).doc(id)

  const updateDoc = async(updates) => {

    isPending.value = true
    error.value = null

    try {
      const res = await docRef.update(updates)
      isPending.value = false
      return res
    } catch (err) {
      console.log(err.message)
      error.value = error.message
      isPending.value = false
    }

  }

  const deleteDoc = async() => {

    isPending.value = true
    error.value = null

    try {
      const res = await docRef.delete()
      isPending.value = false
      return res
    } catch (err) {
      console.log(err.message)
      error.value = error.message
      isPending.value = false
    }

  }

  return { deleteDoc, updateDoc, isPending, error }



}

export default useDocument