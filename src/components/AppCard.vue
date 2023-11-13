<script>
export default {
  props: {
        item: {
            type: Object,
            required: true,
        },
    },
	data() {
		return {
      imageNot: 'NO IMAGE'
    };
	},methods: {
    getImagePath () {
      if (this.item.poster_path === null || undefined ) {
        return this.imageNot
      }
			const imgUrl = 'https://image.tmdb.org/t/p/w342'
			return imgUrl + this.item.poster_path
			
		}
  }
};
</script>

<template>
	<div class="card">
		<figure class="card-image">
      <img :src="getImagePath()"  alt="">
    </figure>

   

		<div class="card-body">
      <div class="firt-title">
      <div v-if="this.item.title !== undefined">
        Titolo : {{ item.title }}
      </div>
      <div v-else>
       Titolo : {{ item.name }}
      </div>
</div>
  <div class="original-title">
      <div v-if="this.item.original_title !== undefined">
        Titolo Originale : {{ item.original_title }}
      </div>
      <div v-else>
        Titolo Originale : {{ item.original_name }}
      </div>
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
