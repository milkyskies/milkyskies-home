import { SpotifyGateway } from '$lib/infra/spotify/spotify.gateway';
import { GetSpotifyTokensUseCase } from './get-spotify-tokens.use-case';

export class RefreshSpotifyTokenUseCase {
	private readonly spotifyGateway: SpotifyGateway;

	private constructor(args: { spotifyGateway: SpotifyGateway }) {
		const { spotifyGateway } = args;

		this.spotifyGateway = spotifyGateway;
	}

	static create(): RefreshSpotifyTokenUseCase {
		const spotifyGateway = SpotifyGateway.create();

		return new RefreshSpotifyTokenUseCase({ spotifyGateway });
	}

	async execute(): Promise<void> {
		const tokens = await GetSpotifyTokensUseCase.create().execute();

		await this.spotifyGateway.setRefreshToken({ refreshToken: tokens.refreshToken });

		const refresh = await this.spotifyGateway.refreshAccessToken();

		await this.spotifyGateway.setAccessToken({ accessToken: refresh.access_token });
	}
}
