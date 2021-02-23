<script>
	import Aside from '../../../components/Aside.svelte';
	import Dark from '../../../components/Darkmode.svelte';
	import { mode } from '../../../components/store';
	$: subMod = $mode == 'bg2' ? 'white' : 'blue';
</script>

<Dark />

<div id="cols" class={'grid rtl wh ' + $mode}>
	<div id="content" class="ltr">
		<div
			class={'container mx ' + subMod}
			itemscope
			itemtype="http://schema.org/Blog"
		>
			<slot />
		</div>
	</div>
	<Aside />
</div>
