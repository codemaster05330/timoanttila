<script>
	import Home from "../components/Home.svelte"
	import { lang } from "../components/lang"
	lang.set("en")
</script>
<Home lang={$lang}/>