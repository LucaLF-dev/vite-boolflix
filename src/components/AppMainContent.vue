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
	<main class="app_main">
		<div>
			<CardFilm />
		</div>
		<div>
			<CardSeries />
		</div>
	</main>
</template>

<style lang="scss" scoped>

</style>
