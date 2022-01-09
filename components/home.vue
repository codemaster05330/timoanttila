<template>
	<div id="home" class="lg:grid lg:grid-cols-3 lg:h-screen">
		<MyPic />

		<div id="content" class="text-center grid z-10 lg:col-span-2">
			<article class="self-center px-4 max-w-prose mx-auto">
				<h1 class="font-koho text-title text-xl leading-1 lg:mt-0">
					Timo Anttila
				</h1>
				<p
					v-html="body"
					class="
						text-content
						leading-normal
						font-light font-montserrat
					"
				/>
			</article>
		</div>

		<no-ssr v-if="text">
			<vue-typed-js
				:strings="text"
				:loop="true"
				:backSpeed="30"
				:showCursor="true"
				:cursorChar="'_'"
				:smartBackspace="true"
				class="mx-auto block lg:fixed lg:bottom-10 lg:left-28"
			>
				<h2
					id="bigText"
					class="
						inline-block
						z-20
						font-koho
						text-title text-2xl
						m-0
						leading-1
						typing
						w-11/12
						text-center
						mx-auto
						lg:w-auto lg:text-left
					"
				></h2>
			</vue-typed-js>
		</no-ssr>
	</div>
</template>

<script>
	import { VueTypedJs } from "vue-typed-js";
	export default {
		components: {
			VueTypedJs,
		},
		props: {
			title: {
				type: String,
				default: "Timo Anttila",
			},
			body: {
				type: String,
				default: null,
			},
			lang: {
				type: String,
				default: "en",
			},
			description: {
				type: String,
				default: null,
			},
			text: {
				type: Array,
				default: null,
			},
		},
		data() {
			return {
				url: "https://timoanttila.com",
			};
		},
		mounted() {
			this.$store.commit("addLang", this.lang);
			this.$store.commit("addMain", "aboutPage");
		},
	};
</script>

<style scoped>
	h1:after {
		content: "";
		display: block;
		background-color: #ccc;
		height: 1px;
		margin: 1.5rem auto 1.75rem;
		max-width: 65px;
	}
	h2#bigText {
		font-size: clamp(2rem, 4.2rem, 10vw);
	}
</style>