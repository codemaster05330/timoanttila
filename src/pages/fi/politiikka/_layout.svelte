<script>
	import { mode } from '../../../components/store';
	$: subMod = $mode == 'bg2' ? 'white' : 'blue';
</script>

<div class={subMod} itemscope itemtype="http://schema.org/Blog">
	<slot />
</div>
