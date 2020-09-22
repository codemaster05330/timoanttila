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

<div id="projects" class="container mxa">
	<ul id="posts" class="tc three grid block">
	{#each projects as item}
		<li>
			<a class="article trf grid" href={item.url} target="_blank" rel="noopener">
				<div class="content">
					<h2>{item[lang].title}</h2>
					<p class="summary">{item[lang].body}</p>
					<p class="tech">{item.tech}</p>
				</div>
			</a>
		</li>
	{/each}
	</ul>
</div>

<a id="lang" class="toggle grid abs tw up cell" href="/projects" hreflang="en">en</a>
