<script>
	import { url, layout, metatags } from "@sveltech/routify";
	const posts = $layout.parent.children
		.filter((c) => c.meta["frontmatter"])
		.sort((a, b) => b.meta["frontmatter"].published.localeCompare(a.meta["frontmatter"].published));
	let title = "Tutorials"
	let summary = "A collection of tutorials about things I've learned or discovered. Most of the tutorials are easy to read and to learn."
	$: metatags.title = title
	$: metatags.description = summary
	$: metatags["twitter:title"] = title
	$: metatags["twitter:description"] = summary
</script>

<section id="about" class="bgw pad noUnd">
	<div class="container content mxa tc">
		<h1>{title}</h1>
		<p class="summary mxa">{summary}</p>
	</div>
</section>

<div id="content" class="bgb pad">
	<ul id="posts" class="container mxa grid block noUnd">
		{#each posts as {meta, path}}
			<li class="mxa">
				<div class="content grid">
					<aside class="grid tc">
						<div class="pub bor">
							<div class="grid cell">
								<div class="day">{meta.frontmatter.pub[0]}</div>
								<div class="month">{meta.frontmatter.pub[1]}</div>
							</div>
						</div>
					</aside>
					<a class="article grid" href={$url(path)} title={meta.frontmatter.title}>
						<div class="content">
							<h2 class="bold">{meta.frontmatter.title}</h2>
							<p class="summary">{meta.frontmatter.summary}</p>
						</div>
					</a>
				</div>
			</li>
		{/each}
	</ul>
</div>

<svelte:head>
	<style>
		h2.bold {
			font-size: 1.2em;
			line-height: 1.4;
			font-weight: 700;
			margin-bottom: 15px;
			color: var(--wt)
		}
		#about .container { max-width: 650px }
		#posts .day {
			font-size: 20px;
			line-height: 1.3
		}
		#post .month { font-size: 16px }
		#posts.container {
			max-width: 1250px
		}
		#posts li { display: block }
		#posts .pub {
			width: 70px;
			font-weight: 700;
			background-color: var(--violet);
			border: 1px ridge var(--wt4)
		}
		#posts .pub,
		#posts .summary { color: var(--wt6) }
		#posts li:hover .pub {
			color: var(--blue);
			background-color: var(--wb)
		}
		#posts li:hover h2 { color: var(--link) }
		@media screen and (min-width:600px){
			#posts {
				grid-template-columns: repeat(auto-fit, minmax(30ch, 1fr));
				grid-gap: 1.5rem
			}
		}
		@media screen and (max-width:600px){
			#posts li + li { margin-top: 1.5rem }
		}
		@media screen and (min-width:400px){
			#posts .content {
				grid-template-columns: 70px 1fr;
				grid-gap: 1rem;
			}
			#posts aside {
				grid-template-rows: 70px 48px 1fr;
				grid-gap: 0.5rem;
			}
		}
		@media screen and (max-width:400px){
			#posts { text-align: center }
			#posts .pub {
				padding: 5px 0;
				margin-bottom: 15px
			}
		}
	</style>
</svelte:head>
