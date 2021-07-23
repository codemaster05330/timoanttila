<template>
	<div
		id="profile"
		class="
			grid grid-cols-2
			max-w-screen-xl
			mx-auto
			bg-white
			uppercase
			rounded-xl
			overflow-hidden
			shadow-lg
		"
	>
		<div class="bg-black relative">
			<img
				class="w-full h-full absolute top-0 left-0 object-cover"
				:src="image"
				alt="A self-taught passionate developer Timo Anttila"
			/>
		</div>
		<div class="pt-10 px-10 pb-4 text-center flex flex-col">
			<div class="flex-grow">
				<h1 class="text-4xl font-bold text-gray-600 mt-0">
					{{ title }}
				</h1>
				<p class="text-md text-gray-500 mb-6">
					A self-taught passionate developer, who loves solving
					problems and learning new ways to deliver solutions.
				</p>
				<ul id="cardLinks" class="p-0 m-0 relative">
					<li
						v-for="item in links"
						:key="item.id"
						:item="item"
						class="block w-32 mx-auto mt-4 relative z-10 bg-white"
					>
						<nuxt-link
							:to="item.link"
							class="
								link
								grid
								text-gray-500
								border
								rounded-lg
								shadow-md
								h-10
								no-underline
								hover:text-blue-500
							"
							><span class="self-center">{{
								item.name
							}}</span></nuxt-link
						>
					</li>
				</ul>
			</div>

			<FooterBlock />
		</div>
	</div>
</template>

<script>
	import FooterBlock from "@/components/footer.vue";
	export default {
		components: {
			FooterBlock,
		},
		data() {
			return {
				title: "Timo Anttila",
				image: "/timoanttila.jpg",
				links: [
					{
						id: 1,
						name: "About",
						link: "/about",
						description:
							"Where my focus is right now in my professional and personal life.",
					},
					{
						id: 2,
						name: "Work",
						link: "/work",
						description: "Some very successful customer projects.",
					},
					{
						id: 2,
						name: "Blog",
						link: "/blog",
						description:
							"Writings on codes, customer projects, life and political views.",
					},
					{
						id: 3,
						name: "Photos",
						link: "/photos",
						description: "Photographing all kinds of beautiful things.",
					},
				],
			};
		},
	};
</script>

<style scoped>
	#profile {
		height: 560px;
	}
	h1:after {
		content: "";
		display: block;
		background-color: #ccc;
		height: 1px;
		margin: 1.5rem auto 1.75rem;
		max-width: 65px;
	}
	#cardLinks:after {
		content: "";
		width: 1px;
		height: 100%;
		position: absolute;
		top: 0;
		left: 50%;
		background-color: #ccc;
	}
	.link:not(:hover) {
		border-color: #ccc;
	}
</style>