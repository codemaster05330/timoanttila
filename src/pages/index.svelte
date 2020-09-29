<script>
	import Social from "../components/Social.svelte"
	import { Skills } from "../pages/_data.js"
</script>

<div id="hello" class="tc obj cell">
	<div class="abs cell">
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