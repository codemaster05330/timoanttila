<script>
	import Social from './Social.svelte';
	export let summary;
</script>

<aside class="ltr tc bg1">
	<div class="white">
		<picture class="img">
			<source srcset="/images/timo.webp" type="media/webp" />
			<source srcset="/images/timo.jpeg" type="media/jpeg" />
			<img
				class="mx"
				src="/images/timo.jpeg"
				alt="Kirjoittaja: Timo Anttila"
			/>
		</picture>
		<h2>Timo Anttila</h2>
		<p>{summary}</p>
	</div>
	<div id="social" class="abs tc">
		<Social />
	</div>
</aside>

<style type="text/scss">
	aside {
		padding: 3rem 2rem;
		color: var(--light);
		width: 300px;
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		h2 {
			margin: 2rem auto 1rem;
		}
		img {
			border-radius: 50%;
			width: 200px;
			height: 200px;
		}
		#social {
			bottom: 15px;
		}
	}
</style>
