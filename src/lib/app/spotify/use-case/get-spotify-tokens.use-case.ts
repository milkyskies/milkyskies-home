import {
	SpotifyTokenRepository,
	type ISpotifyTokenRepository
} from '../repository/spotify-token.repository';

export class GetSpotifyTokensUseCase {
	private readonly spotifyTokenRepository: ISpotifyTokenRepository;

	private constructor(args: { spotifyTokenRepository: ISpotifyTokenRepository }) {
		this.spotifyTokenRepository = args.spotifyTokenRepository;
	}

	static create(): GetSpotifyTokensUseCase {
		const spotifyTokenRepository = SpotifyTokenRepository.create();

		return new GetSpotifyTokensUseCase({ spotifyTokenRepository });
	}

	async execute() {
		const tokens = await this.spotifyTokenRepository.getTokens();

		return tokens;
	}
}
