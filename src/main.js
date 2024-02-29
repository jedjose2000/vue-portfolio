import { createApp } from 'vue';
import App from './App.vue';
import '@/axios.js';
import { VueMarqueeSlider } from "vue3-marquee-slider";
import { MotionPlugin } from "@vueuse/motion";
import FloatingVue from 'floating-vue'
import './assets/main.css'; // Import CSS file
import 'floating-vue/dist/style.css' // Import css for floating vue
const app = createApp(App);

// Register the MotionPlugin
app.use(MotionPlugin);

// Register the Floating Vue
app.use(FloatingVue)

// Register the VueMarqueeSlider globally
app.component('VueMarqueeSlider', VueMarqueeSlider);

// Mount the app to the DOM
app.mount('#app');
