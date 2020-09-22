<script>
	import { metatags } from "@sveltech/routify";
	export let title, summary, lang, langLink;
	$: metatags.title = title +" | Timo Anttila";
	$: metatags.description = summary;
	$: metatags["twitter:title"] = title;
	$: metatags["twitter:description"] = summary;
</script>

<div id="article">
	<div id="head" class="tc mxa page">
		<h1>{title}</h1>
	</div>
	<div id="body" class="mxa">
		<slot/>
	</div>
</div>

<a id="lang" class="toggle grid abs tw up cell" href={langLink}>{lang}</a>