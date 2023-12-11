<script lang="ts">
	import { onMount } from 'svelte';

	let inputText = '';
	let terminalInput: HTMLInputElement;

	function handleKeypress(event: KeyboardEvent) {
		event.preventDefault();
	}

	onMount(() => {
		terminalInput.focus();
	});
</script>

<input
	type="text"
	spellcheck="false"
	class="w-full border-none bg-transparent outline-none"
	bind:value={inputText}
	bind:this={terminalInput}
	on:keypress={handleKeypress}
/>
