<script lang="ts">
	import type { ComponentType } from 'svelte';
	import Prompt from '../Prompt.svelte';

	export let command: string;
	export let output: ComponentType;
</script>

<div>
	<Prompt>
		<div class="font-bold text-text">{command}</div>
	</Prompt>
	<svelte:component this={output} />
	<br />
</div>
