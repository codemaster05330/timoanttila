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
		vocab="http://schema.org/"
		typeof="BreadcrumbList"
	>
		<li property="itemListElement" typeof="ListItem" class="inline">
			<nuxt-link property="item" typeof="WebPage" to="/" rel="home">
				<span property="name">home</span>
			</nuxt-link>
			<meta property="position" content="1" />
		</li>
		<li
			v-for="(crumb, index) in crumbs"
			:key="index"
			property="itemListElement"
			typeof="ListItem"
			class="inline"
		>
			<template
				v-if="![crumb.path, crumb.path + '/'].includes($route.fullPath)"
			>
				<nuxt-link property="item" typeof="WebPage" :to="crumb.path">
					<span property="name">{{ crumb.title }}</span>
				</nuxt-link>
			</template>
			<span v-else property="name">{{ crumb.title }}</span>
			<meta property="position" :content="index + 2" />
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
				if (params[count - 1] == "") delete params[count - 1];

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