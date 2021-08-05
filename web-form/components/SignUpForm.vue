<template>
  <form @submit.prevent='submit'>
    <label>Email</label>
    <input v-model='email' type="email" reuquired />
    <label>Password</label>
    <input v-model='password' type="password" reuquired />
    <div v-if='passwordError' class="error">{{ passwordError }}</div>
    <label>Role</label>
    <select v-model='role'>
      <option value="">Select Role</option>
      <option value="developer">Developer</option>
      <option value="designer">Designer</option>
    </select>
    <label>Skills</label>
    <input v-model='tempSkill' type="text" @keyup='addSkill'>
    <div class='pill' v-for='skill in skills' :key='skill' @click='removeSkill(skill)'>{{ skill }}</div>
    <div class="terms">
      <input v-model='terms' type="checkbox" required>
      <label>Accept terms and conditions</label>
    </div>
    <div>
      <input v-model='names' value='abbas' type="checkbox">
      <label>Abbas</label>
    </div>
    <div>
      <input v-model='names' value='youcef' type="checkbox">
      <label>Youcef</label>
    </div>
    <div>
      <input v-model='names' value='rachid' type="checkbox">
      <label>Rachid</label>
    </div>
    <div class="submit">
    <button>Create an account</button>
  </div>
  </form>
</template>

<script>
import { ref } from 'vue'
export default {

  setup() {
    const email = ref('')
    const password = ref('')
    const role = ref('')
    const terms = ref(false)
    const names = ref([])
    const tempSkill = ref('')
    const skills = ref([])
    const passwordError = ref('')

    const addSkill = (event) => {
      // console.log(event)
      if (event.key === ',' && tempSkill.value ) {
        const value = tempSkill.value.toLowerCase().split(',')[0]
        if (! skills.value.includes(value)) skills.value.push(value)
        tempSkill.value = ''
      }
    }

    const removeSkill = (skill) => {
      skills.value = skills.value.filter(item => item !== skill)
    }

    const submit = () => {
      passwordError.value =  password.value.length < 5 ? 'Password must be at least 6 characters long' : '' 
    }

    return {
      email,
      password,
      role,
      terms,
      names,
      tempSkill,
      skills,
      addSkill,
      removeSkill,
      submit,
      passwordError
    }
  }

}
</script>

<style>
  form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
  
  input[type='checkbox'] {
    display: inline-block;
    width:16px;
    margin: 0 16px 0 0;
    position: relative;
    top: 2px;
  }

  .pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding:.2rem .5rem;
    background-color: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
  }

  button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
    cursor: pointer;
  }
  .submit {
    text-align: center;
  }
  .error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  }


</style>