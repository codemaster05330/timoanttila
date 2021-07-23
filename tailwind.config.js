module.exports = {
	//mode: 'jit',
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	plugins: [],
	purge: {
		enabled: true,
		preserveHtmlElements: false,
		content: [
			`components/**/*.{vue,js}`,
			`layouts/**/*.vue`,
			`pages/**/*.vue`,
			`plugins/**/*.{js,ts}`,
			`nuxt.config.{js,ts}`
		]
	},
	corePlugins: {
		preflight: false,
		fontFamily: false,
		fontWeight: false,
		userSelect: false
	},
	theme: {
		colors: {
			white: {
				light: 'rgba(255,255,255,.87)',
				DEFAULT: '#fff'
			},
			purple: {
				light: '#8D80AD',
				DEFAULT: '#422e43'
			},
			yellow: {
				DEFAULT: '#FFDE59'
			}
		}
		/*
			colors: {
				blue: {
					DEFAULT: '#1c2938',
					dark: '#15202b',
				},
				
				black: {
					DEFAULT: '#000'
				},
				gray: {
					light: '#e5e7eb',
					DEFAULT: '#374151',
					dark: '#1f2937'
				},
				green: {
					DEFAULT: '#24b5bc'
				}
			}
			*/
	}
}