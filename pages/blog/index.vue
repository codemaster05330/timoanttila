<template>
	<Articles
		v-if="title && list"
		:title="Articles"
		:desc="description"
		:articles="list"
	/>
</template>

<script>
	export default {
		name: "ArticlesEN",
		async asyncData({ $content }) {
			const list = await $content("blog")
				.only(["title", "description", "path", "createdAt"])
				.sortBy("createdAt", "desc")
				.fetch();
			return {
				list,
			};
		},
		data() {
			return {
				title: "Articles written by Timo Anttila",
				description:
					"Stories about projects and life, easy-to-learn tutorials and political opinions.",
				url: "/blog/",
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
						hid: "articles-en",
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
						content: "https://timoanttila.com/images/timoanttila.jpg",
					},
				],
			};
		},
	};
</script>