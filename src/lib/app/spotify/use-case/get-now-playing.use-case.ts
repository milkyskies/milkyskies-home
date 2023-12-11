import { SpotifyGateway } from '$lib/infra/spotify/spotify.gateway';

export class GetNowPlayingUseCase {
	private readonly spotifyGateway: SpotifyGateway;

	private constructor(args: { spotifyGateway: SpotifyGateway }) {
		const { spotifyGateway } = args;

		this.spotifyGateway = spotifyGateway;
	}

	static create(): GetNowPlayingUseCase {
		const spotifyGateway = SpotifyGateway.create();

		return new GetNowPlayingUseCase({ spotifyGateway });
	}

	async execute(): Promise<SpotifyApi.CurrentlyPlayingResponse> {
		const response = await this.spotifyGateway.getNowPlaying();

		return response;
	}
}
