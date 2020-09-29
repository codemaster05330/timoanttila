<script>
	import Social from "../components/Social.svelte"
	import { Skills } from "../pages/_data.js"
</script>
<style>
#hello {
	display: grid;
	width: 100%;
	height: 100vh;
	overflow: hidden;
	align-content: center;
	justify-content: center;
	background-position: fixed;
	background-size: cover
}
.overlay {
	position: absolute;
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
	max-width: 540px;
	width: 80%
}
#itsMe img {
	border-radius: 50%;
	border: 5px solid rgba(255 255 255 / 80%)
}
#itsMe picture { margin-bottom: 1.5rem }
#itsMe h1 {
	font-size: clamp(2.2rem,2.6rem,10vw);
	margin-bottom: 10px
}
#itsMe p { font-size: 1.2rem }
#follow { margin-top: 1rem }
@media screen and (max-width:450px){
	#hello { background-image: url("/images/railway-360.jpg") }
}
@media screen and (min-width:450px) and (max-width:768px){
	#hello { background-image: url("/images/railway-768.jpg") }
}
@media screen and (max-width:750px){
	#itsMe { padding-bottom: 3rem }
}
@media screen and (min-width:768px) and (max-width:1440px){
	#hello { background-image: url("/images/railway-1440.jpg") }
}
@media screen and (min-width:1440px){
	#hello { background-image: url("/images/railway-2048.jpg") }
}
@media screen and (min-width:600px){
	#itsMe picture,
	#itsMe img {
		width: 200px;
		height: 200px
	}
}
@media screen and (max-width:600px){
	#itsMe picture,
	#itsMe img {
		width: 150px;
		height: 150px
	}
}
</style>

<div id="hello" class="tc obj">
	<div class="overlay"></div>
	<div id="itsMe" class="mxa">
		<picture id="pic" class="mxa">
			<source srcset="/images/timo.webp" type="image/webp">
			<source srcset="/images/timo.jpg" type="image/jpeg">
			<img src="/images/timo.jpg" alt="Timo Anttila">
		</picture>
		<h1>Timo Anttila</h1>
		<p>Full Stack Web Developer, photographer and sea adventurer from Nokia, Finland. Making websites for a living and amuse people as a hobby.</p>
	</div>
</div>

<section class="bgw py">
	<div id="about" class="container mxa">
		<p>My name is Timo Anttila. I'm a full stack web developer, entrepreneur, and budding blogger from Nokia, Finland. Working at digital agency Tuspe Design Oy building highly customized websites and services.</p>
		<p>Since beginning my journey as an entrepreneur almost five years ago, I've done remote work for businesses, developed hundreds of customer projects, and created a booking calendar and own e-commerce platform. Currently working as a subcontractor for several companies, and learning more about Svelte.</p>
		<p>My goal, in professional life, is creating easy to use and fast loading websites with beautiful themes, and giving customers feeling that they got a lot more than what they originally ordered.</p>
		<div id="follow" class="tc"><Social/></div>
	</div>
</section>

<section class="py">
	<div id="skills" class="container mxa grid tc">
	{#each Skills as item}
		<div class="skill bgw">
			<div class="what">
				<h2 class="green">{item.title}</h2>
				<p>{item.body}</p>
			</div>
			<div class="tech">
				<p class="green">{item.title} Tools:</p>
				<ul class="block">
				{#each item.tools as item}
					<li>{item}</li>
				{/each}
				</ul>
			</div>
		</div>
	{/each}
	</div>
</section>