<template>
<FilterNav @filterChange='filterProjects' :current='current'/>
<div v-if='filteredProjects.length' class='home'>
  
  <div v-for="project in filteredProjects" :key="project.id">
    <SingleProject :project='project' @deleteProject='deleteProject' @complete='complete' @added='projectAdded'/>
    <!-- <router-link :to="{name: 'projctDetails', params: { id: projct.id }}"> -->
      
    <!-- </router-link> -->
  </div>
</div>
<div v-else>Loading projects ...</div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import SingleProject from '../Components/SingleProject.vue'
import FilterNav from '../Components/FilterNav.vue'
export default {

  components: { SingleProject, FilterNav },

  setup() {

    const projects = ref([])
    const current = ref('all')

    onMounted( async() => {
      const response = await fetch('http://localhost:3001/projects')
      projects.value = await response.json()
    })

    const deleteProject = (id) => {
      projects.value = projects.value.filter( item => item.id !== id)
    }

    const complete = (id) => {
      const project = projects.value.find( item => item.id === id)
      project.complete = ! project.complete
    }

    const projectAdded = (project) => {
      projects.value.push(project)
    }

    const filterProjects = (by) => {
      current.value = by
    }

    const filteredProjects = computed(() => {

      if (current.value === 'completed') return projects.value.filter(item => item.complete)
      if (current.value === 'ongoing') return projects.value.filter(item => !item.complete) 
      return projects.value 
    })

          



    return {
      projects,
      deleteProject,
      complete,
      projectAdded,
      filterProjects,
      current,
      filteredProjects
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