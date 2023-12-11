import type { ComponentType } from 'svelte';

export type HistoryItem = {
	command: string;
	output: ComponentType;
};
