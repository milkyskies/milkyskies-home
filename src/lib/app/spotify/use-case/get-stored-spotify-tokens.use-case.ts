import {
	SpotifyTokenRepository,
	type ISpotifyTokenRepository
} from '../repository/spotify-token.repository';

export class GetStoredSpotifyTokensUseCase {
	private readonly spotifyTokenRepository: ISpotifyTokenRepository;

	private constructor(args: { spotifyTokenRepository: ISpotifyTokenRepository }) {
		this.spotifyTokenRepository = args.spotifyTokenRepository;
	}

	static create(): GetStoredSpotifyTokensUseCase {
		const spotifyTokenRepository = SpotifyTokenRepository.create();

		return new GetStoredSpotifyTokensUseCase({ spotifyTokenRepository });
	}

	async execute() {
		const tokens = await this.spotifyTokenRepository.getTokens();

		return tokens;
	}
}
