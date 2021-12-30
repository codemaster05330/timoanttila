<template>
	<ol
		id="breadcrumb"
		class="absolute text-light noUnd text-sm"
		vocab="http://schema.org/"
		typeof="BreadcrumbList"
	>
		<li property="itemListElement" typeof="ListItem">
			<nuxt-link
				class="text-light"
				property="item"
				typeof="WebPage"
				to="/"
			>
				<span property="name">home</span>
			</nuxt-link>
			<meta property="position" content="1" />
		</li>
		<li
			v-for="(crumb, index) in crumbs"
			:key="index"
			property="itemListElement"
			typeof="ListItem"
		>
			<nuxt-link
				class="text-light"
				property="item"
				typeof="WebPage"
				:to="crumb.path"
			>
				<span property="name">{{
					$route.fullPath === crumb.path && title !== null
						? title
						: crumb.title
				}}</span>
			</nuxt-link>
			<meta property="position" :content="index + 2" />
		</li>
	</ol>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: null,
			},
		},
		name: "Breadcrumb",
		computed: {
			crumbs() {
				const fullPath = this.$route.fullPath;
				const params = fullPath.startsWith("/")
					? fullPath.substring(1).split("/")
					: fullPath.split("/");
				const crumbs = [];
				let path = "";
				params.forEach((param, index) => {
					path = `${path}/${param}`;
					const match = this.$router.match(path);
					if (match.name !== null) {
						crumbs.push({
							title: param.replace(/-/g, " "),
							...match,
						});
					}
				});
				return crumbs;
			},
		},
	};
</script>

<style scoped>
	@media screen and (min-width: 600px) {
		#breadcrumb {
			list-style: none;
			top: 0;
			left: 1rem;
		}
		#breadcrumb li {
			display: inline;
		}
		#breadcrumb li:after {
			content: " » ";
			display: inline;
			font-size: 0.9em;
			padding: 0 0.0725em 0 0.15em;
		}
		#breadcrumb li:last-child:after {
			content: "";
		}
	}
	@media screen and (max-width: 600px) {
		#breadcrumb {
			display: none;
		}
	}
</style>