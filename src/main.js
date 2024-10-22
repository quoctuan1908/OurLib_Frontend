// import '@fortawesome/fontawesome-free'
import 'bootstrap/dist/css/bootstrap.min.css'
import mitt from 'mitt'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import router from './router'

const emitter = mitt()
const app = createApp(App)

app.config.globalProperties.emitter = emitter

app.use(router)

app.mount('#app')
