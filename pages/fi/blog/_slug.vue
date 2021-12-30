<template>
	<div v-if="page" id="article" class="py">
		<article class="max-w-prose mx-auto text-white content">
			<div class="text-center mb-10">
				<h1 id="articleTitle" class="line-2">{{ page.title }}</h1>
				<p id="articleDescription">
					{{ page.description }}
				</p>
			</div>
			<nuxt-content :document="page" />
		</article>

		<Breadcrumb />
	</div>
</template>

<script>
	export default {
		async asyncData({ $content, params }) {
			const slug = params.slug;
			const page = await $content("fi/blog", slug).fetch();
			return {
				page,
				title: page.title,
				description: page.description,
				image: page.image ? page.image : "timoanttila",
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
				htmlAttrs: { lang: "fi" },
				title: this.title,
				link: [
					{
						rel: "canonical",
						property: "og:url",
						href: this.site + this.url,
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
						content: this.site + "/images/" + this.image + ".jpg",
					},
				],
			};
		},
	};
</script>