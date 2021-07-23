<template>
	<footer class="icon-white text-white text-center">
		<span>Don’t forget your right to stalk me</span>
		<ul
			class="m-0 p-0"
			role="menu"
			aria-label="Social media services where I am active"
		>
			<li class="inline-block" role="none">
				<a
					class="grid icon"
					href="https://github.com/timoanttila"
					title="Check out my open source projects at Github"
					role="menuitem"
				>
					<Icons :icon="1" title="Timo Anttila on Github" />
				</a>
			</li>

			<li class="inline-block" role="none">
				<a
					class="grid icon"
					href="https://github.com/TuspeDesign"
					title="Check out my company’s open source projects at Github"
					role="menuitem"
				>
					<Icons :icon="1" title="Tuspe Design Oy on Github" />
				</a>
			</li>

			<li class="inline-block" role="none">
				<a
					class="grid icon"
					href="https://github.com/timoanttila"
					title="Check out my open source projects at Github"
					role="menuitem"
				>
					<Icons :icon="2" title="Timo Anttila on Twitter" />
				</a>
			</li>

			<li class="inline-block" role="none">
				<a
					class="grid icon"
					href="https://www.instagram.com/_timoanttila/"
					title="Latest photos on Instagram"
					role="menuitem"
				>
					<Icons :icon="3" title="Timo Anttila on Instagram" />
				</a>
			</li>
		</ul>
	</footer>
</template>

<script>
	import Icons from "@/components/icons.vue";
	export default {
		components: {
			Icons,
		},
	};
</script>