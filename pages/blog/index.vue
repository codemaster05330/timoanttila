<template>
	<Articles
		v-if="title && articles"
		:title="title"
		:desc="description"
		:articles="articles"
	/>
</template>

<script>
	import Articles from "@/components/articles";
	export default {
		components: {
			Articles,
		},
		name: "ArticlesEng",
		async asyncData({ $content }) {
			const articles = await $content("blog")
				.only(["title", "description", "createdAt"])
				.sortBy("createdAt", "desc")
				.fetch();
			return {
				articles,
			};
		},
		data() {
			return {
				title: "Articles",
				description:
					"Stories about projects and life, easy-to-learn tutorials and political opinions.",
			};
		},
		head() {
			return {
				title: this.title,
				meta: [
					{
						hid: this.title,
						name: "description",
						property: "og:description",
						content: this.description,
					},
					{
						name: "twitter:title",
						property: "og:title",
						content: this.title,
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