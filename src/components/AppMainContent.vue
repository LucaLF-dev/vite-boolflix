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
			<div class="row">
				<div class="col-4">
					<CardFilm />
				</div>
			</div>
			<div class="row">
				<div class="col-4">
					<CardSeries />
				</div>
			</div>
		</div>
	</main>
</template>

<style lang="scss" scoped>
.app__main {
	flex-grow: 1;
	background-color: grey;
	padding: 90px 20px;
}

.row {
	display: flex;
	flex-wrap: wrap;
	

	.col-4 {
		flex-basis: calc((100% / 12) * 4);
		padding: 10px;
	}
}


</style>
