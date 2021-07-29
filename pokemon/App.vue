<template>

  <div class="cards">
    <Card />
   
  </div>
    
</template>

<script>

import Card from '/components/Card.vue'

const api = 'https://pokeapi.co/api/v2/pokemon'
const ids = [1,4,7]

export default {

  components: {
    Card
  },

  data() {
    return {
      pokemon:[],
    }
  },

  created() {
    this.fetchData()
  },

  methods: {
    async fetchData() {
      const results =  await Promise.all( ids.map(id => window.fetch(`${api}/${id}`)) )
      const jsonRes = await Promise.all(results.map(data => data.json()))
      this.pokemon = await jsonRes.map( datum => ({
        id: datum.id,
        name: datum.name,
        sprite: datum.sprites.other['official-artwork'].front_default,
        types: datum.types.map(type => type.type.name),
      }))
     console.log(this.pokemon)
    }
  }

}
</script>

<style scoped>

  .cards {
    display:flex;
    justify-content: center;
  }

  img {
    width:100%;
  }
  .card {
    border: 1px solid silver;
    border-radius: 8px;
    max-width: 200px;
    margin: 0 5px;
    cursor: pointer;
    box-shadow: 0px 1px 3px darkgrey;
    transition: 0.2s;
  }
  .title, .content, .description {
    padding: 16px;
    text-transform: capitalize;
    text-align: center;
  }
  .title, .content {
    border-bottom: 1px solid silver;
  }
  .title {
    font-size: 1.25em;
  }
  .card:hover {
    transition: 0.2s;
    box-shadow: 0px 1px 9px darkgrey;
  }
</style>