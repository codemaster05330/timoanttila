<script>
	import Head from "../components/Head.svelte"
	import Social from "../components/Social.svelte"
</script>
<Head/><main><slot/></main>
<footer>
	<div class="container mxa tc">
		<h4 class="mxa"><em>Living, learning & leveling up one day at a time.</em></h4>
		<Social/>
	</div>
</footer>