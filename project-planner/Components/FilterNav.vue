<template>
  <nav class="filter-nav">
    <button @click="updateFilter('all')" :class="{ active: current === 'all'}" >View all</button>
    <button @click="updateFilter('completed')" :class="{ active: current === 'completed'}" >Completed</button>
    <button @click="updateFilter('ongoing')" :class="{ active: current === 'ongoing'}" >Ongoing</button>
  </nav>
</template>

<script>

import { ref } from 'vue'

export default {

  props: {
    current: {
      type: String
    }
  },

  setup(props, ctx) {

    const updateFilter = (by) => {
      ctx.emit('filterChange', by)
    }


    return {
      updateFilter,

    }
  }

}
</script>

<style>
.filter-nav button {
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}
.filter-nav button.active {
  color: #555;
}
</style>