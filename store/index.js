export const state = () => ({
	lang: "en",
	mainId: null,
	page: {
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
	main: (state) => { return state.mainId },
}

export const mutations = {
	addLang(state, lang) {
		state.lang = lang;
	},
	addMain(state, id) {
		state.mainId = id;
	},
	currentPage(state, page) {
		state.page = page;
	}
}