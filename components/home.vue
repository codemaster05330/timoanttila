<template>
	<div id="home" class="fixedLayout overflow-hidden">
		<MyPic />
		<div id="content" class="text-white text-center grid z-10">
			<article class="self-center">
				<h1 class="text-yellow mt-0 line-1">Timo Anttila</h1>
				<p v-html="body" />
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
			>
				<h2
					id="bigText"
					class="inline-block z-20 text-yellow m-0 line-1 typing"
				></h2>
			</vue-typed-js>
		</no-ssr>
	</div>
</template>

<script>
	import MyPic from "@/components/mypic";
	import { VueTypedJs } from "vue-typed-js";
	export default {
		components: {
			MyPic,
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
			this.$store.commit("currentPage", {
				title: this.title,
				description: this.description,
				image: this.url + "/images/timoanttila.jpg",
				url: this.url + $nuxt.$route.fullPath,
				hid: $nuxt.$route.path,
			});
		},
	};
</script>

<style lang="scss" scoped>
	h1 {
		font-size: clamp(2rem, 3.4rem, 10vw);
		&:after {
			content: "";
			display: block;
			background-color: #ccc;
			height: 1px;
			margin: 1.5rem auto 1.75rem;
			max-width: 65px;
		}
	}
</style>