import { ref, computed, watch, watchEffect } from 'vue'

export function useCounts() {

  const count1 = ref(0) 
  const count2 = ref(0)
  const history = ref([])

  const countTotal = computed(() => count1.value + count2.value)


  // newVal and oldVal only used with ref not with reactive
  watch([count1, count2], ([newCount1, newCount2], [oldCount1, oldCount2]) => {
    console.log(`oldCount1: ${oldCount1} - oldCount2: ${oldCount2}`)
    console.log(`newCount1: ${newCount1} - newCount2: ${newCount2}`)

    if (oldCount1 !== newCount1) history.value.push(`oldCount1: ${oldCount1} - newCount1: ${newCount1}`)
    if (oldCount2 !== newCount2) history.value.push(`oldCount2: ${oldCount2} - newCount2: ${newCount2}`)
  })

  return {count1, count2, countTotal, history}

}


