import { ref } from 'vue'

const timeout = ref('')

const debounce = (func, wait = 1000) => {
  clearTimeout(timeout)
  timeout.value = setTimeout(func, wait)
}


export default debounce 

