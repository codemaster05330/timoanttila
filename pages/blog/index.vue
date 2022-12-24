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

useHead({
	title: `${title} | ${useState('site').value.name}`,
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
			content: '2022-12-24T20:02:20+02:00'
		}
	]
})
</script>

<template>
	<div class="py-10 px-4 lg:px-10">
		<div class="text-center mb-10 max-w-lg mx-auto">
			<h1 class="m-0 text-title">
				{{ title }}
			</h1>
			<p
				id="articleDescription"
				class="font-montserrat font-light leading-normal mt-2 text-content text-desc"
			>
				{{ description }}
			</p>
		</div>

		<ul
			v-if="articles"
			id="articles"
			class="grid gap-6 xl:grid-cols-2 2xl:grid-cols-3 m-0 pl-0"
			aria-label="List of articles I have written"
		>
			<li
				v-for="(item, i) in articles"
				:key="i"
				class="listItem grid gap-6"
				:aria-labelledby="`title-${i}`"
				:aria-describedby="`description-${i}`"
			>
				<div class="published">
					<div class="font-montserrat text-center text-content">
						<div
							class="grid border border-solid border-opacity-40 h-20 font-montserrat font-bold leading-tight"
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
						class="articleLink block font-koho no-underline hover:underline text-1.6em"
						role="article"
					>
						{{ item.title }}
					</NuxtLink>
					<div
						:id="`description-${i}`"
						class="description font-montserrat font-light mt-2 text-content"
					>
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
@media screen and (max-width: 450px) {
	.listItem {
		grid-template-columns: 60px 1fr;
	}
}

@media screen and (min-width: 450px) {
	.listItem {
		grid-template-columns: 85px 1fr;
	}
}
</style>
