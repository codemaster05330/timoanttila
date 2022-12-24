<script setup>
const props = defineProps({
	article: {
		type: Object,
		required: true
	}
})

const site = useState('site').value
let image = site.url
image += props.article.image || site.image

useHead({
	titleTemplate: '%s | ' + site.name,
	meta: [
		{property: 'canonical', content: site.url + props.article._path},
		{
			content: image,
			name: 'twitter:image',
			property: 'og:image'
		},
		{
			content: image,
			property: 'og:image:secure_url'
		},
		{
			content: props.article.createdAt,
			name: 'pubdate',
			property: 'og:pubdate'
		},
		{
			content: props.article.createdAt,
			property: 'article:published_time'
		}
	]
})
</script>

<template>
	<header class="max-w-screen-md mx-auto pb-10 text-center">
		<h1 class="m-0 text-title">{{ article.title }}</h1>
		<div class="mt-4 text-1.25em">{{ article.description }}</div>
	</header>
</template>
