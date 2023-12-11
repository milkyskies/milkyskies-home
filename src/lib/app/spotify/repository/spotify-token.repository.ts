import { getPrismaClient } from '$lib/infra/prisma/prisma.client';
import type { PrismaClient, SpotifyToken } from '@prisma/client';

export interface ISpotifyTokenRepository {
	getTokens(): Promise<SpotifyToken>;
	setTokens(args: { accessToken: string; refreshToken: string }): Promise<void>;
}

export class SpotifyTokenRepository implements ISpotifyTokenRepository {
	private readonly prisma: PrismaClient;

	private constructor(args: { prisma: PrismaClient }) {
		this.prisma = args.prisma;
	}

	static create(): SpotifyTokenRepository {
		return new SpotifyTokenRepository({
			prisma: getPrismaClient()
		});
	}

	async getTokens(): Promise<SpotifyToken> {
		const tokens = await this.prisma.spotifyToken.findFirst();

		if (!tokens) {
			throw new Error('No tokens');
		}

		return tokens;
	}

	async setTokens(args: { accessToken: string; refreshToken: string }): Promise<void> {
		const { accessToken, refreshToken } = args;

		await this.prisma.spotifyToken.upsert({
			where: {
				id: '1'
			},
			create: {
				id: '1',
				accessToken,
				refreshToken
			},
			update: {
				accessToken,
				refreshToken
			}
		});
	}
}
