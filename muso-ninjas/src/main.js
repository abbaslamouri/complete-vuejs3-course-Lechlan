import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import './assets/main.css'

let app

app = createApp(App)
app.use(router)
app.mount('#app')


