import { createApp } from 'vue'
import './scss/index.scss'
import App from './App.vue'
import router from './router.js';
import Tooltip from "@programic/vue3-tooltip";
// Import the CSS or use your own!
import '@programic/vue3-tooltip/dist/index.css';

createApp(App).use(router).use(Tooltip, {placement: 'bottom'}).mount('#app')
