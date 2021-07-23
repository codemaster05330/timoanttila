<template>
	<div id="article">
		<article class="max-w-prose mx-auto text-white content">
			<div class="text-center pt-14 pb-10">
				<h1 class="font-koho text-6xl mt-0 mb-4">{{ page.title }}</h1>
				<p class="m-0 text-2xl">{{ page.description }}</p>
			</div>
			<nuxt-content :document="page" />
		</article>

		<Breadcrumb />
	</div>
</template>

<script>
	import Breadcrumb from "@/components/breadcrumb.vue";
	export default {
		components: { Breadcrumb },
		async asyncData({ $content, params }) {
			const slug = params.slug;
			const page = await $content("blog", slug).fetch();

			return { page };
		},
	};
</script>

<style>
	article pre {
		background-color: #8d80ad;
	}
</style>