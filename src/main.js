import './assets/main.css'
import {MotionPlugin} from "@vueuse/motion";
import { createApp } from 'vue'
import App from './App.vue'
import '@/axios.js';

const app = createApp(App)

app.use(MotionPlugin)

app.mount('#app')

