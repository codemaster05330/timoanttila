<script setup>
const props = defineProps({
	canonical: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	disclaimer: {
		type: String,
		default: ''
	},
	hid: {
		type: String,
		required: true
	},
	pubdate: {
		type: String,
		required: true
	},
	modified: {
		type: String,
		required: true
	}
})

const site = useState('site').value
const author = 'Timo Anttila'

useHead({
	title: props.title + ' | ' + site.name,
	meta: [
		{
			hid: props.hid,
			name: 'description',
			property: 'og:description',
			content: props.description
		},
		{
			property: 'og:title',
			name: 'twitter:title',
			content: props.title
		},
		{property: 'canonical', content: props.canonical},
		{
			content: props.image,
			name: 'twitter:image',
			property: 'og:image'
		},
		{
			content: props.image,
			property: 'og:image:secure_url'
		},
		{
			content: props.pubdate,
			name: 'pubdate',
			property: 'og:pubdate'
		},
		{
			name: 'revised',
			property: 'article:modified_time',
			content: props.modified
		},
		{
			name: 'author',
			content: author
		}
	],
	link: [
		{
			rel: 'canonical',
			href: props.canonical
		}
	],
	script: [
		{
			type: 'application/ld+json',
			children: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'BreadcrumbList',
				itemListElement: [
					{
						'@type': 'ListItem',
						position: 1,
						name: site.name,
						item: site.url + '/'
					},
					{
						'@type': 'ListItem',
						position: 2,
						name: props.title,
						item: props.canonical
					}
				]
			})
		}
	]
})
</script>

<template>
	<header class="text-center mb-10 max-w-screen-md mx-auto">
		<h1 id="articleTitle" class="m-0 text-title">
			{{ title }}
		</h1>
		<p id="articleDescription" class="mt-2 text-content text-desc">
			{{ description }}
		</p>
		<p v-if="disclaimer" class="-mt-2 text-content text-sm">
			{{ disclaimer }}
		</p>
	</header>
</template>
