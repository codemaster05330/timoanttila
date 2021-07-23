<template>
	<ImageBlock
		id="myPic"
		:styles="styles"
		item="timoanttila"
		title="A self-taught passionate developer Timo Anttila"
		aria-label="Portrait of Timo Anttila"
	/>
</template>

<script>
	import ImageBlock from "@/components/img";
	export default {
		props: {
			styles: {
				type: String,
				default: "max-w-screen-md 2xl:max-w-7xl",
			},
		},
		components: {
			ImageBlock,
		},
	};
</script>