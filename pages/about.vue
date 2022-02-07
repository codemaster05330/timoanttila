<template>
	<About :page="page" />
</template>

<script>
	export default {
		name: "AboutEN",
		async asyncData({ $content }) {
			const page = await $content("about").fetch();
			return {
				page,
				title: page.title,
				description: page.description,
				url: page.path,
			};
		},
		data() {
			return {
				site: "https://timoanttila.com",
			};
		},
		head() {
			return {
				htmlAttrs: { lang: "en" },
				title: this.title,
				link: [
					{
						rel: "canonical",
						property: "og:url",
						href: this.site + this.url,
					},
				],
				meta: [
					{ property: "og:locale", content: "en_US" },
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
				],
			};
		},
	};
</script>