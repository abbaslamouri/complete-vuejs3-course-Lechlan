<template>
  <h1>Hero Count: {{ heroCount }}</h1>
  <div class='container'>
    <ul>
      <li v-for='(hero, index) in heroes' :key='index'>
        {{ hero.name }} <button @click='removeHero(hero)'> X </button>
      </li>
    </ul>
  </div>
  <form @submit.prevent='addNewHero'>
      <input v-model.trim='newHero' placeholder='Type a hero name here'/>
      <button type='submit' :disabled='disabled'>Add New Hero</button>
    </form>
</template>

<script scoped>
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

.container {
  display:flex;
  justify-content: center;
  background-color: aqua;
  width:50%;
  margin:1rem;
}
.container ul {
  width:100%;
}

.container li {
  width:100%;
  display:flex;
  justify-content: space-between;
}

</style>