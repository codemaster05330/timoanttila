<template>
	<div id="matrix" class="relative">
		<HeaderBlock v-if="lang" :lang="lang" />
		<main class="block">
			<Nuxt keep-alive />
		</main>
		<Footer />
	</div>
</template>

<script>
	import HeaderBlock from "@/components/header";
	import FooterBlock from "@/components/footer";
	import { mapGetters } from "vuex";

	export default {
		components: {
			HeaderBlock,
			FooterBlock,
		},
		computed: {
			...mapGetters(["lang", "page"]),
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
			this.url = $nuxt.$route.fullPath;
		},
		head() {
			return {
				htmlAttrs: { lang: this.lang },
				title: this.title,
				link: [
					{
						rel: "canonical",
						property: "og:url",
						href: this.url,
					},
				],
				meta: [
					{
						property: "og:title",
						name: "twitter:title",
						content: this.title,
					},
					{
						hid: this.url,
						name: "description",
						content: this.description,
					},
					{
						name: "twitter:description",
						property: "og:description",
						content: this.description,
					},
					{
						name: "twitter:image",
						property: "og:image",
						content:
							this.page && this.page.image
								? this.page.image
								: this.image,
					},
					{ property: "og:site_name", content: this.title },
				],
			};
		},
	};
</script>