<template>
	<div v-if="page" id="article" class="py">
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
			const page = await $content("fi/blog", slug).fetch();
			return { page };
		},
		mounted() {
			this.$store.commit("addMain", "articlePage");
			this.$store.commit("currentPage", {
				title: this.page.title,
				description: this.page.description,
				image: this.page.image
					? "/images/" + this.page.image + ".jpg"
					: "/images/timoanttila.jpg",
				url: $nuxt.$route.fullPath,
				hid: $nuxt.$route.path,
			});
		},
	};
</script>