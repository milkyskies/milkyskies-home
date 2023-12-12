import { RefreshSpotifyTokenUseCase } from '$lib/app/spotify/use-case/refresh-spotify-token.use-case';
import { luciaClient } from '$lib/infra/lucia/lucia.client';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.auth = luciaClient.handleRequest(event);

	const session = await event.locals.auth.validate();

	if (event.url.pathname.startsWith('/api/admin') && !session) {
		return new Response('Unauthorized', { status: 401 });
	}

	if (event.url.pathname.startsWith('/admin') && !session) {
		return new Response('Unauthorized', { status: 401 });
	}

	const response = await resolve(event);

	if (event.url.pathname.startsWith('/api/spotify')) {
		await RefreshSpotifyTokenUseCase.create().execute();
	}

	return response;
};
