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
const image = props.article.image ? `/images/${props.article.image}.webp` : site.image
const author = props.article.author || 'Timo Anttila'

let meta = [
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
	{property: 'canonical', content: canonical},
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
		name: 'author',
		content: author
	}
]

if (props.article.updatedAt) {
	meta.push({
		name: 'revised',
		property: 'article:modified_time',
		content: modified
	})
}

let link = [
	{
		rel: 'canonical',
		href: canonical
	}
]

if (props.article.alternative) {
	link.push({
		rel: 'alternate',
		href: props.article.alternative
	})
}

if (props.article.prevUrl) {
	link.push({
		rel: 'prev',
		href: `${site.url}/blog/${props.article.prevUrl}/`
	})
}

if (props.article.nextUrl) {
	link.push({
		rel: 'next',
		href: `${site.url}/blog/${props.article.nextUrl}/`
	})
}

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
	htmlAttrs: {lang: props.article.language || 'en'},
	title: props.article.title + ' | ' + site.name,
	meta,
	link,
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
					name: author,
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

		<div v-if="datesActive" id="articlePublished" class="mt-1 text-content">
			<small>
				<time :content="article.createdAt" :datetime="article.createdAt" itemprop="datePublished"
					><DateFormat :item="article.createdAt" dateType="MMM DD, YYYY"
				/></time>

				<span v-if="article.updatedAt">
					(modified
					<time :datetime="article.updatedAt" itemprop="dateModified" :content="article.updatedAt"
						><DateFormat :item="article.updatedAt" dateType="MMM DD, YY" /></time
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

		<div
			v-if="!article.type || article.type !== 'page'"
			id="articleSubMenu"
			class="absolute grid top-0 right-16"
		>
			<div>
				<LinkSquare
					v-if="article.prevUrl"
					icon="material-symbols:arrow-left-rounded"
					:link="`/blog/${article.prevUrl}/`"
					rel="prev"
					:iconSize="2.4"
					:title="article.prevTitle"
					aria="Previous article"
				/>
			</div>
			<div>
				<LinkSquare
					icon="material-symbols:list-alt-outline"
					link="/blog/"
					title="Stories about projects and life, easy-to-learn tutorials."
					aria="Blog index"
				/>
			</div>
			<div>
				<LinkSquare
					v-if="article.nextUrl"
					icon="material-symbols:arrow-right-rounded"
					:link="`/blog/${article.nextUrl}/`"
					rel="next"
					:iconSize="2.4"
					:title="article.nextTitle"
					aria="Next article"
				/>
			</div>
		</div>
	</header>
</template>

<style scoped lang="scss">
#articleSubMenu {
	grid-template-columns: repeat(3, 48px);
}
</style>
