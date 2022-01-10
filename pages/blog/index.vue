<template>
	<div class="py-10 px-4 lg:px-10">
		<div class="text-center mb-10 max-w-lg mx-auto">
			<h1 class="m-0 font-koho text-title text-xl leading-1">
				{{ title }}
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
				{{ description }}
			</p>
		</div>

		<ul
			v-if="articles"
			id="articles"
			class="grid gap-6 xl:grid-cols-2 2xl:grid-cols-3 m-0 pl-0"
			aria-label="List of articles I have written"
		>
			<li
				v-for="(item, i) in articles"
				:key="i"
				class="listItem grid gap-6"
			>
				<div class="published text-sm">
					<Datetime :item="item.createdAt" />
				</div>
				<div class="content">
					<h2 class="leading-3 m-0 text-md font-koho">
						<nuxt-link
							:to="item.path"
							class="
								block
								no-underline
								text-title
								hover:text-content
							"
						>
							{{ item.title }}
						</nuxt-link>
					</h2>
					<div
						class="
							description
							text-content text-base
							font-montserrat font-light
							leading-normal
							mt-4
						"
					>
						{{ item.description }}
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<style scoped>
	@media screen and (max-width: 450px) {
		.listItem {
			grid-template-columns: 60px 1fr;
		}
	}
	@media screen and (min-width: 450px) {
		.listItem {
			grid-template-columns: 85px 1fr;
		}
	}
</style>

<script>
	export default {
		name: "ArticlesEN",
		async asyncData({ $content }) {
			const articles = await $content("blog")
				.only(["title", "description", "path", "createdAt"])
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
					"Stories about projects and life, easy-to-learn tutorials.",
				url: "/blog/",
			};
		},
		mounted() {
			this.$store.commit("addMain", "articleList");
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
					{ property: "og:locale", content: "en_US" },
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