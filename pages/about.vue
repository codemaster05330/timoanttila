<script setup>
const {data: article} = await useAsyncData('about', () => queryContent('/about').findOne())

const site = useState('site').value
const title = 'What is going on in my life right now?'
const description =
	'Welcome to getting to know me more. On this page, you will comprehensively find everything that is important to me at the moment in my professional and personal life.'
const pubdate = '2015-09-16T22:03:47+03:00'
const updated = '2022-12-24T20:02:20+02:00'

useHead({
	title: title + ' | ' + site.name,
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
			content: title
		},
		{
			name: 'twitter:image',
			property: 'og:image',
			content: site.image
		},
		{
			property: 'og:image:secure_url',
			content: site.image
		},
		{
			name: 'pubdate',
			property: 'og:pubdate',
			content: pubdate
		},
		{
			property: 'article:published_time',
			content: pubdate
		},
		{
			name: 'revised',
			property: 'article:modified_time',
			content: updated
		}
	]
})
</script>

<template>
	<div id="content" class="lg:grid-cols-3 grid">
		<MyPic />

		<div v-if="article" id="content" class="lg:col-span-2">
			<article class="block max-w-2xl mx-auto px-4 bg-primary z-30 relative">
				<h1
					id="bigText"
					class="z-20 text-title text-center font-koho my-6 mx-auto max-w-md xl:my-0 xl:fixed xl:bottom-6 xl:left-4 2xl:max-w-xl 2xl:left-18"
				>
					{{ article.title }}
				</h1>
				<ContentDoc class="font-montserrat font-light text-content" />
			</article>
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
