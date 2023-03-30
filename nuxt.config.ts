export default defineNuxtConfig({
	target: 'static',
	experimental: {
		payloadExtraction: false
	},
	modules: ['@nuxt/content', '@unocss/nuxt'],
	css: ['@/assets/global.scss'],
	unocss: {
		attributify: true,
		uno: true
	},
	routeRules: {
		'*': {static: true, ssr: true},
		'/fi': {redirect: '/'},
		'/fi/info': {redirect: '/about/'},
		'/tutorials': {redirect: '/blog/'},
		'/tutorials/*': {redirect: '/blog/'}
	}
})
