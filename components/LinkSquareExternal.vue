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
	<a class="w-12 h-12 mx-auto grid" :href="link" :aria-label="aria" :title="title" rel="noopener">
		<Icon :class="`${icon} mx-auto self-center text-2rem`" :icon="`${icon}`" />
	</a>
</template>
