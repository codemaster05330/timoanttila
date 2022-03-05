export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		meta: [
			{ charset: 'UTF-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
			{ name: 'format-detection', content: 'telephone=no' },
			{ property: 'og:type', content: 'article' },
			{ property: 'og:site_name', content: 'Timo Anttila' },
			{ name: 'email', property: 'og:email', content: 'moro@tuspe.com' },
			{ name: 'telephone', property: 'og:phone_number', content: '+358407746121' },
			{ name: 'geo.placename', content: 'Nokia' },
			{ name: "twitter:image", property: "og:image", content: "https://timoanttila.com/images/laptop-social.jpg" },
			{ property: "og:image:secure_url", content: "https://timoanttila.com/images/laptop-social.jpg" },
			{ property: "og:image:width", content: "1200" },
			{ property: "og:image:height", content: "630" },
			{ property: "og:image:type", content: "jpeg" },
			{ name: "twitter:image:alt", property: "og:image:alt", content: "Black laptop on a dark background" },
			{ name: 'twitter:site', content: '@_timoanttila' },
			{ name: 'twitter:creator', content: '@_timoanttila' },
			{ name: 'twitter:card', content: 'summary_large_image' },
			{ name: 'latitude', property: 'og:latitude', content: '61.489173' },
			{ name: 'longitude', property: 'og:longitude', content: '23.492723' },
			{ name: 'geo.region', content: 'FI-11' },
			{ name: 'geo.position', content: '61.489173;23.492723' },
			{ name: 'ICBM', content: '61.489173, 23.492723' },
			{ name: 'theme-color', content: '#2c5364' },
			{ name: 'apple-mobile-web-app-status-bar-style', content: '#2c5364' },
			{ name: 'apple-mobile-web-app-capable', content: 'yes' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: 'https://timoanttila.com/favicon.ico', sizes: '16x16' },
			{ rel: 'icon', type: 'image/png', href: 'https://timoanttila.com/favicon.png', sizes: '96x96' }
		],
		script: [
			{
				type: 'application/ld+json',
				json: {
					"@context": "https://schema.org/", "@type": "Person", "name": "Timo Anttila", "url": "https://timoanttila.com", "image": "https://timoanttila.com/images/timoanttila.jpg", "sameAs": ["https://github.com/timoanttila", "https://github.com/TuspeDesign", "https://www.linkedin.com/in/anttilatimo/", "https://twitter.com/_timoanttila", "https://trakt.tv/users/timoanttila", "https://www.goodreads.com/user/show/104287756-timo-anttila", "https://www.polywork.com/timoanttila", "https://www.reddit.com/user/timoanttila", "https://keybase.io/timoanttila", "https://timoanttila.carrd.co/"], "jobTitle": ["Entrepreneur", "Chief Executive Officer", "Chief Technology Officer", "Full Stack Developer"], "worksFor": [{ "@type": "Organization", "name": "Tuspe Design Oy" }, { "@type": "Organization", "name": "Ratsukko Solutions Oy" }]
				}
			},
		],
	},
	content: {
		markdown: {
			prism: {
				theme: false
			}
		}
	},
	css: [
		'@/assets/global.css',
	],
	components: true,
	modules: [
		'@nuxt/content'
	],
	generate: {
		async routes() {
			const { $content } = require('@nuxt/content')
			const files = await $content({ deep: true }).only(['path']).fetch()

			return files.map(file => file.path === '/index' ? '/' : file.path)
		},
	},
	buildModules: [
		'@nuxtjs/tailwindcss'
	],
}
