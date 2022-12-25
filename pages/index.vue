<script setup>
const site = useState('site').value
const description =
	'Timo Anttila is a self-taught passionate developer, who loves solving problems and learning new ways to deliver solutions. Full Stack Web Developer and entrepreneur.'
const image = site.url + '/images/social-timoanttila.jpg'

const body =
	'A self-taught passionate web developer who loves creating awesome things from scratch, solving problems, and learning new ways to deliver solutions. I spend most of my day in front of the screen coding with metal and hard rock playing in the background, but I never miss the daily workout and forest walks with the dog. Also active in various volunteer activities.'

useHead({
	title: site.name + ' | It all starts with a dream!',
	meta: [
		{
			hid: 'page-blog',
			name: 'description',
			property: 'og:description',
			content: description
		},
		{
			property: 'og:title',
			name: 'twitter:title',
			content: site.name
		},
		{
			name: 'twitter:image',
			property: 'og:image',
			content: image
		},
		{
			property: 'og:image:secure_url',
			content: image
		}
	],
	link: [
		{
			rel: 'canonical',
			property: 'og:url',
			href: site.url
		},
		{
			rel: 'me',
			type: 'application/atom+xml',
			href: 'https://github.com/timoanttila/timoanttila/commits/master.atom',
			title: 'Newest commits to the project'
		},
		{
			rel: 'me',
			type: 'text/html',
			href: 'https://tuspe.com/',
			title: 'My company Tuspe Design Oy'
		}
	]
})
</script>

<template>
	<div id="home" class="lg:grid lg:grid-cols-3 lg:h-screen">
		<MyPic />

		<div id="content" class="text-center grid z-10 lg:col-span-2">
			<div class="self-center max-w-prose mx-auto">
				<h1 class="font-koho text-title lg:mt-0">Timo Anttila</h1>
				<p v-html="body" class="text-content font-light font-montserrat" />
			</div>
		</div>
	</div>
</template>

<style scoped>
h1:after {
	content: '';
	display: block;
	background-color: #ccc;
	height: 1px;
	margin: 1.5rem auto 1.75rem;
	max-width: 65px;
}
h2#bigText {
	font-size: clamp(2rem, 3.8rem, 10vw);
}
@media screen and (max-width: 1000px) {
	#bigText {
		height: 100px;
	}
}
</style>
