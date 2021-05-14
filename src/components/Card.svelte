<script>
	import Social from '../components/Social.svelte';
	export let item;
	export let mod;
	$: bg = mod == 'blue' ? 'bg3' : 'bg1';
</script>

<div id="card" class={'grid mx bor ' + mod + ' ' + bg}>
	<picture class="img grid cell">
		<source srcset="/images/timo.webp" type="media/webp" />
		<source srcset="/images/timo.jpg" type="media/jpeg" />
		<img class="bor" src="/images/timo.jpg" alt="Timo Anttila" />
	</picture>
	<div class="txt">
		<h1 class="title">Timo Anttila</h1>
		<div class="content">
			{@html item}
		</div>
		<Social />
	</div>
</div>
