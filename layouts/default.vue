<template>
	<div id="matrix" class="relative">
		<HeaderBlock />
		<main class="block">
			<Nuxt keep-alive />
		</main>
		<Footer />
	</div>
</template>

<script>
	import HeaderBlock from "@/components/header";
	import FooterBlock from "@/components/footer";

	export default {
		components: {
			HeaderBlock,
			FooterBlock,
		},
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
			};
		},
		mounted() {
			this.$store.commit(
				"addLang",
				$nuxt.$route.fullPath.includes("/fi") ? "fi" : "en"
			);
		},
	};
</script>