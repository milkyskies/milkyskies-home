import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { GetSpotifyAuthUrlUseCase } from '$lib/app/spotify/use-case/get-spotify-auth-url.use-case';

export const load: PageServerLoad = async () => {
	const url = await GetSpotifyAuthUrlUseCase.create().execute();

	throw redirect(302, url);
};
