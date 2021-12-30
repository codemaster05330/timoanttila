<template>
	<div id="about" class="fixedLayout">
		<MyPic />
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