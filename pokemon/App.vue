<template>
  <Cards :pokemons='pokemons' :selectedId='selectedId' @chosen='fetchEvolutions'/>
  <Cards :pokemons='evolutions' />
</template>



<script>
import Cards from '/components/Cards.vue'

const api = 'https://pokeapi.co/api/v2/pokemon'
const IDS = [1,4,7]

export default {

  components: {
    Cards
  },

  data() {
    return {
      pokemons:[],
      evolutions: [],
      selectedId: null
    }
  },

  async created() {
    this.pokemons = await this.fetchData(IDS)
  },

  methods: {
    async fetchData(ids) {
      const results =  await Promise.all( ids.map(id => window.fetch(`${api}/${id}`)) )
      const jsonRes = await Promise.all(results.map(data => data.json()))
      return await jsonRes.map( datum => ({
        id: datum.id,
        name: datum.name,
        sprite: datum.sprites.other['official-artwork'].front_default,
        types: datum.types.map(type => type.type.name),
      }))
    },

    async fetchEvolutions(pokemon) {
      this.selectedId = pokemon.id
      this.evolutions = await this.fetchData([pokemon.id + 1, pokemon.id + 2])
    }
  }

}
</script>



<style scoped>

  

</style>