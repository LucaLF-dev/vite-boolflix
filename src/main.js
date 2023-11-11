import { createApp } from 'vue'

import './style.css'

import App from './App.vue'
import LangFlag from 'vue-lang-code-flags';

createApp(App).component('lang-flag', LangFlag).mount('#app')
