<script>
	import { metatags } from '@roxi/routify';
	import Dark from '../components/Darkmode.svelte';
	import Card from '../components/Card.svelte';
	import { mode, lang } from '../components/store';
	$: subMod = $mode == 'bg2' ? 'white' : 'blue';
	export let title, summary, card, language;
	lang.set(language);
	$: metatags.title = title;
	$: metatags.description = summary;
	$: metatags['twitter:title'] = title;
	$: metatags['twitter:description'] = summary;
</script>

<Dark />

<div id="wrap" class={$mode}>
	<div id="profile" class="container mx">
		<Card item={card} mod={subMod} />

		<div
			id="now"
			class={'container mx ' + subMod}
			itemscope
			itemtype="http://schema.org/Blog"
		>
			<article itemscope itemtype="http://schema.org/blogPost">
				<div id="header" class="tc mx">
					<h2 class="title tc mx m0" itemprop="headline">{title}</h2>
					{#if summary}<p>{summary}</p>{/if}
				</div>
				<div class="bgb pad" itemprop="articleBody">
					<slot />
				</div>
			</article>
		</div>
	</div>
</div>

<style type="text/scss">
	#wrap {
		padding: 3rem 0;
	}
	#profile {
		&.container {
			width: 1000px;
		}
	}
	#now {
		&.container {
			max-width: 750px;
		}
		.title {
			max-width: 540px;
		}
	}
</style>
