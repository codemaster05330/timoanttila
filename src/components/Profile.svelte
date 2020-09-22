<script>
	import { metatags } from "@sveltech/routify";
	import Social from "../components/Social.svelte"
	export let title, summary, lang, langLink;
	$: metatags.title = title;
	$: metatags.description = summary;
	$: metatags["twitter:title"] = title;
	$: metatags["twitter:description"] = summary;
</script>

<style>
	#head img {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		border: 3px solid rgba(255, 255, 255, 80%);
		margin-bottom: 1.5rem
	}
</style>

<div id="profile" class="container mxa mt">
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
</div>

<a id="lang" class="toggle grid abs tw up cell" href={langLink}>{lang}</a>
<footer><Social/></footer>