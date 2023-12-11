import { luciaClient } from '$lib/infra/lucia/lucia.client';
import { LuciaError } from 'lucia';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();
		const username = formData.get('username');
		const password = formData.get('password');

		// basic check
		if (typeof username !== 'string' || username.length < 1 || username.length > 31) {
			console.log('Invalid username');

			return fail(400, {
				message: 'Invalid username'
			});
		}
		if (typeof password !== 'string' || password.length < 1 || password.length > 255) {
			console.log('Invalid password');

			return fail(400, {
				message: 'Invalid password'
			});
		}

		try {
			const key = await luciaClient.useKey('username', username.toLowerCase(), password);

			const session = await luciaClient.createSession({
				userId: key.userId,
				attributes: {}
			});

			locals.auth.setSession(session);
		} catch (e) {
			if (
				e instanceof LuciaError &&
				(e.message === 'AUTH_INVALID_KEY_ID' || e.message === 'AUTH_INVALID_PASSWORD')
			) {
				console.log('Incorrect username or password');

				return fail(400, {
					message: 'Incorrect username or password'
				});
			}

			console.error('An unknown error occurred while logging in', e);

			return fail(500, {
				message: 'An unknown error occurred'
			});
		}

		throw redirect(302, '/');
	}
};
