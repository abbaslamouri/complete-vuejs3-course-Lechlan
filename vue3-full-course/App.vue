<template>
  <AppHeader />
  <router-view></router-view>
</template>

<script>

import AppHeader from './components/AppHeader.vue'

export default {

  components: {
    AppHeader,
  },

  setup() {

    return {
    }
  }

}
</script>

<style scoped>

</style>