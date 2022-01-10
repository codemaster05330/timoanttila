<template>
	<div class="h-screen grid text-center px-4">
		<div class="self-center -mt-10 mx-auto max-w-xl">
			<h1 class="text-title text-xl font-koho font-normal m-0">
				{{ title }}
			</h1>
			<p class="text-content font-montserrat font-light leading-normal">
				I apologize for any inconvenience by providing this page instead
				of what you looked for. You should head to the
				<nuxt-link to="/" class="text-link">front page</nuxt-link> next.
				Hopefully, you find what you are looking for.
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		layout: "default",
		props: ["error"],
		data() {
			return {
				title: null,
			};
		},
		mounted() {
			this.title =
				this.error.statusCode === 404
					? "Page not found"
					: "An error occurred";
		},
		head() {
			return {
				htmlAttrs: { lang: "en" },
				title: "Error " + this.error.statusCode + " | " + this.title,
			};
		},
	};
</script>
