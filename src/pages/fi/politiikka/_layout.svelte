<div id="blog" class="grid rtl wh">
	<div id="content" class="ltr">
		<div class="container mx">
			<slot />
		</div>
	</div>
	<aside>
		<div class="ltr tc white">
			<picture class="img">
				<source srcset="/images/timo.webp" type="media/webp" />
				<source srcset="/images/timo.jpg" type="media/jpeg" />
				<img src="/images/timo.jpg" alt="Kirjoittaja: Timo Anttila" />
			</picture>
			<h2>Timo Anttila</h2>
			<p>Heihei kuka mä oon?!</p>
		</div>
	</aside>
</div>

<style type="text/scss">
	#blog {
		grid-template-columns: 1fr 300px;
		aside {
			background: #000;
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
		}
		.container {
			max-width: 700px;
		}
	}
</style>
