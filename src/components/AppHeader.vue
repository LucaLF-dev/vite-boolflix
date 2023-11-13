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
			<div class="header-logo">boolflix</div>
			<div class="header-search">
				<button @click="$emit('searchPerform')" class="search-button">search</button>
				<input
				v-model.trim="store.searchText" :log="console.log(store.searchText)"
					class="search-input"
					type="text"
					placeholder="cerca il tuo film o la tua serie preferita"
				/>
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
.app-header {
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	background-color: black;
	padding: 15px 20px;
  overflow: hidden;
  z-index: 999;
	

	.header__wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
   
    gap: 30px;

		.header-logo {
			text-transform: uppercase;
			color: red;
			font-weight: 700;
			font-size: 35px;
		}

    .header-search {
      width: 250px;
      display: flex;
      gap: 3px;

      .search-input {
        flex-grow: 1;
      }
    }
	}
}
</style>
