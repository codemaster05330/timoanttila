<script>
	import { metatags } from '@roxi/routify';
	import { mode } from './store.js';
	import Aside from './Aside.svelte';
	export let title, summary, img, twitter;
	$: metatags.title = title;
	$: metatags.author = 'Timo Anttila <moro@tuspe.com>';
	$: metatags.description = summary;
	$: if (img) metatags.image = '/images/' + img + '.jpg';
	$: subMod = $mode == 'bg2' ? 'white' : 'blue';
	$: more = twitter ? twitter : 'https://twitter.com/_timoanttila';
</script>

<div id="cols" class={'grid rtl wh ' + $mode}>
	<div id="content" class="ltr">
		<div
			class={'container mx ' + subMod}
			itemscope
			itemtype="http://schema.org/Blog"
		>
			<article itemscope itemtype="http://schema.org/blogPost">
				<h1 class="title tc" itemprop="headline">{title}</h1>
				<div class="bgb pad" itemprop="articleBody">
					<slot />
				</div>
			</article>

			{#if twitter}
				<div id="more" class="tc noUnd">
					<a class="btn inl white" href={more} rel="me">
						<svg
							class="inl"
							width="42"
							height="42"
							viewBox="0 0 512 512"
							preserveAspectRatio="xMidYMid meet"
						>
							<title>Timo Anttila on Twitter</title>
							<path
								d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"
							/>
						</svg>
						<span class="inl">Jatka keskustelua</span>
					</a>
				</div>
			{/if}
		</div>
	</div>
	<Aside {summary} />
</div>

<style type="text/scss">
	#cols {
		grid-template-columns: 1fr 300px;
		.container {
			max-width: 700px;
		}
	}
	@media screen and (min-width: 1000px) {
		#cols #content {
			padding: 3rem;
		}
	}
</style>
