<template>
	<div v-if="page" id="article" class="py-10 px-4 lg:px-10">
		<article class="max-w-screen-md mx-auto block">
			<div class="text-center mb-10 max-w-lg mx-auto">
				<h1 class="m-0 font-koho text-title text-lg leading-tight">
					{{ page.title }}
				</h1>
				<p
					id="articleDescription"
					class="
						mt-2
						font-montserrat font-light
						leading-normal
						text-content text-desc
					"
				>
					{{ page.description }}
				</p>
			</div>
			<nuxt-content
				:document="page"
				class="font-montserrat font-light leading-normal text-content"
			/>
		</article>

		<Breadcrumb />
	</div>
</template>

<script>
	export default {
		async asyncData({ $content, params }) {
			const slug = params.slug;
			const page = await $content("blog", slug).fetch();
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

<style>
	strong {
		font-weight: 700;
	}
	pre,
	pre code {
		display: block;
	}
	pre code {
		margin: 1rem;
	}
	.nuxt-content-highlight {
		display: block;
		background-color: var(--bg-secondary);
		width: 100%;
		overflow-x: auto;
		overflow-y: hidden;
		border-radius: 8px;
	}
	article h3 {
		font-size: 1.2em;
	}
</style>