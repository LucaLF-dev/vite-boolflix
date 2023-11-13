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
			posterSize: "w342",
		};
	},
	methods: {},
};
</script>

<template>
	<main class="app__main">
		<div class="main-wrapper">
			<div class="wrapper films" >
				<h1 class="wrapper-title">Film</h1>
				<div class="box">
					<div class="col" v-for="movie in this.store.movies">
						<AppCard :item="movie" />
					</div>
					<div v-if="!store.movies.length" class="empty-search">
						<p>Non ci sono risultati</p>
					</div>
				</div>
			</div>
			<div class="wrapper series">
				<h1 class="wrapper-title">Serie</h1>
				<div class="box">
					<div class="col" v-for="serie in this.store.series">
						<AppCard :item="serie" />
					</div>
					<div v-if="!store.series.length" class="empty-search">
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
	height: 100%;
	background-color: #141414;
	padding: 71px 40px;

	.wrapper {
		margin-top: 50px;
        margin-bottom: 30px;
	
	.wrapper-title {
       
	margin-bottom: 25px;
	}
}
}
.box {
	display: grid;
	grid-template-columns: repeat(6, minmax(300px, 1fr));

	.col {
		height: 100%;
	}
}
</style>
