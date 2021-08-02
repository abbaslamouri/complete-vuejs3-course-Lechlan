<template>
  <section class='calendar'>
    <h2 class='current-month'>{{currentMonthName}}</h2>
    <h2 class='current-year'>{{currentYear}}</h2>
    <p v-for='day in days' :key='day'>{{ day }}</p>
    <p v-for='num in startDay()' :key='num'></p>
    <p v-for='num in daysInMonth()' :key='num' :class='{highlight : isCurrentDate(num)}'>{{ num }}</p>
    <button class='prev' @click='prev'>Previous</button>
    <button class='next' @click='next'>Next</button>
  </section>
</template>

<script>
import { ref, computed } from 'vue'

export default {

  setup() {

    const currentYear = ref(new Date().getFullYear())
    const currentMonth = ref(new Date().getMonth() + 1)
    // const currentDate = ref(new Date().getUTCDate())
    // const currentMonthName = new Date().toLocaleString('default',{month: 'long'})
    const days = ref(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])

    const daysInMonth = () => {
      return new Date(currentYear.value, currentMonth.value + 1, 0).getDate()
    }

    const startDay = () => {
      return new Date(currentYear.value, currentMonth.value - 1, 1).getDay()
    }

    const next = () => {
      if (currentMonth.value === 12) {
        currentMonth.value = 1
        currentYear.value++
      } else {
      currentMonth.value++
      }
    }

    const prev = () => {
      if (currentMonth.value === 1) {
        currentMonth.value = 12
        currentYear.value--
      } else {
      currentMonth.value--
      }
    }

    const isCurrentDate = (num) => {
      return new Date(currentYear.value, currentMonth.value - 1, num ).toDateString() === new Date().toDateString()
    }

    return {
     days,
     currentMonth,
     currentMonthName: computed( () => new Date(currentMonth.value, currentMonth.value-1).toLocaleString('default',{month: 'long'})),
     currentYear,
     daysInMonth,
     startDay,
     next,
     prev,
    // currentDate,
    isCurrentDate
    }
  }

}
</script>

<style scoped>

.calendar {
 display:grid;
 justify-content: center;
 justify-items: center;
 grid-template-columns: repeat(7, 50px)
}

.current-month, .prev {
  grid-column: 1/2;
  /* justify-self: start; */
}

.current-year, .next {
  grid-column: 7/8;
  /* justify-self: start; */
}

.highlight {
  color:orangered;
  /* font-size:110%; */
  font-weight: bold;
}

</style>