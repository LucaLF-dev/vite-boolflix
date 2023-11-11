<script>
import { store } from "../store";
import CardFilm from "./CardFilm.vue";
import CardSeries from "./CardSeries.vue";

export default {
	components: {
		CardFilm,
		CardSeries,
	},
	data() {
		return {
			store: store,
			posterSize: 'w342',
		};
	},
	methods: {
		getImagePath (value) {
			const imgUrl = `https://image.tmdb.org/t/p/w342${this.posterSize}`
			const img = imgUrl + value
			return img
			console.log('getImagePath', img)
		}
	}
};
</script>

<template>
	<main class="app__main">
		<div class="main-wrapper">
			<div class="wrapper-films">
				<h1>Film</h1>
				<div class="row">
					<div class="col-4" v-for="movie in this.store.movies">
						<CardFilm :item="movie" @get-image="getImagePath" />
					</div>
				</div>
			</div>
			<div class="wrapper-series">
				<h1>Serie</h1>
				<div class="row">
					<div class="col-4" v-for="serie in this.store.series">
						<CardSeries :item="serie" />
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<style lang="scss" scoped>

.app__main {
	
	width: 100%;
	background-color: grey;
	padding: 90px 20px;

}
.row {
	display: flex;

	
	
	
	.col-4 {
		flex-basis: calc(100% / 12) * 4;
		height: 100%;
		padding: 5px;
		
	}
}
</style>
