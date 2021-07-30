<template>
  <div class="cards">
    <Card v-for='pokemon in pokemons' :key='pokemon.id' @click='click(pokemon)' :class='{opace: selectedId && pokemon.id !== selectedId}' class='card'>
      <template v-slot:title>{{ pokemon.name }}</template>
      <template v-slot:content><img :src="pokemon.sprite" alt=""></template>
      <template v-slot:description><div class="description" v-for='type in pokemon.types' :key='type'>{{ type }}</div></template>
    </Card>

    <Card v-for='evolution in evolutions' :key='evolution.id'>
      <template v-slot:title>{{ evolution.name }}</template>
      <template v-slot:content><img :src="evolution.sprite" alt=""></template>
      <template v-slot:description><div class="description" v-for='type in evolution.types' :key='type'>{{ type }}</div></template>
    </Card>
  </div>
</template>

<script>
import Card from '/components/Card.vue'

export default {

  components: {
    Card
  },

  props: {
    pokemons: {
      type: Array,
      default: []
    },
    selectedId: {
      type: Number,
      default: null
    }
  },

  methods: {
    click(pokemon) {
      this.$emit('chosen', pokemon)
    }
  }
  
}
</script>

<style scoped>
.opace {
    opacity:0.5;
  }

  .card:hover {
    opacity:1;
  }

  .cards {
    display:flex;
    justify-content: center;
  }

  img {
    width:100%;
  }
</style>