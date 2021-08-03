<template>
  <h1>Slider Carousel</h1>
  <div class='slider-carousel'>
    <div class='slider' v-for='(slide, index) in slides' :key='index' >
    <transition name="slide">
      <div class='slide' v-if='currentSlider === index' :style='{backgroundColor: slide.bgColor}'></div>
    </transition>
  </div>
  <div class='dots'>
    <div v-for='(slide, index) in slides' :key='index'>
      <div class='dot' :style='currentSlider === index ? {backgroundColor: "#CCC"} : {backgroundColor: "#444"}' @click='selectSlide(index)'></div>
    </div> 
  </div>
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
      }, 4000)
    })

    onBeforeUnmount( () => {
      clearInterval (interval.value)
    })

    const selectSlide = (index) => {
      currentSlider.value = index
      clearInterval (interval.value)
      interval.value = setInterval(() => {
        currentSlider.value = (currentSlider.value === 2) ? 0 : currentSlider.value + 1
      }, 4000)
    }

    return {
      slides,
      currentSlider,
      selectSlide
    }
  }

}
</script>

<style>

.slider-carousel {
  display:grid;
  grid-template-columns: 1fr;
  grid-template-rows: 350px;
  /* position: relative;
  width:100%;
  margin:0;
  padding:0;
  height:350px; */

  /* height:350px; */
  /* position:relative */

  
}

.slider {
  grid-column: 1/2;
  grid-row: 1/2;
}

.slide {
  height:100%; 
}

.dots {
  grid-column: 1/2;
  grid-row: 1/2;
  /* background-color:green; */
  display:flex;
  justify-content: center;
  align-self: end;
  z-index:10
}

.dot {
  width:1rem;
  height:1rem;
  background-color:#ccc;
  border-radius:100%;
  margin:.5rem;
  cursor: pointer;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 1s ease;
}

.slide-enter-from {
  transform: translateX(-100%)
}

.slide-leave-to {
  transform: translateX(100%)
}

</style>