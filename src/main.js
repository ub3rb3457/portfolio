import { createApp } from 'vue'
import App from './app/App.vue'
import './assets/index.css'

// import obewdsTwConfig from '../obewds.tw.config.json'

const app = createApp(App)

// app.provide('tw', obewdsTwConfig)

app.mount('#app')
