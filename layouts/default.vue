<template>
	<div id="matrix" class="relative">
		<HeaderBlock v-if="activeLanguage" :lang="activeLanguage" />
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
				activeLanguage: "en",
			};
		},
		mounted() {
			this.activeLanguage = $nuxt.$route.path.includes("/fi") ? "fi" : "en";
		},
		head: {
			htmlAttrs: {
				lang: this.activeLanguage,
			},
		},
	};
</script>