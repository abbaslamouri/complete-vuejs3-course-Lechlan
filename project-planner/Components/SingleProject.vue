<template>
<div class="project" :class='{complete: project.complete}'>
  <div class="actions">
    <h3 @click='showDetails = ! showDetails'>{{ project.title }}</h3>
    <div class="icons">
      <router-link :to='{name: "EditProject", params: { id: project.id }}'><span class="material-icons edit">edit</span></router-link>
      <span class="material-icons delete" @click='deleteProject(project)'>delete</span>
      <span class="material-icons done" @click='toggleComplete(project)'>done</span>
    </div>
  </div>
  <div v-if='showDetails' class='details'>
    <p>{{ project.details }}</p>
  </div>
      <p>{{project}}</p>

</div>
</template>

<script>

import { ref, onMounted } from 'vue'

export default {

  props:{
    project: {
      type: Object,
      required: true
    }
  },

  setup(props, ctx) {
        
    const showDetails = ref(false)
    const baseUri = ref(`http://localhost:3001/projects/`)

    const deleteProject = async (project) => {
      const response = await fetch(`${baseUri.value}${project.id}`, {method: 'DELETE'})
      if ( response.status === 200 ) ctx.emit('deleteProject', project.id)
    }

    const toggleComplete = async (project) => {
      const response = await fetch(`${baseUri.value}${project.id}`, 
        {method: 'PATCH', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({complete: ! project.complete})
      })
      if ( response.status === 200 ) ctx.emit('complete', project.id)
    }


    return {
      showDetails,
      deleteProject,
      toggleComplete
    }
  }

}
</script>

<style scoped lang='scss'>

  $red-color: red;
  $green-color: #00ce89;
  $grey-color: #444;

  .project {
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.05);
    border-left: 4px solid #e90074;

    &.complete {
      border-left: 4px solid #00ce89;
    }
  }
  h3 {
    cursor: pointer;
  }

  .actions {
    display:flex;
    align-items: center;
    justify-content: space-between;

    .material-icons {
      margin-left: 1rem;
      cursor:pointer;
      font-size:150%;
      
      &.delete {
        color: $red-color;

         &:hover {
          color: lighten($red-color, 20%)
        }
      
      }

      &.edit {
        color:$grey-color;

          &:hover {
          color: lighten($grey-color, 20%)
        }
      }

      &.done {
        color:$green-color;

          &:hover {
          color: lighten($green-color, 20%)
        }
      }

      

    }
  }
</style>