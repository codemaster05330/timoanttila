<template>
	<Home
		body="A self-taught passionate web developer who loves creating
	awesome things from scratch, solving problems, and learning new ways to
	deliver solutions. I spend most of my day in front of the screen coding with
	metal and hard rock playing in the background, but I never miss the daily
	workout and forest walks with the dog. Also active in various volunteer
	activities. My motto is ‘only a fool worries over what he can't control’."
		lang="en"
		:text="[
			'Hey there, I am Timo',
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
	export default {
		name: "HomeEN",
		data() {
			return {
				title: "Timo Anttila | It all starts with a dream!",
				description:
					"Timo Anttila is a self-taught passionate developer, who loves solving problems and learning new ways to deliver solutions. Full Stack Web Developer and entrepreneur.",
				url: "https://timoanttila.com/",
			};
		},
		head() {
			return {
				htmlAttrs: { lang: "en" },
				title: this.title,
				link: [
					{
						rel: "canonical",
						property: "og:url",
						href: this.url,
					},
					{
						rel: "me",
						type: "application/atom+xml",
						href: "https://github.com/timoanttila/timoanttila/commits/master.atom",
						title: "Newest commits to the project",
					},
					{
						rel: "me",
						type: "text/html",
						href: "https://tuspe.com/",
						title: "My company Tuspe Design Oy",
					},
				],
				meta: [
					{ property: "og:locale", content: "en_US" },
					{
						property: "og:title",
						name: "twitter:title",
						content: this.title,
					},
					{
						hid: "home-en",
						name: "description",
						content: this.description,
					},
					{
						name: "twitter:description",
						property: "og:description",
						content: this.description,
					},
					{
						name: "twitter:image",
						property: "og:image",
						content: "https://timoanttila.com/images/timoanttila.jpg",
					},
					{ property: "og:site_name", content: "Timo Anttila" },
				],
			};
		},
	};
</script>