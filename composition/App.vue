<template>
  Composition
  <div>{{ msg }}</div>
  <input v-model='msg2' /> {{ msg2 }}
  <button @click='changeMesage'>Change message</button>
  <button @click='increase'>{{ count }}</button>
   <button @click='count1++'>Count1:{{ count1 }}</button>
   <button @click='count2++'>Count2:{{ count2 }}</button>
  <button @click='increment("a")'>{{ numbers.a }}</button>
  <button @click='increment("b")'>{{ numbers.b }}</button>
  <p>{{ total }}</p>
  <p>CountTota; = {{ countTotal }}</p>

  <hr>

  <div v-for='item in history' :key='item'>{{ item}}</div>


</template>

<script>

import { ref,reactive, computed, watch, watchEffect } from 'vue'
import { useCounts } from './useCounts'
export default {
  setup() {

    const msg = 'Hello World'
    const msg2 = ref('hello World again') // use ref with primitive values
     const changeMesage = () => {
      msg2.value = "another message"
    }

    const count = ref(0)
     const increase  = () => {
      count.value++
    }
    const numbers = reactive({a:2, b:4}) // Use reacive with objects
     
    const increment = (n) => {
      numbers[n]++
    }

    const total = computed(() => count.value + numbers.a + numbers.b)

    watch(count, (newVal) => {
      console.log('count', newVal)
    }, {
      immediate:true
    })

    watch(numbers, (newVal) => {
      console.log(`a: ${newVal.a} - b: ${newVal.b}`)
    })

    watchEffect(() => {
      console.log('numbers.a', numbers.a)
    })

    // newVal and oldVal only used with ref not with reactive
    watch(count, (newVal, oldVal) => {
      console.log(`Old: ${oldVal} - New: ${newVal}`)
    })


    

  

    return {msg, msg2, count, increase, changeMesage, numbers, increment, total, ...useCounts()}

  }
}
</script>

<style scoped>

</style>