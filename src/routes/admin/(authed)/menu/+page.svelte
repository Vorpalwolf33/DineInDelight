<script lang="ts">
	import Categories from "./Categories.svelte";
	import MenuItems from "./MenuItems.svelte";

	let active = "Menu Items";
</script>

<div>
	<div class="flex flex-row justify-start">
		<button class={`border px-3 py-2 duration-100 ${active == "Menu Items"?"bg-white border-gray-300 border-b-transparent":"border-transparent bg-gray-100"}`} on:click={() => active="Menu Items"}>Menu Items</button>
		<button class={`border px-3 py-2 duration-100 ${active == "Categories"?"bg-white border-gray-300 border-b-transparent":"border-transparent bg-gray-100"}`} on:click={() => active="Categories"}>Categories</button>
	</div>
	<div class="bg-white min-h-screen p-8">
		<div class="mt-12">
			{#if active == "Menu Items"}
				<MenuItems />
			{:else}
				<Categories />
			{/if}
		</div>
	</div>
</div>