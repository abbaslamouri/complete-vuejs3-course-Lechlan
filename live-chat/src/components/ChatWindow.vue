<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="formatedDocuments" class="messages" ref='messages'>
      <div v-for="doc in formatedDocuments" :key="doc.id" class="single">
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="name">{{ doc.name }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from '../composables/getCollection'
import { formatDistanceToNow } from 'date-fns'
import { ref, computed, onUpdated } from 'vue'
export default {
  setup() {
    const { documents, error } = getCollection('messages')
    const formatedDocuments = computed( () => {
      if (!documents.value) return
      return documents.value.map(doc => {
        return {...doc, createdAt: formatDistanceToNow(doc.createdAt.toDate())}
      })
    })

    // Auto scroll
    const messages = ref(null)

    onUpdated(()=> {
      messages.value.scrollTop = messages.value.scrollHeight
    })
  
    return { formatedDocuments, error, messages }
  
  }

}
</script>

<style scoped>
  .chat-window {
    background: #fafafa;
    padding: 30px 20px;
  }
  .single {
    margin: 18px 0;
  }
  .created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
  }
  .name {
    font-weight: bold;
    margin-right: 6px;
  }
  .messages {
    max-height: 400px;
    overflow: auto;
  }
</style>