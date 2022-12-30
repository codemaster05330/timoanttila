<script setup lang="ts">
import {Icon} from '@iconify/vue'
defineProps({
	icon: {
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
	<button class="bg-transparent border-0 grid h-12 icon p-0 w-full">
		<Icon :class="`${icon} mx-auto self-center text-2.4rem`" :icon="`${icon}`" />
	</button>
</template>
