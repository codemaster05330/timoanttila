<script setup>
const props = defineProps({
	article: {
		type: Object,
		required: true
	},
	articleType: {
		type: String,
		default: 'BlogPosting'
	},
	datesActive: {
		type: Boolean,
		default: true
	}
})

const site = useState('site').value
const canonical = site.url + props.article._path + '/'
const modified = props.article.updatedAt || props.article.createdAt
let image = site.url
image += `/images/${props.article.image}.jpg` || site.image

let breadcrumb = [
	{
		'@type': 'ListItem',
		position: 1,
		name: site.name,
		item: site.url + '/'
	}
]

const items = props.article._path.split('/')
let position = 2

if (items[1] === 'blog') {
	breadcrumb.push({
		'@type': 'ListItem',
		position,
		name: 'Articles',
		item: site.url + '/blog/'
	})
	position++
}

breadcrumb.push({
	'@type': 'ListItem',
	position,
	name: props.article.title,
	item: canonical
})

useHead({
	title: props.article.title + ' | ' + site.name,
	meta: [
		{
			hid: props.article._path,
			name: 'description',
			property: 'og:description',
			content: props.article.description
		},
		{
			property: 'og:title',
			name: 'twitter:title',
			content: props.article.title
		},
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
		},
		{
			name: 'revised',
			property: 'article:modified_time',
			content: modified
		}
	],
	link: [
		{
			rel: 'canonical',
			href: canonical
		}
	],
	script: [
		{
			type: 'application/ld+json',
			children: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': props.articleType,
				mainEntityOfPage: {
					'@type': 'WebPage',
					'@id': canonical
				},
				headline: props.article.title,
				image: image,
				author: {
					'@type': 'Person',
					name: 'Timo Anttila',
					url: site.url
				},
				datePublished: props.article.createdAt,
				dateModified: modified
			})
		},
		{
			type: 'application/ld+json',
			children: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'BreadcrumbList',
				itemListElement: breadcrumb
			})
		}
	]
})
</script>

<template>
	<header class="max-w-screen-md mx-auto pb-6 text-center">
		<h1 id="articleTitle" class="m-0 text-title" itemprop="headline">{{ article.title }}</h1>
		<div id="articleDescription" class="mt-4" itemprop="description">
			{{ article.description }}
		</div>

		<div
			v-if="datesActive"
			id="articlePublished"
			class="font-montserrat font-light mt-1 text-content"
		>
			<small>
				<time :content="article.createdAt" :datetime="article.createdAt" itemprop="datePublished"
					><DateFormat :item="article.createdAt" dateType="MMMM DD, YYYY"
				/></time>

				<span v-if="article.updatedAt"
					>(last modified
					<time :datetime="article.updatedAt" itemprop="dateModified" :content="article.updatedAt"
						><DateFormat :item="article.createdAt" dateType="MMMM DD, YYYY" /></time
					>)</span
				>
				by
				<span itemprop="author" itemscope itemtype="https://schema.org/Person">
					<NuxtLink
						class="no-underline text-content"
						href="https://timoanttila.com/"
						itemprop="url"
						rel="author"
					>
						<span itemprop="name">Timo Anttila</span>
					</NuxtLink>
				</span>
			</small>
		</div>
	</header>
</template>
