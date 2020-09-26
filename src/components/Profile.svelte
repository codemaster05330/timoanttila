<script>
	import { metatags } from "@sveltech/routify";
	import Social from "../components/Social.svelte"
	export let title, summary
	$: metatags.title = title
	$: metatags.description = summary
	$: metatags["twitter:title"] = title
	$: metatags["twitter:description"] = summary
</script>

<style>
	#head picture {
		width: 200px;
		height: 200px;
	}
	#head img {
		border-radius: 50%;
		border: 3px solid rgba(255, 255, 255, .8);
		margin-bottom: 1.5rem
	}
</style>

<div id="profile" class="container mxa pb">
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

<footer><Social/></footer>