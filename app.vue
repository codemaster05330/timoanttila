<script setup>
const url = 'https://timoanttila.com'
useState('site', () => ({name: 'Timo Anttila', url, image: url + '/images/laptop-social.webp'}))

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
		{property: 'og:site_name', content: 'Timo Anttila'},
		{'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
		{name: 'msapplication-TileColor', content: '#422e43'},
		{name: 'msapplication-TileImage', content: '#422e43'},
		{name: 'theme-color', content: '#422e43'}
	],
	link: [
		{rel: 'apple-touch-icon', sizes: '180x180', type: 'image/png', href: '/apple-touch-icon.png'},
		{rel: 'icon', sizes: '32x32', type: 'image/png', href: '/favicon-32x32.png'},
		{rel: 'icon', sizes: '16x16', type: 'image/png', href: '/favicon-16x16.png'},
		{rel: 'icon', type: 'image/x-icon', href: url + '/favicon.ico'},
		{rel: 'manifest', href: '/site.webmanifest'},
		{rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#422e43'}
	],
	script: [
		{
			type: 'application/ld+json',
			children: JSON.stringify({
				'@context': 'https://schema.org/',
				'@type': 'Person',
				name: 'Timo Anttila',
				url: 'https://timoanttila.com/',
				image: 'https://timoanttila.com/timo.jpg',
				sameAs: [
					'https://timoanttila.com/',
					'https://twitter.com/_timoanttila',
					'https://www.linkedin.com/in/anttilatimo/',
					'https://github.com/timoanttila',
					'https://www.etoro.com/people/timoanttila',
					'https://trakt.tv/users/timoanttila',
					'https://www.goodreads.com/timoanttila',
					'https://www.instagram.com/_timoanttila/',
					'https://www.youtube.com/@timoanttila',
					'https://tuspe.com/'
				],
				jobTitle: [
					'Frontend Developer',
					'Full Stack Developer',
					'Entrepreneur',
					'Chief executive officer'
				],
				worksFor: [
					{
						'@type': 'Organization',
						name: 'Quux Oy'
					},
					{
						'@type': 'Organization',
						name: 'Tuspe Design Oy'
					},
					{
						'@type': 'Organization',
						name: 'Ratsukko Oy'
					}
				]
			})
		}
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
		path: '/about/',
		title: 'About'
	},
	{
		description: 'A collection of articles about web development, programming, and life.',
		path: '/blog/',
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
	},
	{
		name: 'white',
		color: '#f2f2f2'
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
		class="relative w-screen overflow-x-hidden bg-primary"
		:class="styleClass"
		:style="`font-size:${fontSize}px`"
	>
		<ul class="false" aria-label="Links to page content and navigation">
			<li><a href="#content">Jump to the content</a></li>
			<li><a href="#menu">Jump to the navigation</a></li>
			<li><a href="#buttons">Jump to the sidebar buttons</a></li>
		</ul>

		<main class="block min-h-screen">
			<NuxtPage />
		</main>

		<nav
			id="menu"
			:class="`fixed top-0 left-0 w-screen h-screen text-center grid bg-primary z-40 ${buttonMenu}`"
			aria-labelledby="menuToggle"
		>
			<ul id="menuList" class="-mt-16 mb-0 p-0 self-center font-koho w-56 mx-auto">
				<li v-for="item in menu" :key="item.id" class="block">
					<NuxtLink
						:to="item.path"
						@click.native="buttonMenu = false"
						class="text-content p-3 uppercase block no-underline"
						:aria-label="item.description"
					>
						{{ item.title }}
					</NuxtLink>
				</li>
			</ul>
		</nav>

		<aside id="menubar" class="bg-secondary">
			<div id="buttons" class="overflow-y-auto overflow-x-hidden h-full">
				<div>
					<ButtonSquare
						:aria-expanded="String(buttonMenu)"
						:class="`w-12 h-12 mx-auto inline-block align-middle bg-transparent border-0 m-0 p-0 ${buttonMenu}`"
						@click="buttonMenu = !buttonMenu"
						aria-controls="menu"
						aria-haspopup="true"
						aria-label="Open / close the main navigation"
						icon="ic:round-menu"
						id="menuToggle"
						title="Menu toggle for navigation"
					/>

					<ButtonSquare
						:aria-expanded="String(buttonAccessibility)"
						:class="`w-12 h-12 mx-auto inline-block align-middle bg-transparent border-0 m-0 p-0 ${buttonAccessibility}`"
						@click="buttonAccessibility = !buttonAccessibility"
						aria-controls="accessibility"
						aria-haspopup="true"
						aria-label="Open / close the accessibility menu"
						icon="tabler:accessible"
						id="accessibilityToggle"
						title="Menu toggle for accessibility"
					/>
				</div>

				<div id="accessibility" :class="`${buttonAccessibility}`">
					<ul
						id="accessibilityColors"
						class="align-middle inline-block m-0 p-0"
						aria-label="Theme color options"
					>
						<li v-for="(e, i) in colors" :key="i" class="inline-block align-middle">
							<button
								:title="`Change theme to ${e.name}`"
								@click="styleClass = e.name"
								class="bg-transparent border-0 h-12 mx-auto text-center p-0 w-12"
							>
								<span
									:style="`background-color:${e.color}`"
									class="block border border-solid border-text border-opacity-80 h-8 mx-auto rounded-full w-8"
								>
									<span class="hidden">{{ e.name }}Mode</span>
								</span>
							</button>
						</li>
					</ul>

					<ul
						id="accessibilityFontSizes"
						class="align-middle inline-block m-0 p-0"
						aria-label="Theme's font size options"
					>
						<li class="inline-block align-middle">
							<button
								:disabled="fontSize >= 25"
								@click="fontSize = fontSize + 1"
								aria-label="Increase the font size of the site"
								class="bg-transparent border-0 grid font-koho h-12 mx-auto p-0 text-1.5rem w-12"
								title="Font magnification"
							>
								<span class="self-center">A+</span>
							</button>
						</li>

						<li class="inline-block align-middle">
							<button
								:disabled="fontSize <= 14"
								@click="fontSize = fontSize - 1"
								aria-label="Reduce the font size of the site"
								class="bg-transparent border-0 grid font-koho h-12 mx-auto p-0 text-1.5rem w-12"
								title="Font reduction"
							>
								<span class="self-center">A-</span>
							</button>
						</li>
					</ul>
				</div>

				<ul
					aria-label="List of Timo Anttila's social media channels"
					class="p-0 mb-0 mt-6 mx-0 inline-block align-middle"
					title="You have right to stalk me"
				>
					<li class="inline-block align-middle">
						<LinkSquare
							icon="ri:linkedin-fill"
							aria-label="Open the link to Timo Anttila's profile on LinkedIn"
							link="https://www.linkedin.com/in/anttilatimo/"
							title="Timo Anttila on Twitter"
						/>
					</li>

					<li class="inline-block align-middle">
						<LinkSquare
							icon="mdi:twitter"
							aria-label="Open the link to Timo Anttila's profile on Twitter"
							link="https://twitter.com/_timoanttila"
							title="Timo Anttila on Twitter"
						/>
					</li>

					<li class="inline-block align-middle">
						<LinkSquare
							icon="fe:github-alt"
							aria-label="Open the link to Timo Anttila's profile on Github"
							link="https://github.com/timoanttila"
							title="Timo Anttila on Github"
						/>
					</li>

					<li class="inline-block align-middle" role="none">
						<LinkSquare
							icon="simple-icons:trakt"
							aria-label="Open the link to Timo Anttila's profile on Trakt.tv"
							link="https://trakt.tv/users/timoanttila"
							title="Timo Anttila on Goodreads"
						/>
					</li>

					<li class="inline-block align-middle" role="none">
						<LinkSquare
							icon="mdi:goodreads"
							aria-label="Open the link to Timo Anttila's profile on Goodreads"
							class="w-12 h-12 mx-auto inline-block align-middle bg-transparent border-0 md:m-0 p-0 hide-270"
							link="https://www.goodreads.com/timoanttila"
							title="Timo Anttila on Goodreads"
						/>
					</li>
				</ul>
			</div>
		</aside>
	</div>
</template>
