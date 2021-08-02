<template>
  <h1>Slider Carousel</h1>
  <div class='slider'>
    <div class="slider1" v-if='currentSlider === 0'></div>
    <div class="slider2" v-if='currentSlider === 1'></div>
    <div class="slider3" v-if='currentSlider === 2'></div>
  </div>
</template>

<script>

import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

export default {

  setup() {

    const currentSlider = ref(0)
    const interval = ref('')

    onMounted( () => {
      interval.value = setInterval(() => {
        currentSlider.value = (currentSlider.value === 2) ? 0 : currentSlider.value + 1
      }, 1000)
    })

    onBeforeUnmount( () => {
      clearInterval (interval.value)
    })

    return {
      currentSlider
    }
  }

}
</script>

<style>

.slider {
  position:relative;
}
.slider .slider1 {
  height:350px;
  width:100%;
  background-color: red;
  position:absolute;
}

.slider .slider2 {
  height:350px;
  width:100%;
  background-color: blue;
  position:absolute;
}

.slider .slider3 {
  height:350px;
  width:100%;
  background-color: teal;
  position:absolute;
}

</style>