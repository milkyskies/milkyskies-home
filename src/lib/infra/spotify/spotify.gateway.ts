import type SpotifyWebApi from 'spotify-web-api-node';
import { SpotifyClient } from './spotify.client';

export type AuthorizationCodeGrantResponse = {
	access_token: string;
	token_type: string;
	expires_in: number;
	refresh_token: string;
	scope: string;
};

export type RefreshAccessTokenResponse = {
	access_token: string;
	expires_in: number;
	refresh_token?: string | undefined;
	scope: string;
	token_type: string;
};

export interface ISpotifyGateway {
	getNowPlaying(): Promise<SpotifyApi.CurrentlyPlayingResponse>;
	getAuthUrl(): Promise<string>;
	generateTokens(args: { code: string }): Promise<AuthorizationCodeGrantResponse>;
	setAccessToken(args: { accessToken: string }): Promise<void>;
	setRefreshToken(args: { refreshToken: string }): Promise<void>;
	refreshAccessToken(): Promise<RefreshAccessTokenResponse>;
}

export class SpotifyGateway implements ISpotifyGateway {
	private readonly spotifyApi: SpotifyWebApi;

	private constructor() {
		this.spotifyApi = SpotifyClient.getInstance();
	}

	static create(): SpotifyGateway {
		return new SpotifyGateway();
	}

	async getNowPlaying() {
		const response = await this.spotifyApi.getMyCurrentPlayingTrack();

		return response.body;
	}

	async getAuthUrl() {
		const scopes = ['user-read-private', 'user-read-email', 'user-read-currently-playing'];
		const authorizeURL = this.spotifyApi.createAuthorizeURL(scopes, 'state');

		return authorizeURL;
	}

	async generateTokens(args: { code: string }) {
		const response = await this.spotifyApi.authorizationCodeGrant(args.code);

		return response.body;
	}

	async setAccessToken(args: { accessToken: string }) {
		this.spotifyApi.setAccessToken(args.accessToken);
	}

	async setRefreshToken(args: { refreshToken: string }) {
		this.spotifyApi.setRefreshToken(args.refreshToken);
	}

	async refreshAccessToken() {
		const response = await this.spotifyApi.refreshAccessToken();

		return response.body;
	}
}
