<script>
	import { metatags } from '@roxi/routify';
	import Aside from '../components/Aside.svelte';
	import Dark from '../components/Darkmode.svelte';
	import { mode, lang } from '../components/store';
	$: subMod = $mode == 'bg2' ? 'white' : 'blue';
	export let title, summary, img, language;
	lang.set(language);
	$: metatags.title = title;
	$: metatags.description = summary;
	$: metatags['twitter:title'] = title;
	$: metatags['twitter:description'] = summary;
</script>

<Dark />

<div id="cols" class={'grid rtl wh ' + $mode}>
	<div id="content" class="ltr">
		<div
			class={'container mx ' + subMod}
			itemscope
			itemtype="http://schema.org/Blog"
		>
			<article itemscope itemtype="http://schema.org/blogPost">
				<div id="header" class="tc mx">
					<h1 class="tc mx m0" itemprop="headline">{title}</h1>
					{#if summary}<p>{summary}</p>{/if}
				</div>
				<div class="bgb pad" itemprop="articleBody">
					<slot />
				</div>
			</article>
		</div>
	</div>
	<Aside {summary} />
</div>
