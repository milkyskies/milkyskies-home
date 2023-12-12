<script lang="ts">
	import { getSvetchClient } from '$lib/infra/api/svetch.client';
	import TextButton from '$lib/ui/base/TextButton.svelte';
	import { onMount } from 'svelte';

	let nowPlaying: SpotifyApi.CurrentlyPlayingResponse | undefined;
	let audioElement: HTMLAudioElement | undefined;
	let isPlaying = false;

	function handlePlayPause() {
		if (audioElement) {
			audioElement.volume = 0.1;

			isPlaying ? audioElement.pause() : audioElement.play();
			isPlaying = !isPlaying;
		}
	}

	onMount(async () => {
		const svetch = getSvetchClient();

		const response = await svetch.get('api/spotify', {});

		nowPlaying = response.data?.nowPlaying;
	});
</script>

<div>
	{#if nowPlaying?.item && nowPlaying?.item.type === 'track'}
		<div class="py-2">
			<div class="flex">
				<img class="h-24 rounded-md" src={nowPlaying.item.album.images[0].url} alt="cover" />
				<div class="ml-4 flex flex-col justify-between">
					<div>
						<div class="font-bold text-ctp-text">{nowPlaying.item.name}</div>
						<div class="text-ctp-subtext0">{nowPlaying.item.artists[0].name}</div>
					</div>
					<div>
						{#if nowPlaying.item.preview_url}
							<audio src={nowPlaying.item.preview_url} bind:this={audioElement} class="hidden" />
							<TextButton onClick={handlePlayPause} label={isPlaying ? '停止' : '再生'} />
						{/if}
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>
