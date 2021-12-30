<template v-show="jpg">
	<picture class="block w-full" v-bind:class="styles">
		<source :srcset="webp" type="image/webp" />
		<source :srcset="jpg" type="image/jpeg" />
		<img class="block w-full h-full object-cover" :src="jpg" :alt="title" />
	</picture>
</template>

<script>
	export default {
		props: {
			item: {
				type: String,
				default: "timoanttila",
			},
			title: {
				type: String,
				default: null,
			},
			styles: {
				type: String,
				default: "max-w-screen-sm",
			},
		},
		data() {
			return {
				jpg: `/images/${this.item}.jpg`,
				webp: `/images/${this.item}.webp`,
			};
		},
	};
</script>