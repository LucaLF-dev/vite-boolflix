<script>
import AppMainContent from "./components/AppMainContent.vue";
import AppHeader from "./components/AppHeader.vue";
import axios from "axios";
import { store } from "./store";

export default {
  components: {
    AppMainContent,
    AppHeader,
  },
  data() {
    return {
      store: store,
      api_key: '73b887a165d53aed9c90ab19fdc56987',
    };
  },
  methods: {
    searchAll() {
      this.showFilm(),
        this.showSerie();
    },

    showFilm() {
      axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: this.api_key,
          query: this.store.searchText,
        }
      }).then((res) => {
        const movies = res.data.results;
        

        this.store.movies = movies;
      });
    },
    showSerie() {
      axios.get('https://api.themoviedb.org/3/search/tv', {
        params: {
          api_key: this.api_key,
          query: this.store.searchText,
        }
      }).then((res) => {
        const series = res.data.results;
        

        this.store.series = series;
      });
    },
  }


};
</script>

<template>
  <AppHeader @searchPerform="searchAll" />
  <AppMainContent />
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
