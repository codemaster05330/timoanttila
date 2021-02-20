<script>
	import Home from '../../components/Home.svelte';
	import { lang } from '../../components/store';
	lang.set('fi-fi');
</script>

<Home lang={$lang} />
