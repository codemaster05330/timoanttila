export default defineNuxtConfig({
	modules: ['@nuxt/content', '@nuxt/image-edge', '@unocss/nuxt'],
	css: ['@/assets/global.scss'],
	unocss: {
		attributify: true,
		icons: true,
		uno: true
	}
})
