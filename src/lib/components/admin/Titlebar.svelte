<script lang="ts">
	import { page } from "$app/stores";
	let title: Array<string> = [], length = 0
	$: {
		title = $page.url.pathname.split('/').slice(1) 
		length = title.length
	}
</script>

<div class="flex flex-row justify-start gap-2 px-10 py-7 shadow-md bg-white">
	{#each title as str, index}
		<div class="capitalize flex flex-row justify-start gap-2 text-xl">
			<span>
				{str} 
			</span>
			{#if index < length - 1}
				<span>
					&#62;			
				</span>
			{/if}
		</div>
	{/each}
</div>