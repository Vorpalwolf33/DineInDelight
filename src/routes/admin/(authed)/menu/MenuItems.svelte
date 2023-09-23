<script lang="ts">
	import { enhance } from "$app/forms";
	import { page } from "$app/stores";

	let menuItems: Array<{_id: string, name: string, image: string, category: {_id: string, name: string}, price: number}> = []
	$: {
		menuItems = $page.data.menuItems
	}

	let fileInput: HTMLInputElement;
	let showImage: boolean = false;
	let thumbnail: HTMLImageElement;

	

	function onFileChange() {
		if(fileInput && fileInput.files) {
			showImage = true;

			const file = fileInput.files[0]
			if (file) {
				const reader = new FileReader();
				reader.addEventListener('load', function() {
					if(typeof reader.result == 'string')
						thumbnail.setAttribute("src", reader.result)
				})
				reader.readAsDataURL(file);
				return;
			}
		}
		showImage = false
	}

	const handleDelete = async (id: string) => {
		const response = await fetch('/admin/menu/menu-item?id=' + id, {method: "DELETE"})
		const data = await response.json()
		console.log(data)
		if(data.success) {
			console.log(menuItems)
			menuItems = menuItems.filter((cat: {_id: string, name: string}) => cat._id != id)
			console.log(menuItems)
		}
	}

</script>

<div>
	<h2 class="font-bold text-2xl">Add New Item</h2>
	<form method="POST" class="mt-6" use:enhance enctype="multipart/form-data" action="?/add-menu-item">
		<div class="flex flex-row gap-4">
			<div>
				<input type="name" placeholder="Name" name="name" class="border border-gray-300 bg-white rounded-md px-4 py-2"/>
			</div>
			<div>
				<input type="number" placeholder="Price" name="price" class="border border-gray-300 bg-white rounded-md px-4 py-2"/>
			</div>
			<select class="border border-gray-300 bg-white rounded-md px-4 py-2 min-w-[150px]" name="category">
				<option value="category" class="text-gray-400" disabled>Category</option>
				{#each $page.data.categories as category}
					<option value="{category._id}">{category.name}</option>
				{/each}
			</select>
		</div>
		<div class="mt-4">
			<button class="relative border w-[150px] py-2 text-gray-400 border-gray-300 rounded-md" type="button">
				<input type="file" accept="image/png, image/jpg, image/jpeg" bind:this={fileInput} on:change={onFileChange} name="image" class="opacity-0 h-full absolute top-0 left-0 right-0 bottom-0 z-10"/>
				{#if !showImage}
					Thumbnail
				{:else}
					Change
				{/if}
			</button>
			{#if showImage}
				<div class="w-[150px] h-[150px] mt-4 rounded-xl overflow-hidden">
					<img bind:this={thumbnail} src="" alt="Preview" class="h-full w-full object-cover"/>
				</div>
			{/if}
		</div>
		<div>
			<button class="bg-orange-500 py-2 text-white font-bold rounded-md mt-4 hover:bg-orange-600 w-[150px]">Add Item</button>
		</div>
	</form>
</div>
{#if menuItems.length > 0}
	<div class="mt-16 menu-items-table">
		<h2 class="font-bold text-2xl">Category List</h2>
		<table class="mt-6 min-w-[300px] w-full text-center">
			<thead class="border-b border-b-2">
				<tr>
					<th>#</th>
					<th>Image</th>
					<th>Name</th>
					<th>Price</th>
					<th>Category</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody class="before:leading-4 [&>*:nth-child(even)]:bg-orange-100 [&>*:nth-child(odd)]:bg-orange-200">
				{#each menuItems as item, index}
					<tr>
						<td class="min-w-[30px]">{index + 1}</td>
						<td class="py-2">
							<img src="/src/lib/assets/{item.image}" alt="thumbnail" class="w-[64px] h-[64px] object-cover relative left-1/2 translate-x-[-50%]"/>
						</td>
						<td class="">{item.name}</td>
						<td class="">{item.price}</td>
						<td>{item.category.name}</td>
						<td class="flex flex-row justify-center gap-2 pt-4">
							<!-- <button class="bg-gray-100 border border-gray-700 hover:bg-white hover:border-black duration-100 hover:scale-105 px-2 py-1 rounded-sm">Edit</button> -->
							<button on:click={() => handleDelete(item._id)} class="mt-2 bg-gray-100 border border-gray-700 hover:bg-white hover:border-black duration-100 hover:scale-105 px-2 py-1 rounded-sm">Delete</button>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{:else}
	<div class="text-gray-400 text-center font-bold mt-24 text-2xl">
		No menu items available ...
	</div>
{/if}

<style>
	.menu-items-table tbody:before {
		content: "-";
    display: block;
    line-height: 1em;
    color: transparent;
	}
</style>
