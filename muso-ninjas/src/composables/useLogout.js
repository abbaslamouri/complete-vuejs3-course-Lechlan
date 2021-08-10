import { ref } from "vue"
import { auth } from "../firebase/config"

const error = ref(null)
const isPending = ref(false)



const logout = async () => {

  error.value = null
  isPending = true

  try {
    await auth.signOut()
    isPending = false

  } catch (err) {
    console.log(err.message)
    error.value = err.mesage
    isPending = false

  }

}

const useLogout = () => {
  return {logout, isPending, error}
}

export default useLogout