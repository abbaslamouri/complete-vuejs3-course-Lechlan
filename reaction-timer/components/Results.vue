<template>
  <div class = 'reactiontime'>
    Reaction Time: {{ score }} ms - {{ rank }}
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  props: ['score'],
  setup(props) {

    const rank = ref(null)

    onMounted( () => {
      
      if (props.score <= 250 ) rank.value = 'Ninja speed'
      if ( props.score > 250 &&  props.score <= 460 ) rank.value = 'Rapid reflexes'
      if (props.score > 460 ) rank.value = 'Snail pace'

    })

    return {
      rank

    }
  }
}
</script>

<style lang='scss' scoped>

.reactiontime {
  font-size: 150%;
  margin-top:2rem;
  color:crimson;
  font-weight:bold
}

</style>