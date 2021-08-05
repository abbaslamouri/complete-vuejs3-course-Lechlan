<template>
<div class='main'>
  <h1>Reaction Timer</h1>
  <button class='play' @click='start' :disabled='isPlaying'>Play Game</button>
  <Block v-if='isPlaying' :delay='delay' @endGame='endGame'/>
  <Results v-if='score && !isPlaying' :score='score' />
</div>
</template>

<script>
import { ref } from 'vue'
import Block from './components/Block.vue'
import Results from './components/Results.vue'

export default {
  name: 'App',

  components: {
    Block,
    Results
  },

  setup() {

    const isPlaying= ref(false)
    const delay = ref(null)
    const score = ref(null)
    const start = () => {
      delay.value = 2000 + Math.random()*5000
      isPlaying.value = true
    }
    const endGame = (reactionTime) => {
      score.value = reactionTime
      isPlaying.value = false
    }

   


    return {
      isPlaying,
      delay,
      start,
      endGame,
      score
    }
  }

}
</script>

<style lang='scss'>


.main {
  display:flex;
  flex-direction: column;
  align-items: center;


  .play {
    cursor: pointer;
    background-color: green;
    color:white;
    padding:1rem 2rem;
    border-radius: 5px;
    border:none;
    outline: none;
  }
}


</style>