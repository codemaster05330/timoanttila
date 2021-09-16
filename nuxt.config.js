export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'format-detection', content: 'telephone=no' },
			{ name: 'twitter:site', content: '@_timoanttila' },
			{ name: 'twitter:creator', content: '@_timoanttila' },
			{ name: 'twitter:card', content: 'summary_large_image' },
			{ property: "og:site_name", content: "Timo Anttila" },
			{ name: 'email', property: 'og:email', content: 'moro@tuspe.com' },
			{ name: 'telephone', property: 'og:phone_number', content: '+358407746121' },
			{ property: 'og:site_name', content: 'Timo Anttila' },
			{ name: 'geo.placename', content: 'Nokia' },
			{ name: 'geo.region', content: 'FI-11' },
			{ name: 'geo:position', content: '61.4888946;23.4921663' },
			{ name: 'ICBM', content: '61.4888946,23.4921663' },
			{ name: 'theme-color', content: '#2c5364' },
			{ name: 'apple-mobile-web-app-status-bar-style', content: '#2c5364' },
			{ name: 'apple-mobile-web-app-capable', content: 'yes' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: 'https://timoanttila.com/favicon.ico', sizes: '16x16' },
			{ rel: 'icon', type: 'image/png', href: 'https://timoanttila.com/favicon.png', sizes: '96x96' },
			{ rel: 'me', type: 'application/atom+xml', href: 'https://github.com/timoanttila/timoanttila/commits/master.atom', title: 'Newest commits to the project' }
		],
		script: [
			{
				"@context": "https://schema.org/", "@type": "Person", "name": "Timo Anttila", "url": "https://timoanttila.com", "image": "https://timoanttila.com/images/timo.jpg", "sameAs": ["https://github.com/timoanttila", "https://github.com/TuspeDesign", "https://github.com/RatsukkoSolutions", "https://www.linkedin.com/in/anttilatimo/", "https://twitter.com/_timoanttila", "https://trakt.tv/users/timoanttila", "https://www.instagram.com/_timoanttila/", "https://www.goodreads.com/user/show/104287756-timo-anttila", "https://ello.co/timoanttila", "https://www.reddit.com/user/timoanttila", "https://keybase.io/timoanttila", "https://timoanttila.carrd.co/"], "jobTitle": ["Chief Executive Officer", "Chief Technology Officer", "Full Stack Developer"], "worksFor": { "@type": "Organization", "name": "Tuspe Design Oy" }
			},
		],
	},
	markdown: {
		prism: {
			theme: false
		}
	},
	css: [
		'~/static/style.scss',
	],
	components: true,
	modules: [,
		'@nuxt/content'
	],
	generate: {
		async routes() {
			const { $content } = require('@nuxt/content')
			const files = await $content({ deep: true }).only(['path']).fetch()

			return files.map(file => file.path === '/index' ? '/' : file.path)
		},
	}
}
