<script setup>
const hid = 'page-gallery'
const {data, pending} = await useAsyncData(hid, () => queryContent('/gallery/').findOne())

const site = useState('site').value
const canonical = site.url + '/gallery/'
</script>

<template>
	<div v-if="!pending && data && Array.isArray(data.items)" id="content">
		<ListHead
			:canonical="canonical"
			:description="data.description"
			:disclaimer="data.disclaimer"
			:hid="hid"
			:image="data.items[0].image"
			:modified="data.modified"
			:pubdate="data.pubdate"
			:title="data.title"
		/>

		<div class="container gap-6 grid md:grid-cols-2 mx-auto">
			<img
				v-for="(img, index) of data.items"
				:key="index"
				:id="`image-${index + 1}`"
				class="block h-auto max-w-full"
				:src="`/images/gallery/${img.image}.webp`"
				width="800"
				height="600"
				:alt="img.description"
			/>
		</div>
	</div>
</template>
