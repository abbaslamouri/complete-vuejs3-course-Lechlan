import { createStore } from "vuex"
import { testPosts } from '../microblog/testPosts'

const delay = () => new Promise(res => setTimeout(res, 1000))

const posts = {
  namespaced: true,
  state() {
    return {
      postId: null,
      allPosts: []
    }
  },

  mutations: {
    setId(state, postId){
      state.postId = postId
    },

    setPosts(state, posts){
      state.allPosts = posts
    }
  },

  actions: {
    async fetch(ctx, payload){
      await delay()
      console.log(payload)
      ctx.commit('setPosts', testPosts)
    }
  },

  getters: {
    current(state) {
      return state.allPosts.find( el => parseInt(el.id) ===  parseInt(state.postId))
    } 
  }

}

export const store = createStore( { 
  modules: {
    posts,
  }
})