<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components:{
    FontAwesomeIcon,
  }, 
  props: {
        item: {
            type: Object,
            required: true,
        },
    },
	data() {
		return {
      
      maxVote: 5,
      // fixedVote: 0,
      

    };
	},methods: {
    getImagePath () {

      if (this.item.poster_path === null  ) {
        const imgNot = "https://www.popcorn.app/assets/app/images/placeholder-movieimage.png"
        return imgNot
      }
			const imgUrl = 'https://image.tmdb.org/t/p/w342'
			return imgUrl + this.item.poster_path
			
		},
    // getVote() {
    //   const finalValue = parseInt(this.item.vote_average / 2);
    //    return finalValue;
    //  }
     
  },
  computed: {
    getVote() {
      return parseInt(this.item.vote_average / 2);
    }
  },
  created() {
  //   const finalValue = parseInt(this.item.vote_average / 2);
  //   this.fixed = finalValue;
   },
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
      <div class="language">
        Lingua :  <lang-flag :iso="item.original_language"  />
      </div>
      <div class="vote-stars">
        Voto : <span v-for="n in getVote" ><font-awesome-icon class="star-icon voted" :icon="['fas', 'star']" /></span>
      <span v-for="n in (this.maxVote - getVote)" ><font-awesome-icon class="star-icon" :icon="['fas', 'star']" /></span>
      </div>
      <!-- <p>{{ fixed }}</p> -->
      
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
     
        .vote-stars {
          .star-icon {

            &.voted {
             color: yellow;
            }
          }
        }
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
