import { ref } from "vue"
import { auth } from "../firebase/config"

const error = ref(null)

const login = async (email, password) => {

  error.value = null
  try {
    const res = await auth.signInWithEmailAndPassword (email, password)
    if (!res) throw new Error ("could not complete the signup")
    error.value = null
    return res
  } catch (err) {
    console.log(err.message)
    error.value = "Incorrect login credentials"
  }

}

const useLogin = () => {
  return {login, error}
}

export default useLogin