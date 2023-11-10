<script >

import AppMainContent from './components/AppMainContent.vue';
import  AppHeader from './components/AppHeader.vue';
import axios from 'axios';
import {store} from './store'

export default {
  components: {
     AppMainContent,
     AppHeader,
    
  },
  data() {
    return {
     store: store,
    }
  },
  
    
}

</script>

<template>
   <AppHeader/>
   <AppMainContent/>
 
</template>

<style lang="scss">
@use './style/general.scss';

</style>
