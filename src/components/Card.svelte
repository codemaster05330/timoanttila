<script>
	import Social from '../components/Social.svelte';
	export let item;
	export let mod;
	$: bg = mod == 'blue' ? 'bg3' : 'bg1';
</script>

<div id="card" class={'grid ' + mod + ' ' + bg}>
	<picture class="img grid cell">
		<source srcset="/images/timo.webp" type="media/webp" />
		<source srcset="/images/timo.jpeg" type="media/jpeg" />
		<img src="/images/timo.jpeg" alt="Timo Anttila" />
	</picture>
	<div class="txt">
		<h1 class="title">Timo Anttila</h1>
		<div class="content">
			{@html item}
		</div>
		<Social />
	</div>
</div>

<style type="text/scss">
	#card {
		grid-template-columns: 250px 1fr;
		grid-gap: 3rem;
		padding: 2rem 4rem 2rem 3rem;
		border-radius: 200px;
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
		margin-bottom: 3.5rem;
		img {
			border-radius: 50%;
		}
		&,
		img {
			border: 1px solid rgba(255, 255, 255, 0.5);
		}
		.content {
			margin-bottom: 1rem;
		}
	}
</style>
