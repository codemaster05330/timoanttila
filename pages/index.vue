<template>
	<Home
		title="Timo Anttila"
		body="A self-taught passionate web developer who loves creating awesome things from scratch, solving problems, and learning new ways to deliver solutions. I spend most of my day in front of the screen coding with metal and hard rock playing in the background, but I never miss the daily workout and forest walks with the dog. Also active in various volunteer activities. My motto is ‘only a fool worries over what he can't control’."
		description="Timo Anttila is a self-taught passionate developer, who loves solving problems and learning new ways to deliver solutions. Full Stack Web Developer and entrepreneur."
		lang="en"
		:text="[
			'Full Stack Developer',
			'Youth work volunteer',
			'Entrepreneur',
			'SEO Specialist',
			'A small investor',
			'Nature lover',
		]"
	/>
</template>

<script>
	import Home from "@/components/home";
	export default {
		components: {
			Home,
		},
		name: "HomeEng",
	};
</script>