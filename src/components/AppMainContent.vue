<script>
import { store } from "../store";
import AppCard from "./AppCard.vue";

export default {
	components: {
		AppCard,
	},
	data() {
		return {
			store: store,
			posterSize: 'w342',
		};
	},
	methods: {
		
	}
};
</script>

<template>
	<main class="app__main">
		<div class="main-wrapper">
			<div class="wrapper-films">
				<h1>Film</h1>
				<div class="row">
					
					<div  class="col-4" v-for="movie in this.store.movies" >
						<AppCard :item="movie"  />
					</div>
					<div v-if="!store.movies.length"  class="empty-search">
    <p>Non ci sono risultati</p>
  </div>
				</div>
			</div>
			<div class="wrapper-series">
				<h1>Serie</h1>
				<div class="row">
					<div class="col-4" v-for="serie in this.store.series" >
						<AppCard :item="serie" />
					</div>
					<div v-if="!store.series.length"  class="empty-search">
    <p>Non ci sono risultati</p>
  </div>
				</div>
			</div>
		</div>
	</main>
</template>

<style lang="scss" scoped>

.app__main {
	flex-grow: 1;
	width: 100%;
	height: 100%;
	background-color: grey;
	padding: 90px 20px;

}
.row {
	display: flex;
	flex-wrap: wrap;
	
	.col-4 {
		flex-basis: calc(100% / 12) * 4;
		height: 100%;
		padding: 5px;
		
	}
}
</style>
