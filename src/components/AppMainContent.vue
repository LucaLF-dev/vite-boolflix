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
		};
	},
};
</script>

<template>
	<main class="app__main">
		<div class="main-wrapper">
			<div class="wrapper-films">
				<h1>Film</h1>
				<div class="row">
					<div class="col-4" v-for="movie in this.store.movies">
						<CardFilm :item="movie" />
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
	flex-shrink: 0;
	width: 100%;
	background-color: grey;
	padding: 90px 20px;

	.wrapper-films {
		width: 100%;
		height: 500px;
		overflow-x: hidden;
	}
}
.row {
	width: 100%;
	display: flex;
	flex-wrap: nowrap;
	
	
	
	.col-4 {
		flex-basis: calc(100% / 12) * 4;
		height: 100%;
		padding: 20px;
		
	}
}
</style>
