<template>
	<div id="home" class="fixedLayout overflow-hidden">
		<MyPic/>
		<div
		id="content"
			class="
				text-white text-center
				grid
				z-10
			"
		>
			<article class="self-center">
				<h1 class="text-yellow mt-0 line-1">{{ title }}</h1>
				<p v-html="body"/>
			</article>
		</div>

		<h2 id="bigText" class="z-20 text-yellow m-0 line-1">Web Developmenti</h2>
		</div>
	</div>
</template>

<script>
	import MyPic from "@/components/mypic";
	export default {
		components: {
			MyPic,
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
		},
		head() {
			return {
				title: this.title + " | It all starts with a dream!",
				description: this.description,
				htmlAttrs: {
					lang: this.lang,
				},
			};
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

	@media screen and (min-width: 1000px) {
		#content {
			left: 50vw;
			max-width: 600px;
			height: 100vh;
		}
		#myPic {
			left: 2vw;
			width: 48vw;
		}
		#bigText {
			left: 10vw;
			font-size: 4rem;
			max-width: 600px;
		}
	}
	@media screen and (min-width: 1920px) {
		#bigText {
			left: 15vw;
			font-size: 5rem;
			max-width: 36vw;
		}
		#myPic {
			width: 50vw;
		}
	}
</style>