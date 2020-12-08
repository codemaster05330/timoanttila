<script>
	import Home from "../../components/Home.svelte"
	import { lang } from "../../components/lang"
	lang.set("fi")
</script>
<Home lang={$lang}/>