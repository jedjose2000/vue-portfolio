import { createApp } from 'vue';
import App from './App.vue';
import '@/axios.js';
import { VueMarqueeSlider } from "vue3-marquee-slider";
import { MotionPlugin } from "@vueuse/motion";
import './assets/main.css'; // Import CSS file
const app = createApp(App);
// Register the MotionPlugin
app.use(MotionPlugin);

// Register the VueMarqueeSlider globally
app.component('VueMarqueeSlider', VueMarqueeSlider);

// Mount the app to the DOM
app.mount('#app');
