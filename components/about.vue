<template>
	<div id="about" class="lg:grid lg:grid-cols-3">
		<MyPic />

		<div v-if="page" id="content" class="lg:col-span-2 grid">
			<article
				class="
					block
					self-center
					max-w-2xl
					mx-auto
					px-4
					bg-primary
					z-30
					relative
				"
			>
				<h1
					id="bigText"
					class="
						z-20
						text-title text-center
						font-koho
						leading-1
						my-6
						mx-auto
						max-w-lg
						text-lg
						xl:text-xl xl:my-0 xl:fixed xl:bottom-6 xl:left-4
						2xl:max-w-xl 2xl:left-18
					"
				>
					{{ page.title }}
				</h1>
				<nuxt-content
					:document="page"
					class="
						text-content
						font-montserrat font-light
						leading-normal
					"
				/>
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