import { createApp } from 'vue'

import './style.css'

import App from './App.vue'
import LangFlag from 'vue-lang-code-flags';

import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


import { faStar,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";




library.add(faStar,faMagnifyingGlass);

createApp(App).component('lang-flag', LangFlag).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
