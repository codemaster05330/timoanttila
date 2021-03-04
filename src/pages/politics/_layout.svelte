<script>
	import { mode } from '../../components/store';
	$: subMod = $mode == 'bg2' ? 'white' : 'blue';
</script>

<div class={'pad ' + subMod} itemscope itemtype="http://schema.org/Blog">
	<slot />
</div>
