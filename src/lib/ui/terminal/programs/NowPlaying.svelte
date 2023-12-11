<script lang="ts">
	import { getSvetchClient } from '$lib/infra/api/svetch.client';
	import { onMount } from 'svelte';

	let nowPlaying: SpotifyApi.CurrentlyPlayingResponse | undefined;

	onMount(async () => {
		const svetch = getSvetchClient();

		const response = await svetch.get('api/spotify', {});

		nowPlaying = response.data?.nowPlaying;
	});
</script>

<div>
	{#if nowPlaying?.item && nowPlaying?.item.type === 'track'}
		<div class="p-2">
			<div class="flex">
				<img class="h-32 rounded-md" src={nowPlaying.item.album.images[0].url} alt="cover" />
				<div class="ml-4 flex flex-col justify-between">
					<div>
						<div class="font-bold text-ctp-text">{nowPlaying.item.name}</div>
						<div class="text-ctp-subtext0">{nowPlaying.item.artists[0].name}</div>
					</div>
					<div>
						{#if nowPlaying.item.preview_url}
							<audio controls>
								<source src={nowPlaying.item.preview_url} type="audio/mpeg" />
								Your browser does not support the audio element.
							</audio>
						{/if}
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>
