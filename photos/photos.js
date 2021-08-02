export const photos = {

  namespaced: true,

  state() {
    return {
      all: [],
      cache: {}

    }
  },

  mutations: {
    setPhotosForCurrentAlbum(state, {photos, albumId}){
      state.all = photos
      state.cache[albumId] = photos
    }

  },

  actions: {
    async getByAlbum(ctx, {albumId} ) {
      // if (ctx.state.cache[albumId]) ctx.commit('setPhotosForCurrentAlbum', {photos: ctx.state.cache[albumId], albumId})
      const photos = await (await window.fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)).json()
      ctx.commit('setPhotosForCurrentAlbum', {photos, albumId})
    }
  }
}