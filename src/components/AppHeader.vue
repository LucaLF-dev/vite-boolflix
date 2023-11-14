<script>
import { store } from "../store";

export default {
	data() {
		return {
			store: store,
			mainNav: {
				first__link: 'Home',
				second__link: 'Serie TV',
				third__link: 'Films',
				fourth__link: 'Originals',
				fift__link: 'Aggiunti di recente',
				sixt__link: 'La mia lista',
			},
		};
	},
};
</script>

<template>
	<header class="app-header">
		<div class="header__wrapper">
			<div class="header-logo">
				<figure class="logo-wrapper">
					<img src="/public/Netflix_2015_logo.svg.png" alt="" />
				</figure>
			</div>
			
			<div class="header-nav">
				<ul class="nav-list">
					<li v-for="link in this.mainNav" :key="link"><a href="#">{{ link }}</a></li>
				
				</ul>
			</div>
			<div class="header-search">
			<div class="search-wrapper">
				<button @click="$emit('searchPerform')" class="search-button">
					<font-awesome-icon
						style="color: white"
						:icon="['fas', 'magnifying-glass']"
					/>
				</button>
				<input
					v-model.trim="store.searchText"
					@keyup.enter="$emit('searchPerform')"
					class="search-input"
					type="text"
					placeholder="Cerca il tuo film o la tua serie preferita"
				/>
			</div>
		</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
.app-header {
	width: 100%;
	height: 150px;
	position: sticky;
	left: 0;
	right: 0;
	top: 0;
	background: rgb(0, 0, 0);
	background: rgb(0, 0, 0);
	background: linear-gradient(
		180deg,
		rgba(0, 0, 0, 1) 57%,
		rgba(20, 20, 20, 1) 100%
	);
	padding: 30px 30px;
	z-index: 999;
	margin: 0;

	.header__wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 30px;

		.nav-list {
			font-size: 15px;
			display: flex;
			gap: 17px;

			a {
				&:hover {
					color: #D91921;
				}
			}
		}
		.logo-wrapper {
			width: 200px;
			height: 50px;
		}
 .header-search {
	display: flex;
	
 }
		.search-wrapper {
			width: 350px;
			display: flex;
			gap: 5px;
            
			.search-button {
				border: solid 2px #D91921;
				border-radius: 5px;
				background-color: #D91921;
				width: 35px;
				aspect-ratio: 1;
			}
			.search-input {
				flex-grow: 1;
				border: none;
				border-radius: 5px;
				background-color: white;
				padding-left: 5px;
			}
		}
	}
}
</style>
