<template>
	<div class="py">
		<div class="max-w-prose mx-auto text-white text-center mb-10">
			<h1 v-show="title" class="m-0">
				{{ title }}
			</h1>
			<p v-show="desc" id="articleDescription">
				{{ desc }}
			</p>
		</div>

		<ul
			v-if="articles"
			id="articles"
			class="grid max-w-screen-xl mx-auto m-0 p-0 noUnd"
			aria-label="List of articles I have written"
			role="menu"
		>
			<li
				v-for="(item, i) in articles"
				:key="i"
				role="none"
				class="listItem grid"
			>
				<div class="published text-sm">
					<Datetime :item="item.createdAt" />
				</div>
				<div class="content">
					<h2 class="listTitle line-3">
						<nuxt-link
							:to="item.path"
							role="menuitem"
							class="
								bg-white
								p-6
								no-underline
								shadow-lg
								rounded-2xl
								flex flex-col
							"
						>
							{{ item.title }}
						</nuxt-link>
					</h2>
					<div class="description text-light">
						{{ item.description }}
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import Datetime from "@/components/date";
	export default {
		components: {
			Datetime,
		},
		props: {
			title: {
				type: String,
				default: null,
			},
			desc: {
				type: String,
				default: null,
			},
			articles: {
				type: Array,
				default: null,
			},
		},
	};
</script>

<style scoped lang="scss">
	h1 {
		font-size: clamp(2.4rem, 5rem, 10vw);
		line-height: 1.2;
	}
	#articles {
		grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
		grid-gap: 3rem;
		#articleDescription {
			max-width: 500px;
		}
		.listItem {
			grid-template-columns: 85px 1fr;
			grid-gap: 1.5rem;
		}
		.listTitle {
			font-size: 1.6rem;
			margin: 0 0 15px 0;
		}
	}
</style>