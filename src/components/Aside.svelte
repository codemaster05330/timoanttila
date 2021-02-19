<script>
	import Social from './Social.svelte';
</script>

<aside class="ltr tc bg1">
	<div class="white">
		<picture class="img">
			<source srcset="/images/timo.webp" type="media/webp" />
			<source srcset="/images/timo.jpg" type="media/jpeg" />
			<img src="/images/timo.jpg" alt="Kirjoittaja: Timo Anttila" />
		</picture>
		<h2>Timo Anttila</h2>
		<p>Heihei kuka mä oon?!</p>
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
		img {
			border-radius: 50%;
		}
		#social {
			bottom: 15px;
		}
	}
</style>
