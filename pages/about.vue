<template>
	<About :page="page" />
</template>

<script>
	import About from "@/components/about";
	export default {
		components: {
			About,
		},
		name: "AboutEN",
		async asyncData({ $content }) {
			const page = await $content("about").fetch();
			return {
				page,
			};
		},
	};
</script>