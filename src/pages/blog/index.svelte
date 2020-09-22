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

<div id="head" class="tc mxa list">
	<h1>{title}</h1>
	<div class="summary mxa">{summary}</div>
</div>

<ul id="posts" class="tc three grid block">
{#each posts as {meta, path}}
	<li>
		<a class="article trf grid" href={$url(path)} title={meta.frontmatter.title}>
			<div class="content">
				<h2>{meta.frontmatter.title}</h2>
				<p class="summary">{meta.frontmatter.summary}</p>
				<p class="published">{meta.frontmatter.pub}</p>
			</div>
		</a>
	</li>
{/each}
</ul>
