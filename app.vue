<script setup>
const url = 'https://timoanttila.com'
useState('site', () => ({name: 'Timo Anttila', url, image: url + '/images/laptop-social.jpg'}))

useHead({
	htmlAttrs: {lang: 'en'},
	meta: [
		{charset: 'utf-8'},
		{name: 'viewport', content: 'width=device-width, initial-scale=1'},
		{name: 'format-detection', content: 'telephone=no'},
		{name: 'twitter:creator', content: '@_timoanttila'},
		{name: 'apple-mobile-web-app-capable', content: 'yes'},
		{property: 'og:type', content: 'website'},
		{property: 'og:locale', content: 'en_US'},
		{'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
		{name: 'msapplication-TileColor', content: '#422e43'},
		{name: 'msapplication-TileImage', content: '#422e43'},
		{name: 'theme-color', content: '#422e43'}
	],
	link: [
		{rel: 'apple-touch-icon', sizes: '180x180', type: 'image/png', href: '/apple-touch-icon.png'},
		{rel: 'icon', sizes: '32x32', type: 'image/png', href: '/favicon-32x32.png'},
		{rel: 'icon', sizes: '16x16', type: 'image/png', href: '/favicon-16x16.png'},
		{rel: 'manifest', href: '/site.webmanifest'},
		{rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#422e43'}
	]
})

const menu = [
	{
		description: 'A brief description of me',
		path: '/',
		title: 'Home'
	},
	{
		description: 'What is happening in my life right now and what is important to me.',
		path: '/about',
		title: 'About'
	},
	{
		description: 'A collection of articles about web development, programming, and life.',
		path: '/blog',
		title: 'Articles'
	}
]

const colors = [
	{
		name: 'violet',
		color: '#422e43'
	},
	{
		name: 'dark',
		color: '#212121'
	},
	{
		name: 'blue',
		color: '#04293a'
	}
]

const styleClass = useState('colorStyle', () => 'violet')
const buttonMenu = useState('buttonMenu', () => false)
const buttonAccessibility = useState('buttonAccessibility', () => false)
const fontSize = useState('fontSize', () => 18)
</script>

<template>
	<div
		id="matrix"
		class="relative w-screen bg-primary"
		:class="styleClass"
		:style="`font-size:${fontSize}px`"
	>
		<a href="#content" class="false">Jump to the content</a>
		<a href="#buttons" class="false">Jump to the navigation</a>

		<main id="content" class="block min-h-screen pb-16 md:pb-0">
			<NuxtPage />
		</main>

		<nav
			id="menu"
			:class="`fixed top-0 left-0 w-screen h-screen text-center grid bg-primary z-40 ${buttonMenu}`"
			aria-labelledby="menuToggle"
		>
			<ul id="menuList" class="-mt-16 mb-0 p-0 self-center font-koho w-56 mx-auto">
				<li v-for="item in menu" :key="item.id" class="block" role="none">
					<NuxtLink
						:to="item.path"
						@click.native="buttonMenu = false"
						class="text-content p-3 uppercase block no-underline"
						:aria-label="item.description"
						:hreflang="item.lang"
						role="menuitem"
					>
						{{ item.title }}
					</NuxtLink>
				</li>
			</ul>
		</nav>

		<aside
			class="fixed z-50 w-screen h-14 bottom-0 right-0 md:top-0 md:h-screen md:w-14 bg-secondary"
		>
			<div id="buttons" class="md:my-6 md:text-center overflow-y-auto overflow-x-hidden h-full">
				<button
					:aria-expanded="String(buttonMenu)"
					:class="`w-14 h-14 mx-auto inline-block align-middle bg-transparent border-0 ml-6 md:m-0 p-0 ${buttonMenu}`"
					@click="buttonMenu = !buttonMenu"
					aria-controls="menu"
					aria-haspopup="true"
					aria-label="Open / close the main navigation"
					id="menuToggle"
					title="Menu toggle for navigation"
				>
					<div class="grid w-full">
						<svg
							v-if="!buttonMenu"
							class="self-center mx-auto block"
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
							class="self-center mx-auto block"
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
					@click="buttonAccessibility = !buttonAccessibility"
					id="accessibilityToggle"
					:class="`w-14 h-14 mx-auto inline-block align-middle bg-transparent border-0 md:m-0 p-0 ${buttonAccessibility}`"
					title="Menu toggle for accessibility"
					aria-label="Open / close the accessibility menu"
					aria-haspopup="true"
					aria-controls="accessibilityList"
					:aria-expanded="String(buttonAccessibility)"
				>
					<div class="grid w-full">
						<svg
							class="self-center mx-auto block"
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
					id="accessibility"
					:class="`bg-secondary absolute bottom-14 left-0 w-full text-center md:relative md:top-0 md:w-12 md:mt-2 md:mx-auto ${buttonAccessibility}`"
				>
					<ul id="accessibilityList" class="m-0 p-0" aria-labelledby="accessibilityToggle">
						<li v-for="(e, i) in colors" :key="i" class="inline-block align-middle" role="listitem">
							<button
								@click="styleClass = e.name"
								class="w-12 h-12 mx-auto bg-transparent border-0 text-center p-0"
								:title="`Change theme to ${e.name}`"
							>
								<div
									class="w-8 h-8 rounded-full mx-auto border border-solid border-gray-100 border-opacity-80"
									:style="`background-color:${e.color}`"
									:aria-label="`Theme ${e.name}`"
								>
									<span class="hidden">{{ e.name }}Mode</span>
								</div>
							</button>
						</li>

						<li class="inline-block align-middle" role="listitem">
							<button
								@click="fontSize = fontSize + 1"
								class="w-12 h-12 mx-auto bg-transparent border-0 p-0"
								title="Font magnification"
								aria-label="Increase the font size of the site"
								:disabled="fontSize >= 25"
							>
								<div
									class="grid font-koho h-full text-1.5rem text-content text-right md:text-center w-full"
								>
									<span class="self-center">A+</span>
								</div>
							</button>
						</li>

						<li class="inline-block align-middle" role="listitem">
							<button
								@click="fontSize = fontSize - 1"
								class="w-12 h-12 mx-auto bg-transparent border-0 p-0"
								title="Font reduction"
								aria-label="Reduce the font size of the site"
								:disabled="fontSize <= 14"
							>
								<div
									class="grid font-koho h-full text-1.5rem text-content text-right md:text-center w-full"
								>
									<span class="self-center">A-</span>
								</div>
							</button>
						</li>
					</ul>
				</div>

				<ul
					class="p-0 m-0 inline-block align-middle"
					title="You have right to stalk me"
					aria-label="List of Timo Anttila's social media channels"
				>
					<li class="inline-block align-middle" role="none">
						<a
							class="w-14 h-14 mx-auto inline-block align-middle bg-transparent border-0 md:m-0 p-0 hide-210"
							href="https://twitter.com/_timoanttila"
							title="Timo Anttila on Twitter"
							aria-label="Open the link to Timo Anttila's profile on Twitter"
							role="listitem"
						>
							<div class="grid w-full h-full">
								<svg
									class="self-center mx-auto"
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
								>
									<title>Twitter</title>
									<path
										d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
									/>
								</svg>
							</div>
						</a>
					</li>

					<li class="inline-block align-middle" role="none">
						<a
							class="w-14 h-14 mx-auto inline-block align-middle bg-transparent border-0 md:m-0 p-0 hide-270"
							href="https://github.com/timoanttila"
							title="Timo Anttila on Github"
							aria-label="Open the link to Timo Anttila's profile on Github"
							role="listitem"
						>
							<div class="grid w-full h-full">
								<svg
									class="self-center mx-auto"
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
								>
									<title>Github</title>
									<path
										d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
									/>
								</svg>
							</div>
						</a>
					</li>

					<li class="inline-block align-middle" role="none">
						<a
							class="w-14 h-14 mx-auto inline-block align-middle bg-transparent border-0 md:m-0 p-0 hide-390"
							href="https://github.com/TuspeDesign"
							title="Tuspe Design on Github"
							aria-label="Open the link to Timo Anttila's company's profile on Github"
							role="listitem"
						>
							<div class="grid w-full h-full">
								<svg
									class="self-center mx-auto"
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
								>
									<title>Github</title>
									<path
										d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
									/>
								</svg>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</aside>
	</div>
</template>
<style>
.page-enter-active,
.page-leave-active {
	transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(1rem);
}
</style>
