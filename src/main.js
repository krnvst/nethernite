import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './styles/styles.scss'

const app = createApp(App)
// app.config.globalProperties.$config = config
app.use(VueAxios, axios)
app.mount('#app')