<script setup lang="ts">
import {Icon} from '@iconify/vue'
defineProps({
	aria: {
		type: String,
		required: true
	},
	icon: {
		type: String,
		required: true
	},
	iconSize: {
		type: Number,
		default: 2
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
	<NuxtLink
		class="w-12 h-12 mx-auto inline-block align-middle text-light border-0 md:m-0 p-0"
		:to="link"
		:title="title"
		:aria-label="aria"
	>
		<span class="grid h-full w-full">
			<Icon :class="`${icon} mx-auto self-center text-${iconSize}rem`" :icon="`${icon}`" />
		</span>
	</NuxtLink>
</template>
