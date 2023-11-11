<script>
 import LangFlag from 'vue-lang-code-flags';

export default {
  components : {
  LangFlag,
  },
  props: {
        item: {
            type: Object,
            required: true,
        },
    },
	data() {
		return {};
	},
};
</script>

<template>
	<div class="card" >
		<figure class="card-image"></figure>

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

</style>
