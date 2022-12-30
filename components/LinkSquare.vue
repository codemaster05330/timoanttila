<script setup lang="ts">
import {Icon} from '@iconify/vue'
defineProps({
	icon: {
		type: String,
		required: true
	},
	link: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	}
})
</script>

<template>
	<a
		class="w-12 h-12 mx-auto inline-block align-middle bg-transparent border-0 md:m-0 p-0"
		:to="link"
		:title="title"
		rel="noopener"
	>
		<Icon :class="`${icon} mx-auto self-center text-2rem`" :icon="`${icon}`" />
	</a>
</template>
