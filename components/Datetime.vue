<template>
	<span v-if="date">
		{{ date }}
	</span>
	<div v-else-if="month" class="text-center text-content">
		<div
			class="
				grid
				border border-solid border-gray-100 border-opacity-40
				h-20
				font-montserrat font-bold
				leading-tight
			"
		>
			<div class="self-center">
				<span class="block text-md">{{ day }}</span>
				<span class="block text-normal">{{ month }}</span>
			</div>
		</div>
		<span class="block font-montserrat font-light mt-2">{{ year }}</span>
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