<template>
	<span v-if="date" class="date">
		{{ date }}
	</span>
	<div v-else-if="month" class="text-center text-white">
		<div class="date border font-bold">
			<span class="block day">{{ day }}</span>
			<span class="block month">{{ month }}</span>
		</div>
		<span class="block year">{{ year }}</span>
	</div>
</template>

<script>
	import { DateTime } from "luxon";
	export default {
		props: {
			item: {
				type: String,
				default: null,
			},
		},
		data() {
			return {
				date: null,
				day: null,
				month: null,
				year: null,
			};
		},
		mounted() {
			let pub = DateTime.fromISO(this.item, {
				zone: "Europe/Helsinki",
			}).setLocale("en");

			this.day = pub.toFormat("dd");
			this.month = pub.toFormat("LLL");
			this.year = pub.toFormat("yyyy");
		},
	};
</script>

<style scoped>
	.date {
		margin-bottom: 5px;
	}
	.border {
		border-color: rgba(255, 255, 255, 0.5);
		padding: 1rem 0.5rem;
		line-height: 1.2;
	}
	.day {
		font-size: 1.4rem;
	}
</style>