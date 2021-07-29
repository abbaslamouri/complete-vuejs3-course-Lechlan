<template>
  
  <div class="card">
    <div class="title">{{ pokemon.name }}</div>
    <div class="content"><img :src="pokemon.sprite" alt=""></div>
    <div class="description" v-for='type in pokemon.types' :key='type'>
      {{ type }}
    </div>
  </div>

</template>

<script>
export default {

  props: [pokemon],

}
</script>

<style>

</style>