<template>
  <div class="navbar">
    <nav>
      <router-link :to="{ name: 'Home' }"><img src="../assets/ninja.png"/></router-link>
      <h1><router-link :to="{ name: 'Home' }">Muso Ninjas</router-link></h1>
      <div class="links">
        <button @click='handleLogout'>Logout</button>
        <router-link class="btn" :to="{ name: 'Signup' }">Signup</router-link>
        <router-link class="btn" :to="{ name: 'Login' }">Login</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import useLogout from '../composables/useLogout'
export default {

  setup () {

    const {logout, isPending, error} = useLogout()

    const handleLogout = () => {
      logout()
      if (!error.value ) console.log('User logged out succesfully')
    }



    return {handleLogout, isPending, error }
  }
}
</script>

<style scoped>
  .navbar {
    padding: 16px 10px;
    margin-bottom: 60px;
    background: white;
  }
  nav {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  nav img {
    max-height: 60px;
  }
  nav h1 {
    margin-left: 20px;
  }
  nav .links {
    margin-left: auto;
  }
  nav .links a, button {
    margin-left: 16px;
    font-size: 14px;
  }
</style>