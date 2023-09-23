<script lang="ts">
	import { page } from "$app/stores";
	import FoodCard from "$lib/components/FoodCard.svelte";
	import type { Food } from '$lib/utils/FoodType';
	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte";

	let categories: Array<{_id: string, name: string}> = []
	let menuItems: Array<Food> = []
	$: categories = $page.data.categories
	$: menuItems = $page.data.menuItems

</script>

{#if $page.url.host.includes('admin')}
	<div>
		
	</div>
{:else}
	<div>
		<Navbar />
		<div class="max-w-[1920px] ms-auto me-auto min-h-screen">
			<div class="pt-nav-height">
				<div class="ps-12 xl:max-w-[1920px] w-screen overflow-x-auto flex flex-row justify-center ms-auto me-auto bg-white shadow-md">
					{#each categories as category}
						<a href="?category={category._id}" class="w-[130px] text-md hover:bg-orange-100 text-center py-3 shrink-0 cursor-pointer duration-100">
							{category.name}
						</a>
					{/each}
				</div>
				{#if menuItems.length > 0 }
					<div class="px-5 py-5 flex flex-col md:flex-row md:flex-wrap md:justify-evenly gap-4 mt-24">
						{#each menuItems as food}
							<FoodCard {food}/>
						{/each}
					</div>
				{:else}
					<h2 class="font-bold text-3xl text-gray-400 text-center mt-[20vh]">
						No Items Found !!!<br/>
						Checkout other categories while we fill it
					</h2>
				{/if}
			</div>
		</div>
		<Footer />
	</div>
{/if}