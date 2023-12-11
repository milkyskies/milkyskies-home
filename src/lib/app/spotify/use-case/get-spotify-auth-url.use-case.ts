import { SpotifyGateway } from '$lib/infra/spotify/spotify.gateway';

export class GetSpotifyAuthUrlUseCase {
	private readonly spotifyGateway: SpotifyGateway;

	private constructor(args: { spotifyGateway: SpotifyGateway }) {
		const { spotifyGateway } = args;

		this.spotifyGateway = spotifyGateway;
	}

	static create(): GetSpotifyAuthUrlUseCase {
		const spotifyGateway = SpotifyGateway.create();

		return new GetSpotifyAuthUrlUseCase({ spotifyGateway });
	}

	async execute(): Promise<string> {
		const url = await this.spotifyGateway.getAuthUrl();

		if (!url) {
			throw new Error('No url');
		}

		return url;
	}
}
