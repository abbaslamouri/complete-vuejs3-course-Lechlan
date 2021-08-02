export const albums = {

  namespaced: true,

  state() {
    return {
      all: []
    }
  },

  mutations: {
    setAlbums(state, albums) {
      state.all = albums
    }

  },

  actions: {

    async fetch(ctx) {
      const res = await window.fetch('https://jsonplaceholder.typicode.com/albums')
      ctx.commit('setAlbums', await res.json())

    }

    
  }
}