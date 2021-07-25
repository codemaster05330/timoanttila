<template>
	<div id="article" class="py">
		<article class="max-w-prose mx-auto text-white content">
			<div class="text-center">
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
	import Breadcrumb from "@/components/breadcrumb";
	export default {
		components: { Breadcrumb },
		async asyncData({ $content, params }) {
			const slug = params.slug;
			const page = await $content("blog", slug).fetch();
			return { page };
		},
	};
</script>

<style lang="scss" scoped>
</style>