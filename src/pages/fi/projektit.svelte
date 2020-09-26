<script>
	import { metatags } from "@sveltech/routify";
	import { projects } from "../_data.js"
	let lang = "fi"
	let title = "Projektit"
	let summary = "Kirjoitan päivittäin koodia ja osa siitä päätyy avoimeksi. Tervetuloa tutustumaan kätteni jälkiin."
	$: metatags.title = title
	$: metatags.description = summary
	$: metatags["twitter:title"] = title
	$: metatags["twitter:description"] = summary
</script>

<div id="head" class="tc mxa list">
	<h1>{title}</h1>
	<div class="summary mxa">{summary}</div>
</div>

<ul id="projects" class="container pb mxa three grid block pb">
{#each projects as item}
	<li>
		<a class="article grid" href={item.url} title={item[lang].title}>
			<div class="content">
				<h2 class="up">{item[lang].title}</h2>
				<p class="summary">{item[lang].body}</p>
			</div>
		</a>
	</li>
{/each}
</ul>