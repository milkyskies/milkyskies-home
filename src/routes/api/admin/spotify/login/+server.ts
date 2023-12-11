import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { GetSpotifyAuthUrlUseCase } from '$lib/app/spotify/use-case/get-spotify-auth-url.use-case';

export const GET: RequestHandler = async () => {
	const url = await GetSpotifyAuthUrlUseCase.create().execute();

	throw redirect(302, url);
};
