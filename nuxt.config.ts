export default defineNuxtConfig({
	modules: ['@nuxt/content', '@nuxt/image-edge', '@unocss/nuxt'],
	css: ['@/assets/global.scss'],
	unocss: {
		attributify: true,
		icons: true,
		uno: true
	},
	routeRules: {
		'*': {static: true},
		'/fi': {redirect: '/'},
		'/fi/info': {redirect: '/about/'},
		'/tutorials': {redirect: '/blog/'},
		'/tutorials/*': {redirect: '/blog/'}
	}
})
