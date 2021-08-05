<template>
<div v-if='jobs.length'>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id" class="job">
    <router-link :to="{name: 'JobDetails', params: { id: job.id }}">
      <h2>{{ job.title }}</h2>
    </router-link>
  </div>
</div>
<div v-else>Loading jobs ...</div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  setup() {

    const jobs = ref([])

    onMounted( async() => {
      const response = await fetch('http://localhost:3001/jobs')
      jobs.value = await response.json()
    })


    return {
      jobs,
        
    }
  }
}
</script>

<style>
.job h2{
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
  }
  .job h2:hover {
    background: #ddd;
  }
  .job a{
    text-decoration: none;
  }
</style> 