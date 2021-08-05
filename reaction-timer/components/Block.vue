<template>
  <div v-if='showBlock' class="block" @click='stopTimer'>Click me</div>
</template>

<script>

import { ref, onMounted } from 'vue'

export default {

  props: ['delay'],

  setup(props, ctx) {

    const showBlock = ref(false)
    const timer = ref(null)
    const reactionTime = ref(0)

    onMounted(() => {
      setTimeout(()=> {
        showBlock.value = ! showBlock.value
        startTimer()
      }, props.delay)
    })

    const startTimer = () => {
      timer.value = setInterval(() => {
        reactionTime.value += 10
      }, 10)
    }

    const stopTimer = () => {
      clearInterval(timer.value)
      ctx.emit('endGame', reactionTime.value)
    }

    return {
      showBlock,
      stopTimer,
      reactionTime
    }
  }

}
</script>

<style lang='scss' scoped>

.block {
  background-color: crimson;
  width: 20rem;
  height: 10rem;
  color:white;
  border-radius: 5px;
  display:flex;
  justify-content: center;
  align-items: center;
  margin-top:2rem;
}

</style>