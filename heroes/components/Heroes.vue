<template>
  <ul>
    <li v-for='(hero, index) in heroes' :key='index'>
      <div>{{ hero.name }} <button @click='removeHero(hero)'> X </button></div>
    </li>
  </ul>
  <p>Hero Count: {{ heroCount }}</p>
  <form @submit.prevent='addNewHero'>
    <input v-model.trim='newHero' placeholder='Type a hero name here'/>
    <button type='submit' :disabled='disabled'>Add New Hero</button>
  </form>
</template>

<script>
import { ref, computed } from 'vue'

export default {

  setup() {
    const heroes = ref([
      {name: 'Supergirl'},
      {name: 'Superman'},
      {name: 'Flash'},
      {name: 'Arrow'},
    ])
    const newHero = ref("")
 
    const addNewHero = () => {
      heroes.value.unshift({name: newHero.value})
      newHero.value = null
    }

    const removeHero = (hero) => {
      heroes.value = heroes.value.filter( el => el !== hero)
    }


    return {
      heroes,
      newHero,
      addNewHero,
      removeHero,
      disabled: computed(() => newHero.value ? false : true),
      heroCount: computed(() => heroes.value.length )
    }
  }

}
</script>

<style>

</style>