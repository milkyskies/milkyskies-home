<script lang="ts">
	import TerminalInput from '$lib/ui/terminal/TerminalInput.svelte';
	import Profile from '$lib/ui/terminal/programs/Profile.svelte';
	import Prompt from '$lib/ui/terminal/Prompt.svelte';
	import HistoryItemDisplay from '$lib/ui/terminal/history/HistoryItemDisplay.svelte';
	import type { HistoryItem } from '$lib/app/history/history-item';
	import { onMount } from 'svelte';
	import { getSvetchClient } from '$lib/infra/api/svetch.client';
	import NowPlaying from '$lib/ui/terminal/programs/NowPlaying.svelte';

	const history: HistoryItem[] = [
		{
			command: 'profile',
			output: Profile
		},
		{
			command: 'now-playing',
			output: NowPlaying
		}
	];

	onMount(async () => {
		const svetch = getSvetchClient();

		const nowPlaying = await svetch.get('api/spotify', {});
	});
</script>

<div class="flex h-screen items-center justify-center px-4 py-4 md:px-8 md:py-0">
	<div
		class="my-auto h-full w-full max-w-xl rounded-lg bg-ctp-surface0 p-4 md:h-[calc(100vh-10px)] md:max-h-[600px]"
	>
		<div>
			{#each history as historyItem}
				<HistoryItemDisplay command={historyItem.command} output={historyItem.output} />
			{/each}
		</div>
		<Prompt>
			<TerminalInput />
		</Prompt>
	</div>
</div>

<style>
</style>
