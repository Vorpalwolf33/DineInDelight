<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	import { page } from '$app/stores';

	let categories: Array<{_id: string, name: string}> = []
	$: categories = $page.data.categories

	const handleDelete = async (id: string) => {
		const response = await fetch('/admin/menu/category?id=' + id, {method: "DELETE"})
		const data = await response.json()
		console.log(data)
		if(data.success)
			categories = categories.filter((cat: {_id: string, name: string}) => cat._id != id)
	}
</script>

<div>
	<h2 class="font-bold text-2xl">Add New Category</h2>
	<form method="POST" 
		use:enhance
		action="?/add-category" 
		class="mt-6">
		<div>
			<input type="text" placeholder="Name" name="name" class="border border-gray-300 bg-white rounded-md px-4 py-2"/>
		</div>
		<button class="bg-orange-500 py-2 text-white font-bold rounded-md mt-4 hover:bg-orange-600 w-[150px]">Add Category</button>
	</form>
</div>
<div class="mt-16 categories-table">
	<h2 class="font-bold text-2xl">Category List</h2>
	<table class="mt-6 min-w-[300px]">
		<thead class="border-b border-b-2">
			<tr>
				<th class="text-start ps-2">#</th>
				<th>Name</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody class="before:leading-4 [&>*:nth-child(even)]:bg-orange-100 [&>*:nth-child(odd)]:bg-orange-200">
			{#each categories as category, index}
				<tr>
					<td class="min-w-[30px] ps-2">{index + 1}</td>
					<td class="">{category.name}</td>
					<td class="flex flex-row justify-center gap-2 py-2">
						<!-- <button on:click={() => handleDelete(category._id)} class="bg-gray-100 border border-gray-700 hover:bg-white hover:border-black duration-100 hover:scale-105 px-2 py-1 rounded-sm">Edit</button> -->
						<button on:click={() => handleDelete(category._id)} class="bg-gray-100 border border-gray-700 hover:bg-white hover:border-black duration-100 hover:scale-105 px-2 py-1 rounded-sm">Delete</button>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.categories-table table, th, td {
		border-collapse: collapse;
	}

	.categories-table tbody:before {
		content: "-";
    display: block;
    line-height: 1em;
    color: transparent;
	}
</style>