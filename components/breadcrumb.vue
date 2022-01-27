<template>
	<ol
		id="breadcrumb"
		class="
			absolute
			top-4
			left-4
			font-montserrat font-light
			text-sm
			hidden
			lg:block
			m-0
			p-0
		"
		itemscope
		itemtype="https://schema.org/BreadcrumbList"
	>
		<li
			itemprop="itemListElement"
			itemscope
			itemtype="https://schema.org/ListItem"
			class="inline"
		>
			<nuxt-link itemprop="item" to="/" rel="home">
				<span itemprop="name">home</span>
			</nuxt-link>
			<meta itemprop="position" content="1" />
		</li>
		<li
			v-for="(crumb, index) in crumbs"
			:key="index"
			itemprop="itemListElement"
			itemscope
			itemtype="https://schema.org/ListItem"
			class="inline"
		>
			<template
				v-if="![crumb.path, crumb.path + '/'].includes($route.fullPath)"
			>
				<nuxt-link itemprop="item" :to="crumb.path">
					<span itemprop="name">{{ crumb.title }}</span>
				</nuxt-link>
			</template>
			<span v-else itemprop="name">{{ crumb.title }}</span>
			<meta itemprop="position" :content="index + 2" />
		</li>
	</ol>
</template>

<script>
	export default {
		name: "Breadcrumb",
		computed: {
			crumbs() {
				const fullPath = this.$route.fullPath;
				let params = fullPath.startsWith("/")
					? fullPath.substring(1).split("/")
					: fullPath.split("/");

				const count = params.length;
				if (params[count - 1] == "") params.pop();

				const crumbs = [];
				let path = "";
				for (const param of params) {
					path = `${path}/${param}`;
					const match = this.$router.match(path);
					if (match.name !== null) {
						crumbs.push({
							title: param.replace(/-/g, " "),
							...match,
						});
					}
				}
				return crumbs;
			},
		},
	};
</script>

<style scoped>
	@media screen and (min-width: 600px) {
		#breadcrumb li:after {
			content: " » ";
			display: inline;
			font-size: 0.9em;
			padding: 0 0.0725em 0 0.15em;
		}
		#breadcrumb li:last-child:after {
			content: "";
		}
		#breadcrumb,
		#breadcrumb a {
			color: var(--text);
		}
	}
</style>