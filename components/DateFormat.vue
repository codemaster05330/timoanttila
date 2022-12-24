<script setup lang="ts">
import dayjs from 'dayjs'

defineProps({
	dateType: {
		type: String,
		default: 'DD.MM.YYYY'
	},
	item: {
		type: String,
		required: true
	}
})
</script>

<template>
	<span>{{ dayjs(item).format(dateType) }}</span>
</template>
