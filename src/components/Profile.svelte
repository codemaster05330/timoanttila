<script>
	import { metatags } from "@sveltech/routify";
	import Social from "../components/Social.svelte"
	export let title, summary
	$: metatags.title = title
	$: metatags.description = summary
	$: metatags["twitter:title"] = title
	$: metatags["twitter:description"] = summary
</script>

<article id="profile" class="container mxa py">
	<div id="head" class="tc mxa page">
		<picture class="mxa">
			<source srcset="/images/timo.webp" type="images/webp">
			<source srcset="/images/timo.jpg" type="images/jpeg">
			<img  src="/images/timo.jpg" alt="Timo Anttila">
		</picture>
		<h1>Timo Anttila</h1>
		<p class="summary mxa">{summary}</p>
	</div>
	<div id="body" class="mxa">
		<slot/>
	</div>
</article>

<footer><Social/></footer>