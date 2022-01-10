<template>
	<div
		id="matrix"
		class="relative w-screen bg-primary"
		:class="styleClass"
		:style="`font-size:${fontSize}px`"
	>
		<a href="#content" class="hidden">Jump to the content</a>

		<aside
			v-bind:class="{ open: toggleMenu }"
			class="
				fixed
				z-50
				w-screen
				h-12
				bottom-0
				right-0
				md:top-0 md:h-screen md:w-14
				bg-secondary
			"
		>
			<div id="buttons" class="md:my-6 md:text-center">
				<button
					@click="toggleMenu = !toggleMenu"
					id="menuToggle"
					class="
						w-12
						h-12
						mx-auto
						inline-block
						bg-transparent
						border-0
					"
					v-bind:class="{ open: toggleMenu }"
					title="Menu toggle for navigation"
					aria-label="Open / close the main navigation"
				>
					<div class="grid w-full">
						<svg
							v-if="!toggleMenu"
							class="self-center mx-auto"
							viewBox="0 0 100 80"
							width="30"
							height="30"
						>
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
					</div>
				</button>

				<button
					@click="toggleAccessibility = !toggleAccessibility"
					v-bind:class="{ open: toggleAccessibility }"
					class="
						w-12
						h-12
						mx-auto
						inline-block
						bg-transparent
						border-0
					"
					title="Menu toggle for accessibility"
					aria-label="Open / close the accessibility menu"
				>
					<div class="grid w-full">
						<svg
							class="self-center"
							width="36"
							height="36"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							fill-rule="evenodd"
							clip-rule="evenodd"
						>
							<title>Accessibility</title>
							<path
								d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12m0 2c5.52 0 10 4.481 10 10 0 5.52-4.48 10-10 10-5.519 0-10-4.48-10-10 0-5.519 4.481-10 10-10m0 1c4.967 0 9 4.033 9 9s-4.033 9-9 9-9-4.033-9-9 4.033-9 9-9m-.011 11.5c-.474.006-.765.448-.989.804-.483.767-1.005 1.58-1.455 2.264-.155.238-.325.43-.609.432-.285.002-.526-.343-.389-.632.366-.769 1.953-3.539 1.953-5.868 0-.806-.429-1-1-1h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h9c.276 0 .5.224.5.5s-.224.5-.5.5h-2c-.57 0-1 .194-1 1 0 2.329 1.587 5.099 1.953 5.868.137.289-.103.634-.389.632-.284-.002-.454-.194-.609-.432-.45-.684-.973-1.497-1.455-2.264-.226-.359-.52-.806-1-.804h-.011zm.011-8.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5"
							/>
						</svg>
					</div>
				</button>

				<div
					v-bind:class="{
						hidden: !toggleAccessibility,
						open: toggleAccessibility,
					}"
					id="accessibility"
					class="inline-block md:w-12 md:mt-2 md:mx-auto"
				>
					<ul class="m-0 p-0">
						<li
							v-for="(e, i) in colors"
							:key="i"
							@click="toggleAccessibility = !toggleAccessibility"
							class="inline-block"
							role="none"
						>
							<button
								@click="fixStyles(e.name)"
								class="
									w-12
									h-12
									mx-auto
									bg-transparent
									border-0
									text-center
								"
								role="listitem"
								title="Change the theme"
								aria-label="Choose the best theme for your eyes"
							>
								<div
									class="
										w-8
										h-8
										rounded-full
										mx-auto
										border
										border-solid
										border-gray-100
										border-opacity-80
									"
									:style="`background-color:${e.color}`"
									:aria-label="`Theme ${e.name}`"
								>
									<span class="hidden">{{ e.name }}Mode</span>
								</div>
							</button>
						</li>
					</ul>
				</div>
			</div>
		</aside>

		<nav
			id="menu"
			class="fixed text-center w-screen h-screen grid bg-primary z-40"
			v-bind:class="{ hidden: !toggleMenu, grid: toggleMenu }"
		>
			<ul class="m-0 p-0 self-center font-koho w-56 mx-auto" role="menu">
				<li
					v-for="item in menu[lang]"
					:key="item.id"
					class="block"
					role="none"
				>
					<nuxt-link
						:to="item.link"
						@click.native="toggleMenu = !toggleMenu"
						class="text-content p-3 uppercase block no-underline"
						:title="item.description"
						:hreflang="item.lang"
						role="menuitem"
					>
						{{ item.title }}
					</nuxt-link>
				</li>
			</ul>
		</nav>

		<main id="content" class="block min-h-screen pb-16 md:pb-0">
			<Nuxt keep-alive />
		</main>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";

	export default {
		data() {
			return {
				site: "Timo Anttila",
				title:
					this.page && this.page.title
						? this.page.title
						: "Timo Anttila | It all starts with a dream!",
				description:
					this.page && this.page.description ? this.page.description : "",
				image: "/images/timoanttila.jpg",
				toggleMenu: false,
				toggleAccessibility: false,
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
				colors: [
					{
						name: "violet",
						color: "#422e43",
					},
					{
						name: "dark",
						color: "#212121",
					},
					{
						name: "blue",
						color: "#04293a",
					},
				],
				styleClass: "",
				fontSize: 18,
			};
		},
		mounted() {
			this.$store.commit(
				"addLang",
				$nuxt.$route.fullPath.includes("/fi") ? "fi" : "en"
			);
			this.fixStyles();
		},
		computed: {
			...mapGetters(["main", "lang", "page"]),
		},
		methods: {
			fixStyles(color = "violet") {
				this.styleClass = `${this.main} ${color}`;
			},
		},
	};
</script>