<script>
	import Social from "../components/Social.svelte"
</script>

<div id="hello">
	<div id="hero" class="obj tc">
		<picture>
			<source srcset="/images/hero-640.webp" media="(max-width:640px)" type="image/webp">
			<source srcset="/images/hero-1366.webp" media="(max-width:1366px)" type="image/webp">
			<source srcset="/images/hero-2048.webp" media="(min-width:1367px)" type="image/webp">
			<source srcset="/images/hero-640.jpg" media="(max-width:640px)" type="image/jpeg">
			<source srcset="/images/hero-1366.jpg" media="(max-width:1366px)" type="image/jpeg">
			<source srcset="/images/hero-2048.jpg" media="(min-width:1367px)" type="image/jpeg">
			<img src="/images/hero-1366.jpg" alt="Full Stack Deveoper and Sea adventurer Timo Anttila">
		</picture>
		<div id="caption" class="grid bold">
			<h1 class="js">timo anttila</h1>
			<div id="desc">Living, learning, & leveling up one day at a time. Web Developer, adventurer and photographer.</div>
			<Social/>
		</div>
	</div>

	<div id="about" class="container">
		<div id="aboutGrid" class="grid">
			<div>
				<div class="cell">
					<h2 class="js">Hi, I'm Timo. Nice to meet you.</h2>
					<p>39-year-old web developer from Eurajoki, Finland. Making websites for a living and amuse people as a hobby. Photographing all kinds of beautiful and trying to learn how to live a real life. Proud father of two pets; border collie Deli and cat Sera. Interested in artificial intelligence, the wonders of technology, and human behavior. During the summer, I live in a boat most of the time sailing off the coast of Finland.</p><p>Always looking new oppertunities and I'm available for remote work - if you would like to build something together, get in touch? Small or big - I got your back!</p><p>The best way to keep up with my latest photos is through <a href="https://www.instagram.com/tewdin/" title="Follow me on Instagram" target="_blank" rel="me noopener">Instagram</a> and <a href="https://ello.co/timoanttila" title="Follow me on Ello" target="_blank" rel="me noopener">Ello</a>.</p>
				</div>
			</div>
			<div>
				<picture>
					<source srcset="/images/timoanttila.webp" type="image/webp">
					<source srcset="/images/timoanttila.jpg" type="image/jpeg">
					<img src="/images/timoanttila.jpg" alt="Timo Anttila" width="300" height="300">
				</picture>
			</div>
		</div>
	</div>

	<div id="work" class="container">
		<div id="workGrid" class="grid">
			<div id="experience">
				<h2>experience</h2>
				<div class="work">
					<h3>Entrepreneur</h3>
					<h4><a href="https://tuspe.com/en" title="My company Tuspe Design">Tuspe Design Oy</a> <small>(2745877-5)</small></h4>
					<h5>Apr 1, 2016 →</h5>
					<p>Tuspe is a small business dedicated to making great websites at low cost.</p>
					<p>Creating responsive websites and web stores which are beautiful, easy to use, and loved by Google. Helping clients to enhance their business by providing solutions that leverage the latest web technologies and services. Small or big - I got your back!</p>
					<p><small>ProcessWire, PHP, Svelte, JQuery, MariaDB, Apache2, NGINX, SQL</small></p>
				</div>
				<div class="work">
					<h3>CEO / Fullstack Developer / Partner</h3>
					<h4><a href="https://dataline.fi/" title="The best e-commerce solutions for domestic and international ecommerce">Dataline Group Oy</a> <small>(2354053-6)</small></h4>
					<h5>Aug 7, 2017 →</h5>
					<p>Web stores and sport platforms for companies, clubs and communities. Specialize in making interfaces to Lemonsoft. We are using Tuspe's web shop platform for all new customers.</p>
					<p><small>ProcessWire, Wordpress, PHP, SQL</small></p>
				</div>
				<div class="work">
					<h3>Fullstack Developer</h3>
					<h4><a href="https://ratsukko.com/" title="Booking Calendar Ratsukko">SatuMo Oy</a></h4>
					<h5>Aug 22, 2018 →</h5>
					<p>Ratsukko booking system is a specialized booking calendar for riding schools and horse stables. It is created and designed together with stable entrepreneurs and Tuspe Design which is spesialized on web shops creation and development. Using Ratsukko is a strong benefit for both, the stable and the riders.</p>
					<p><small>ProcessWire, PHP, SQL</small></p>
				</div>
			</div>
			<div id="projects">
				<h2>projects</h2>
				<div class="work">
					<h3>Tuspe Webshop</h3>
					<p>A very versatile e-commerce platform for domestic and international sales. Updating and adding products is very easy. No restrictions on products or languages. I develop the platform according to customer needs.</p>
					<p>Supported Payment Services: Bambora, Checkout, Klarna, Paytrail, Robo Capital, Apex. Integration for Lemonsoft.</p>
					<p><small>ProcessWire, PHP, SQL</small></p>
				</div>
				<div class="work">
					<h3>Finnish eCommerce</h3>
					<p>A comprehensive and ever-growing list of Finnish online stores (<a href="https://verkkokaupat.org/" target="_blank" title="List of Finnish online stores" rel="noreferrer noopener">website</a>).</p>
					<p><small>Svelte, Github, Netlify</small></p>
				</div>
				<div class="work">
					<h3>AEKI</h3>
					<p>AEKI offers a free service for buying and selling used and pre-assembled IKEA products (<a href="https://aeki.fi/" target="_blank" title="AEKI - Buy and sell IKEA products" rel="noreferrer noopener">website</a>).</p>
					<p><small>ProcessWire, PHP</small></p>
				</div>
			</div>
		</div>
	</div>
</div>