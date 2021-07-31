export const state = () => ({
	lang: "en",
	page: {
		lang: "en",
		title: null,
		description: null,
		image: null,
		modified: null,
		created: null
	}
})

export const getters = {
	lang: (state) => { return state.lang },
	page: (state) => { return state.page },
}

export const mutations = {
	addLang(state, lang) {
		state.lang = lang;
	},
	currentPage(state, page) {
		state.page = page;
	}
}