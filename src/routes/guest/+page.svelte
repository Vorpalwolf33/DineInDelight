<script lang="ts">
	import { page } from "$app/stores";
	import FoodCard from "$lib/components/FoodCard.svelte";
	import type { Food } from '$lib/utis/FoodType';
	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte";

	let types: Array<string> = []
	let foods: Array<Food> = []
	$: types = $page.data.types
	$: foods = $page.data.foods

</script>

{#if $page.url.host.includes('admin')}
	<div>
		
	</div>
{:else}
	<div>
		<Navbar />
		<div class="max-w-[1920px] ms-auto me-auto min-h-screen">
			<div class="pt-nav-height">
				<div class="ps-12 xl:max-w-[1920px] w-screen overflow-x-auto flex flex-row justify-center ms-auto me-auto bg-white gap-4 shadow-md">
					{#each types as type}
						<a href="?type={type}" class="w-[130px] text-xl hover:font-bold font-light font-medium text-center py-3 shrink-0 cursor-pointer">
							{type}
						</a>
					{/each}
				</div>
				<div class="px-5 py-5 flex flex-col md:flex-row md:flex-wrap md:justify-evenly gap-4 mt-24">
					{#each foods as food}
						<FoodCard {food}/>
					{/each}
				</div>
			</div>
		</div>
		<Footer />
	</div>
{/if}