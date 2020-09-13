<script>
	import { metatags } from "@sveltech/routify";
	export let title, summary, lang, langLink;
	$: metatags.title = title +" | Timo Anttila";
	$: metatags.description = summary;
	$: metatags["twitter:title"] = title;
	$: metatags["twitter:description"] = summary;
</script>

<div id="page">
	<aside>
		<picture>
			<source srcset="/images/deskop-timo.webp" type="image/webp">
			<source srcset="/images/deskop-timo.jpg" type="image/jpeg">
			<img src="/images/deskop-timo.jpg" alt="Timo Anttila">
		</picture>
	</aside><div id="content"><slot/></div>
</div>

<a id="lang" class="toggle grid abs tw up cell" href={langLink}>{lang}</a>