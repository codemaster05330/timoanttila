<script>
	import { metatags } from '@roxi/routify';
	export let title, summary;
	$: metatags.title = title;
	$: metatags.author = 'Timo Anttila <moro@tuspe.com>';
	$: metatags.description = summary;
	$: metatags['twitter:title'] = title;
	$: metatags['twitter:description'] = summary;
</script>

<article class="mb mt" itemscope itemtype="http://schema.org/blogPost">
	<div id="content" class="container mx" itemprop="articleBody">
		<h1 class="title" itemprop="headline">{title}</h1>
		<slot />
	</div>
</article>
