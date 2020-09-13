<style>
#hello {
	position: fixed;
	top: 0;
	left: 0;
	display: grid;
	width: 100%;
	height: 100vh;
	place-content: center;
	background-position: fixed;
	background-size: cover
}
.overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0 0 0 / 40%);
	z-index:1
}
#itsMe {
	position: relative;
	z-index: 100;
	max-width: 480px;
	width: 80%
}
#itsMe img {
	width: 180px;
	height: 180px;
	border-radius: 50%;
	border: 5px solid rgba(255 255 255 / 80%);
	margin-bottom: 1.5rem
}
#itsMe h1 {
	font-size: clamp(2.2rem,3rem,12vw);
	margin-bottom: 10px
}
#itsMe p { font-size: 1.2rem }
@media screen and (max-width:450px){
	#hello { background-image: url("/images/railway-360.jpg") }
}
@media screen and (min-width:450px) and (max-width:768px){
	#hello { background-image: url("/images/railway-768.jpg") }
}
@media screen and (min-width:768px) and (max-width:1440px){
	#hello { background-image: url("/images/railway-1440.jpg") }
}
@media screen and (min-width:1440px){
	#hello { background-image: url("/images/railway-2048.jpg") }
}
</style>

<div id="hello" class="tc obj">
	<div class="overlay"></div>
	<div id="itsMe" class="mxa">
		<picture id="pic">
			<source srcset="/images/timoanttila-photographer.webp" type="image/webp">
			<source srcset="/images/timoanttila-photographer.jpg" type="image/jpeg">
			<img src="/images/timoanttila-photographer.jpg" alt="Timo Anttila">
		</picture>
		<h1>Timo Anttila</h1>
		<p>Full Stack Web Developer, photographer and sea adventurer from Nokia, Finland. Making websites for a living and amuse people as a hobby.</p>
	</div>
</div>

<a id="lang" class="toggle grid abs tw up cell" href="/fi/" hreflang="fi" title="Timo Anttila">fi</a>