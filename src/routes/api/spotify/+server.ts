import { GetNowPlayingUseCase } from '$lib/app/spotify/use-case/get-now-playing.use-case';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

type GetResponse = {
	nowPlaying: SpotifyApi.CurrentlyPlayingResponse;
};

export const GET: RequestHandler = async () => {
	try {
		const nowPlaying = await GetNowPlayingUseCase.create().execute();

		const response: GetResponse = {
			nowPlaying
		};

		return json(response);
	} catch (error) {
		return json({ error });
	}
};
