<template>
  <h1>Slider Carousel</h1>
  <div v-for='(slide, index) in slides' :key='index' >
    <div class='slide' v-if='currentSlider === index' :style='{backgroundColor: slide.bgColor}'></div>
  </div>
</template>

<script>

import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

export default {

  setup() {

    const currentSlider = ref(0)
    const interval = ref('')
    const slides = ref([
      {bgColor: 'red'},
      {bgColor: 'blue'},
      {bgColor: 'teal'},
    ])

    onMounted( () => {
      interval.value = setInterval(() => {
        currentSlider.value = (currentSlider.value === 2) ? 0 : currentSlider.value + 1
      }, 1000)
    })

    onBeforeUnmount( () => {
      clearInterval (interval.value)
    })

    return {
      slides,
      currentSlider,
    }
  }

}
</script>

<style>

.slide {
  height:350px;
  width:100%;
}

</style>