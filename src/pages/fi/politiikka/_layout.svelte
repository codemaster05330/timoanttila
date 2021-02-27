<script>
	import Dark from '../../../components/Darkmode.svelte';
	import { mode } from '../../../components/store';
	$: subMod = $mode == 'bg2' ? 'white' : 'blue';
</script>

<Dark />

<div
	class={'container mx article pad ' + subMod}
	itemscope
	itemtype="http://schema.org/Blog"
>
	<slot />
</div>
