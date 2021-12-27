import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/index.scss'
import router from '@/router/index.js'
const app = createApp(App)

app.use(router)
app.mount('#app')
