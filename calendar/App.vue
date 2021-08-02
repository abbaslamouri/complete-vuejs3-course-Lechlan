<template>

<AppHeader />
  <Calendar />
</template>

<script>

import { ref, computed } from 'vue'
import AppHeader from './components/AppHeader.vue'
import Calendar from '../vue3-full-course/pages/Calendar.vue'

export default {

  components: {
    AppHeader,
    Calendar
  },

  setup() {
    
  


    return {
      
    }
  }

}
</script>

<style scoped>

</style>