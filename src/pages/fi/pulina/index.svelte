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

<h1>{title}</h1>
<p>{summary}</p>

<ul id="posts" class="tc">
{#each posts as {meta, path}}
	<li>
		<a class="article trf" href={$url(path)} title={meta.frontmatter.title}>
			<div class="content">
				<h2>{meta.frontmatter.title}</h2>
				<div class="summary">{meta.frontmatter.summary}</div>
				<div class="published">{meta.frontmatter.pub}</div>
			</div>
		</a>
	</li>
{/each}
</ul>
