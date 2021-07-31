<template>
	<About :page="page" />
</template>

<script>
	import About from "@/components/about";
	export default {
		components: {
			About,
		},
		name: "AboutFI",
		async asyncData({ $content }) {
			const page = await $content("fi/info").fetch();
			return {
				page,
			};
		},
	};
</script>