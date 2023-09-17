<script lang="ts">
	import { page } from "$app/stores";
	let types: Array<string> = ["Starters", "Meals", "Dessert"]
	$: dishes = $page.data.types
</script>

<div class="pt-nav-height">
	<div class="xl:max-w-[1920px] w-screen overflow-x-auto flex flex-row justify-center ms-auto me-auto bg-white gap-4 shadow-md">
		{#each types as type}
			<div class="w-[100px] text-md font-medium text-center py-2 shrink-0">
				{type}
			</div>
		{/each}
	</div>
</div>