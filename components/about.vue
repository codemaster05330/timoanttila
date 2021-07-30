<template>
	<div id="about" class="fixedLayout">
		<MyPic />
		<div v-if="about && page" id="content" class="text-white grid z-10">
			<article class="self-center content">
				<h1 id="bigText" class="z-20 text-yellow text-center m-0">
					{{ page.title }}
				</h1>
				<nuxt-content :document="page" />
			</article>
		</div>
	</div>
</template>

<script>
	import MyPic from "@/components/mypic";
	export default {
		components: {
			MyPic,
		},
		name: "About",
		props: {
			query: {
				type: String,
				default: "about",
			},
		},
		async asyncData({ $content }) {
			const page = await $content(this.query).fetch();
			return {
				page,
			};
		},
	};
</script>

<style scoped>
	@media screen and (min-width: 1000px) {
		#content {
			left: 42vw;
			max-width: 45vw;
		}
		#myPic {
			left: 2vw;
			width: 38vw;
		}
		#bigText {
			left: 2vw;
			bottom: 1.5rem;
			font-size: 2.6rem;
			max-width: 36vw;
		}
	}

	@media screen and (min-width: 1200px) {
		#bigText {
			font-size: 3rem;
		}
	}

	@media screen and (min-width: 1750px) {
		#content {
			left: 50vw;
			max-width: 750px;
		}
		#myPic {
			width: 45vw;
		}
		#bigText {
			left: 10vw;
			font-size: 4rem;
			max-width: 600px;
		}
	}
</style>