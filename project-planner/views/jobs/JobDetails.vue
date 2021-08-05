<template>
<div v-if='Object.keys(job).length'>
  <h1>{{ job.title }}</h1>
  <p>The job id is {{ job.id }}</p>
  <p>{{ job.details }}</p>
</div>
<div v-else>
  Loading job....
</div>
</template>

<script>
import { ref, onMounted } from 'vue'

// import { useRoute } from 'vue-router'
export default {

  props: {
    id:{
      type: String
    }
  },

  setup(props) {

    const job = ref({})

    onMounted( async() => {
      const response = await fetch(`http://localhost:3001/jobs/${props.id}`)
      job.value = await response.json()

    })
    
    return {
      job
    }
  }
  
}
</script>

<style>

</style>