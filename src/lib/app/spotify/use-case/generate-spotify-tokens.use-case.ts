import { SpotifyGateway } from '$lib/infra/spotify/spotify.gateway';

export class GenerateSpotifyTokensUseCase {
	private readonly spotifyGateway: SpotifyGateway;

	private constructor(args: { spotifyGateway: SpotifyGateway }) {
		this.spotifyGateway = args.spotifyGateway;
	}

	static create() {
		const spotifyGateway = SpotifyGateway.create();

		return new GenerateSpotifyTokensUseCase({ spotifyGateway });
	}

	async execute(args: { code: string }) {
		const tokens = await this.spotifyGateway.generateTokens({ code: args.code });

		return tokens;
	}
}
