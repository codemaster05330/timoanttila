<template>
	<header class="fixed z-50" :class="{ grid: active, icon: !active }">
		<button
			id="menuToggle"
			class="absolute icon z-50 icon-white"
			v-bind:class="{ open: active }"
			title="Open and close the main navigation"
			@click="active = !active"
		>
			<svg v-if="!active" viewBox="0 0 100 80" width="30" height="30">
				<title>Open the main navigation</title>
				<rect width="100" height="20" />
				<rect y="30" width="100" height="20" />
				<rect y="60" width="100" height="20" />
			</svg>
			<svg
				v-else
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
			>
				<title>Close the main navigation</title>
				<path
					d="M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z"
				/>
			</svg>
		</button>

		<nav
			id="menu"
			class="text-center noUnd self-center mx-auto"
			v-bind:class="{ hidden: !active, grid: active }"
		>
			<ul class="m-0 p-0" role="menu">
				<li
					v-for="item in menu[lang]"
					:key="item.id"
					class="block"
					role="none"
				>
					<nuxt-link
						:to="item.link"
						@click.native="active = !active"
						class="text-white p-3 uppercase block"
						:title="item.description"
						:hreflang="item.lang"
						role="menuitem"
					>
						{{ item.title }}
					</nuxt-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
	import { mapGetters } from "vuex";
	export default {
		data() {
			return {
				active: false,
				menu: {
					en: [
						{
							title: "Home",
							description: "A brief description of me",
							link: "/",
							lang: "en",
						},
						{
							title: "About",
							description:
								"What is happening in my life right now and what is important to me.",
							link: "/about",
							lang: "en",
						},
						{
							title: "Blog",
							description:
								"Stories of life and tutorials / how-to articles on the wonderful world of technology.",
							link: "/blog",
							lang: "en",
						},
						{
							title: "Finnish",
							description: "Suomeksi",
							link: "/fi/",
							lang: "fi",
						},
					],
					fi: [
						{
							title: "Etusivu",
							description: "Tervetuloa tutustumaan",
							link: "/fi/",
							lang: "fi",
						},
						{
							title: "Info",
							description: "Mitä elämässäni tapahtuu juuri nyt?",
							link: "/fi/info",
							lang: "fi",
						},
						{
							title: "English",
							description: "In English",
							link: "/",
							lang: "en",
						},
					],
				},
				url: "https://timoanttila.com",
				image: this.url + "/images/timoanttila.jpg",
			};
		},
		computed: {
			...mapGetters(["lang", "page"]),
		},
		head() {
			return {
				htmlAttrs: { lang: this.lang },
				title: this.page.title,
				link: [
					{
						rel: "canonical",
						property: "og:url",
						href: this.url + this.page.url,
					},
				],
				meta: [
					{
						property: "og:title",
						name: "twitter:title",
						content: this.page.title,
					},
					{
						hid: this.page.hid,
						name: "description",
						content: this.page.description,
					},
					{
						name: "twitter:description",
						property: "og:description",
						content: this.page.description,
					},
					{
						name: "twitter:image",
						property: "og:image",
						content:
							this.page && this.page.image
								? this.url + this.page.image
								: this.image,
					},
					{ property: "og:site_name", content: this.page.title },
				],
			};
		},
	};
</script>