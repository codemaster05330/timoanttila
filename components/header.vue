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
					d="M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159
				4.278c2.285 2.885 5.284 5.903"
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
					v-for="item in menu"
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
	export default {
		data() {
			return {
				active: false,
				menu: [
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
						title: "Work",
						description: "Reference works and open source projects.",
						link: "/work",
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
						description: ".",
						link: "/blog",
						lang: "fi",
					},
				],
			};
		},
	};
</script>