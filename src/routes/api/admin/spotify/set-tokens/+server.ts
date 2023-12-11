import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import { SetSpotifyTokensUseCase } from '$lib/app/spotify/use-case/set-spotify-tokens.use-case';

type PostBody = {
	accessToken: string;
	refreshToken: string;
};

type PostResponse = {
	status: string;
};

export const POST: RequestHandler = async ({ request }) => {
	try {
		const payload: PostBody = await request.json();

		await SetSpotifyTokensUseCase.create().execute({
			accessToken: payload.accessToken,
			refreshToken: payload.refreshToken
		});

		const response: PostResponse = { status: 'ok' };

		return json(response);
	} catch (error) {
		return json({ error });
	}
};
