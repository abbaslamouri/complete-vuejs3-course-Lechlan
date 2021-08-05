<template>
<div v-if='projects.length' class='home'>
  <h1>Projects</h1>
  <div v-for="project in projects" :key="project.id" class="project">
    <SingleProject :project='project' />
    <!-- <router-link :to="{name: 'projctDetails', params: { id: projct.id }}"> -->
      
    <!-- </router-link> -->
  </div>
</div>
<div v-else>Loading projects ...</div>
</template>

<script>
import { ref, onMounted } from 'vue'
import SingleProject from '../Components/SingleProject.vue'
export default {

  components: { SingleProject },

  setup() {

    const projects = ref([])

    onMounted( async() => {
      const response = await fetch('http://localhost:3001/projects')
      projects.value = await response.json()
    })


    return {
      projects,
        
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