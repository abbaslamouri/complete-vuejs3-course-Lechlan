<template>

<AppHeader />
  <h1>Computed Full Name: {{fullName }} </h1>
  <h1>Computed First Name {{firstName}} </h1>
  <h1>Computed Last Name {{lastName}} </h1>
  <form>
    <input v-model.trim='fullName' placeholder='Enter Full Name'/>
  </form>
  <Heroes />
</template>

<script>

import { ref, computed } from 'vue'
import AppHeader from './components/AppHeader.vue'
import Heroes from './components/Heroes.vue'

export default {

  components: {
    AppHeader,
    Heroes
  },

  setup() {
    const firstName = ref('Abbas')
    const lastName = ref('Lamouri')

    const fullName = computed({
      get: () => `${firstName.value} ${lastName.value}`,
      set: (fullName) => {
        console.log(fullName.split(" ").length)
        if (fullName.split(" ").length !== 2) {
          firstName.value = ''
          lastName.value = ''
        } else {
          firstName.value = fullName.split(" ")[0]
          lastName.value = fullName.split(" ")[1]
        }
      }
    })


    return {
      firstName,
      lastName,
      fullName,
    }
  }

}
</script>

<style scoped>

</style>