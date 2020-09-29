<script>
	import { url, layout, metatags } from "@sveltech/routify";
	import marked from "marked";
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

<div class="py">

	<div id="head" class="tc mxa list">
		<h1>{title}</h1>
		<div class="summary mxa">{summary}</div>
	</div>

	<ul id="posts" class="container mxa three grid block pb">
	{#each posts as {meta, path}}
		<li>
			<div class="content grid">
				<aside class="grid tc">
					<div class="pub bor">
						<div class="cell">
							<div class="day">{meta.frontmatter.pub[0]}</div>
							<div class="month">{meta.frontmatter.pub[1]}</div>
						</div>
					</div>
				</aside>
				<a class="article grid" href={$url(path)} title={meta.frontmatter.title}>
					<div class="content">
						<h2 class="up">{meta.frontmatter.title}</h2>
						<p class="summary">{meta.frontmatter.summary}</p>
					</div>
				</a>
			</div>
		</li>
	{/each}
	</ul>

</div>