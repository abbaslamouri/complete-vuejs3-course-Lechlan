import { reactive } from 'vue'
import { testPosts } from './testPosts'

class Store {
  constructor() {

    this.state = reactive({
      posts: testPosts,
      currentTag: null,
    })

  }

  setHashtag (tag) {
    this.state.currentTag = tag
  }

  incrementLike(thePost) {
    this.state.posts.find(post => post === thePost).likes++ 
  }

  filteredPosts () {
    if (! store.state.currentTag ) return store.state.posts
    return store.state.posts.filter( post => post.hashtags.includes( store.state.currentTag))
  }
}


export const store = new Store()