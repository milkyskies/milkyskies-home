import type { PageServerLoad } from './$types';
import { GenerateSpotifyTokensUseCase } from '$lib/app/spotify/use-case/generate-spotify-tokens.use-case';
import { SetSpotifyTokensUseCase } from '$lib/app/spotify/use-case/set-spotify-tokens.use-case';

export const load: PageServerLoad = async ({ url }) => {
	const code = url.searchParams.get('code');

	if (!code) {
		throw new Error('No code provided');
	}

	const tokens = await GenerateSpotifyTokensUseCase.create().execute({ code });

	console.log(tokens);

	await SetSpotifyTokensUseCase.create().execute({
		accessToken: tokens.access_token,
		refreshToken: tokens.refresh_token
	});
};
