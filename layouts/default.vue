<template>
	<div id="matrix" class="relative">
		<HeaderBlock />
		<main class="block">
			<Nuxt keep-alive />
		</main>
		<Footer />
	</div>
</template>

<script>
	import HeaderBlock from "@/components/header";
	import FooterBlock from "@/components/footer";

	export default {
		components: {
			HeaderBlock,
			FooterBlock,
		},
	};
</script>