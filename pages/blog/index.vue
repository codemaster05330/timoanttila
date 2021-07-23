<template>
	<div class="text-center py-10">
		<div class="max-w-prose mx-auto text-white">
			<h1 class="font-koho text-8xl mt-0 mb-4">{{ title }}</h1>
			<p class="mt-0 mb-10 text-2xl">{{ description }}</p>
		</div>

		<div
			class="
				grid
				gap-4
				md:grid-cols-2
				lg:grid-cols-3
				max-w-screen-xl
				mx-auto
			"
		>
			<nuxt-link
				v-for="(item, i) in articles"
				:key="i"
				:to="item.path"
				class="
					bg-white
					p-6
					no-underline
					shadow-lg
					rounded-2xl
					flex flex-col
				"
			>
				<div class="flex-grow">
					<h2 class="text-2xl mt-0">{{ item.title }}</h2>
					<div class="description">{{ item.description }}</div>
				</div>
				<div class="published text-sm">{{ item.createdAt }}</div>
			</nuxt-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Articles",
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