<script setup>
const {data} = await useAsyncData('references', () => queryContent('/references/').findOne())
</script>

<template>
	<div class="container">
		<header></header>
		<div class="gap-6 grid">
			<div v-for="(ref, index) of data.items" :key="index" class="bg-secondary grid grid-2">
				<div>
					<img
						class="block"
						:src="`/references/${ref.image}.webp`"
						width="1440"
						height="900"
						:alt="ref.title"
					/>
				</div>

				<div class="p-6 self-center text-center">
					<h2 class="m-0 text-3xl">{{ ref.title }}</h2>
					<div v-if="ref.description" class="mt-6">
						{{ ref.description }}
					</div>

					<div class="mt-6">
						<a
							class="bg-primary inline-block py-4 px-10 rounded-full text-white no-underline"
							:href="ref.link"
						>
							Read more
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 1rem;
}

img {
	max-width: 100%;
	height: auto;
}

@media screen and (min-width: 1000px) {
	.grid-2 {
		grid-template-columns: 1fr 1fr;
	}
}
</style>
