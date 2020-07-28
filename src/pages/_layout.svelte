<script>
	import Nav from "../components/Nav.svelte"
	import Social from "../components/Social.svelte"
</script>

<Nav/>

<main class="rel"><slot /></main>
<footer>
	<div class="container tc">
		<h4>Living, learning, & leveling up one day at a time.</h4>
		<Social/>
	</div>
</footer>