<script setup>
const {data: articles} = await useAsyncData('articles', () =>
	queryContent('/blog')
		.only(['title', 'description', '_path', 'createdAt'])
		.sort({createdAt: -1})
		.find()
)

const site = useState('site').value
const title = 'Articles'
const description = 'Stories about projects and life, easy-to-learn tutorials.'
const pubdate = '2015-09-16T22:03:47+03:00'
const modified = '2023-01-10T20:02:24+02:00'
const canonical = site.url + '/blog/'

useHead({
	htmlAttrs: {lang: 'en'},
	title: `${title} | ${useState('site').value.name}`,
	meta: [
		{
			content: description,
			hid: 'page-blog',
			name: 'description',
			property: 'og:description'
		},
		{
			content: title,
			name: 'twitter:title',
			property: 'og:title'
		},
		{
			content: site.image,
			name: 'twitter:image',
			property: 'og:image'
		},
		{
			content: site.image,
			property: 'og:image:secure_url'
		},
		{
			content: pubdate,
			name: 'pubdate',
			property: 'og:pubdate'
		},
		{
			content: pubdate,
			property: 'article:published_time'
		},
		{
			content: modified,
			name: 'revised',
			property: 'article:modified_time'
		}
	],
	link: [
		{
			href: canonical,
			rel: 'canonical'
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
						item: site.url
					},
					{
						'@type': 'ListItem',
						position: 1,
						name: title,
						item: canonical
					}
				]
			})
		}
	]
})
</script>

<template>
	<div id="content">
		<header class="text-center mb-10 max-w-lg mx-auto">
			<h1 class="m-0 text-title">
				{{ title }}
			</h1>
			<p id="articleDescription" class="mt-2 text-content text-desc">
				{{ description }}
			</p>
		</header>

		<ul
			v-if="articles"
			id="articles"
			class="grid gap-6 xl:grid-cols-2 2xl:grid-cols-3 m-0 pl-0"
			aria-label="List of articles I have written"
		>
			<li
				v-for="(item, i) in articles"
				:key="i"
				class="listItem"
				:aria-labelledby="`title-${i}`"
				:aria-describedby="`description-${i}`"
			>
				<div class="published">
					<div class="text-center text-content">
						<div
							class="border border-solid border-opacity-40 font-bold grid h-20 leading-tight rounded-lg"
						>
							<div class="self-center">
								<DateFormat :item="item.createdAt" dateType="DD" class="block text-1.4em" />
								<DateFormat :item="item.createdAt" dateType="MMM" class="block" />
							</div>
						</div>
						<DateFormat :item="item.createdAt" dateType="YYYY" class="block mt-2" />
					</div>
				</div>
				<div class="content">
					<NuxtLink
						:id="`title-${i}`"
						:pubdate="item.createdAt"
						:to="`${item._path}/`"
						class="articleLink block font-koho no-underline hover:underline text-1.4em leading-tight"
						role="article"
					>
						{{ item.title }}
					</NuxtLink>
					<time class="mt-2 text-content" :datetime="item.createdAt">
						<DateFormat :item="item.createdAt" dateType="DD.MM.YYYY" class="block" />
					</time>
					<div :id="`description-${i}`" class="description font-light mt-2 text-content">
						{{ item.description }}
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<style scoped lang="scss">
.listItem {
	.articleLink {
		color: var(--text-link);
	}
	.border {
		border-color: var(--text);
	}
}

@media screen and (max-width: 550px) {
	.listItem {
		.published {
			display: none;
		}

		&,
		time {
			display: block;
		}
	}
}

@media screen and (min-width: 551px) {
	.listItem {
		grid-template-columns: 85px 1fr;
		display: grid;
		gap: 1rem;
		time {
			display: none;
		}
	}
}
</style>
