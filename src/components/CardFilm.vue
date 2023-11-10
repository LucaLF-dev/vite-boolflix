<script>
export default {
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
        {{ item.title }}
      </div>
      <div>
        {{ item.original_title }}
      </div>
      <div>
        {{ item.original_language }}
      </div>
      <div>
        {{ item.vote_average }}
      </div>
    </div>
	</div>
</template>

<style lang="scss" scoped></style>
