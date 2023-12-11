import {
	SPOTIFY_CLIENT_ID,
	SPOTIFY_CLIENT_SECRET,
	SPOTIFY_REDIRECT_URI
} from '$env/static/private';
import SpotifyWebApi from 'spotify-web-api-node';

export class SpotifyClient {
	private static instance: SpotifyWebApi;

	public static getInstance(): SpotifyWebApi {
		if (!SpotifyClient.instance) {
			SpotifyClient.instance = new SpotifyWebApi({
				clientId: SPOTIFY_CLIENT_ID,
				clientSecret: SPOTIFY_CLIENT_SECRET,
				redirectUri: SPOTIFY_REDIRECT_URI
			});
		}

		return SpotifyClient.instance;
	}

	static setAccessToken(args: { accessToken: string }): void {
		SpotifyClient.instance.setAccessToken(args.accessToken);
	}

	static setRefreshToken(args: { refreshToken: string }): void {
		SpotifyClient.instance.setRefreshToken(args.refreshToken);
	}

	static async refreshAccessToken(): Promise<void> {
		await SpotifyClient.instance.refreshAccessToken();
	}
}
