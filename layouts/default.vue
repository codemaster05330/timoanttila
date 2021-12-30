<template>
	<div id="matrix" class="relative" :class="main">
		<Header />
		<main class="block">
			<Nuxt keep-alive />
		</main>
		<Footer />
	</div>
</template>

<script>
	import { mapGetters } from "vuex";

	export default {
		data() {
			return {
				site: "Timo Anttila",
				title:
					this.page && this.page.title
						? this.page.title
						: "Timo Anttila | It all starts with a dream!",
				description:
					this.page && this.page.description ? this.page.description : "",
				image: "/images/timoanttila.jpg",
				url: null,
				style: null,
			};
		},
		mounted() {
			this.$store.commit(
				"addLang",
				$nuxt.$route.fullPath.includes("/fi") ? "fi" : "en"
			);
		},
		computed: {
			...mapGetters(["main"]),
		},
	};
</script>