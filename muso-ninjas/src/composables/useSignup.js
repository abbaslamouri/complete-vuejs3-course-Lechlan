import { ref } from "vue"
import { auth } from "../firebase/config"

const error = ref(null)
const isPending = ref(false)


const signup = async (email, password, displayName) => {

  error.value = null
  isPending = true

  try {
    const res = await auth.createUserWithEmailAndPassword (email, password)
    if (!res) throw new Error ("could not complete the signup")
    await res.user.updateProfile({ displayName })
    error.value = null
    isPending = false

    return res
  } catch (err) {
    console.log(err.message)
    error.value = err.message
    isPending = false

  }

}

const useSignup = () => {
  return {signup, isPending, error}
}

export default useSignup