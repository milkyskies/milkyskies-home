import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	// throw redirect(302, url);
	return json({ status: 'ok' });
};
