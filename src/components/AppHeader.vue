<script>
import { store } from "../store";

export default {
	data() {
		return {
			store: store,
			
		};
	},
};
</script>

<template>
	<header class="app-header">
		<div class="header__wrapper">
			<div class="header-logo"><figure class="logo-wrapper"><img src="/public/Netflix_2015_logo.svg.png" alt=""></figure></div>
			<div class="header-search">
				<button @click="$emit('searchPerform')" class="search-button"><font-awesome-icon style="color: white;" :icon="['fas', 'magnifying-glass']" /></button>
				<input
				v-model.trim="store.searchText" @keyup.enter="$emit('searchPerform')"
					class="search-input"
					type="text"
					placeholder="Cerca il tuo film o la tua serie preferita"
				/>
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
.app-header {
	flex-shrink: 0;
	width: 100%;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	background-color:#141414;
	padding: 15px 30px;
	z-index: 999;
	margin: 0;
	
	

	.header__wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
   
       gap: 30px;

		.logo-wrapper {
			width: 200px;
			height: 50px;

			
		}

    .header-search {
      width: 350px;
      display: flex;
      gap: 5px;
	  



	  .search-button {
		border:solid 2px #E50914 ;
		border-radius: 5px;
		background-color: #E50914;
		width: 35px;
		aspect-ratio: 1;
	  }
      .search-input {
        flex-grow: 1;
		border: none;
		 border-radius: 5px;
		 background-color:white;
		 padding-left: 5px;
		 
      }
    }
	}
}
</style>
