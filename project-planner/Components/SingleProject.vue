<template>
<div class="project">
  <div class="actions">
    <h3 @click='showDetails = ! showDetails'>{{ project.title }}</h3>
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

  setup(props) {
        
    const showDetails = ref(false)


    return {
      showDetails,
      
    }
  }

}
</script>

<style scoped>
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
</style>