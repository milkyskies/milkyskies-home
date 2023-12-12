<script lang="ts">
	export let label: string;
	export let onClick: () => void;
</script>

<button
	on:click={onClick}
	class={`${$$props.class} px-[2px] text-ctp-blue hover:bg-ctp-surface2 focus:ring-0`}
	{...$$restProps}
>
	<span class="">[</span><span class="px-1">{label}</span><span class="">]</span>
</button>
