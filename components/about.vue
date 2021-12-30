<template>
	<div id="about" class="fixedLayout">
		<picture id="myPic" class="block">
			<source srcset="/images/timoanttila.webp" type="image/webp" />
			<source srcset="/images/timoanttila.jpg" type="image/jpeg" />
			<img
				class="block w-full h-full object-cover"
				src="/images/timoanttila.jpg"
				alt="A self-taught passionate developer Timo Anttila"
				aria-label="Portrait of Timo Anttila"
			/>
		</picture>

		<div v-if="page" id="content" class="text-white grid z-10">
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
	export default {
		props: {
			page: {
				type: Object,
				default: null,
			},
		},
		mounted() {
			this.$store.commit("addMain", "aboutPage");
		},
	};
</script>

<style scoped>
	@media screen and (min-width: 1000px) {
		#bigText {
			width: 30vw;
			max-width: 432px;
		}
	}
</style>