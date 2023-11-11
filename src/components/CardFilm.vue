<script>
 import LangFlag from 'vue-lang-code-flags';

export default {
  components : {
  LangFlag,
  },
  emits: ['getImage'],
  props: {
        item: {
            type: Object,
            required: true,
        },
    },
	data() {
		return {};
	},
  methods: {
    getImagePath (value) {
			const imgUrl = 'https://image.tmdb.org/t/p/w342'
			return imgUrl + value
			
		}
  }
};
</script>

<template>
	<div class="card" >
		<figure class="card-image">
      <img :src="getImagePath(
        item.poster_path)"  alt="">
    </figure>

		<div class="card-body">
      <div>
        Titolo : {{ item.title }}
      </div>
      <div>
        Titolo Originale : {{ item.original_title }}
      </div>
      <div>
        Lingua :  <lang-flag :iso="item.original_language"  />
      </div>
      <div>
        Voto : {{ item.vote_average }}
      </div>
    </div>
	</div>
</template>

<style lang="scss" scoped>

.card {
   background-color: transparent;
   position: relative;
  
   .card-body {
        position: absolute;
        inset: 0;
        transition: opacity 0.4s ease-in-out;
        display: none;
        flex-direction: column;
        justify-content: flex-start;
        color: white;
        
   }

   &:hover {
    
     .card-body {
       display: flex;
       background-color: rgba(0, 0, 0, 0.7);
       backdrop-filter: blur(10px);
     }
   }
}
</style>
