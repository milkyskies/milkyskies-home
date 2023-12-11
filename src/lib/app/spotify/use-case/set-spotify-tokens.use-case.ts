import { SpotifyGateway } from '$lib/infra/spotify/spotify.gateway';
import {
	SpotifyTokenRepository,
	type ISpotifyTokenRepository
} from '../repository/spotify-token.repository';

export class SetSpotifyTokensUseCase {
	private readonly spotifyGateway: SpotifyGateway;
	private readonly spotifyTokenRepository: ISpotifyTokenRepository;

	private constructor(args: {
		spotifyGateway: SpotifyGateway;
		spotifyTokenRepository: ISpotifyTokenRepository;
	}) {
		this.spotifyGateway = args.spotifyGateway;
		this.spotifyTokenRepository = args.spotifyTokenRepository;
	}

	static create(): SetSpotifyTokensUseCase {
		const spotifyGateway = SpotifyGateway.create();
		const spotifyTokenRepository = SpotifyTokenRepository.create();

		return new SetSpotifyTokensUseCase({ spotifyGateway, spotifyTokenRepository });
	}

	async execute(args: { accessToken: string; refreshToken: string }): Promise<void> {
		await this.spotifyGateway.setAccessToken({
			accessToken: args.accessToken
		});

		await this.spotifyGateway.setRefreshToken({
			refreshToken: args.refreshToken
		});

		await this.spotifyTokenRepository.setTokens({
			accessToken: args.accessToken,
			refreshToken: args.refreshToken
		});
	}
}
