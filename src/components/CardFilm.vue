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
		<figure class="card-image">{{ item. }}</figure>

		<div class="card-body"></div>
	</div>
</template>

<style lang="scss" scoped></style>
