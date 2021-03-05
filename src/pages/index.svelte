<script>
	import Home from '../components/Home.svelte';
	import { lang } from '../components/store';
	lang.set('en-us');
</script>

<Home lang="en" />
