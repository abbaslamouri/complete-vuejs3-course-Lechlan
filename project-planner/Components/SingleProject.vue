<template>
<div class="project">
  <div class="actions">
    <h3 @click='showDetails = ! showDetails'>{{ project.title }}</h3>
    <div class="icons">
      <span class="material-icons edit">edit</span>
      <span class="material-icons delete" @click='deleteProject(project)'>delete</span>
      <span class="material-icons done">done</span>
    </div>
  </div>
  <div v-if='showDetails' class='details'>
    <p>{{ project.details }}</p>
  </div>
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

    const deleteProject = (project) => {
      console.log(project)
      ctx.emit('delete', project.id)
    }


    return {
      showDetails,
      deleteProject
    }
  }

}
</script>

<style scoped lang='scss'>

$red-color: red;
$green-color: green;
$grey-color: #444;

.project {
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.05);
    border-left: 4px solid #e90074;
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