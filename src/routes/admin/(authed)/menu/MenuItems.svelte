<script lang="ts">
	import { enhance } from "$app/forms";
	import { page } from "$app/stores";

</script>

<div>
	<h2 class="font-bold text-2xl">Add New Item</h2>
	<form method="POST" class="mt-6" use:enhance enctype="multipart/form-data">
		<div class="flex flex-row gap-4">
			<div>
				<input type="name" placeholder="Name" name="name" class="border border-gray-300 bg-white rounded-md px-4 py-2"/>
			</div>
			<div>
				<input type="number" placeholder="Price" name="price" class="border border-gray-300 bg-white rounded-md px-4 py-2"/>
			</div>
			<select class="border border-gray-300 bg-white rounded-md px-4 py-2 min-w-[150px]">
				<option value="category" class="text-gray-400">Category</option>
				{#each $page.data.categories as category}
					<option value="{category.name}">{category.name}</option>
				{/each}
			</select>
		</div>
		<div class="mt-4">
			<button class="relative border w-[150px] py-2 text-gray-400 border-gray-300 rounded-md" type="button">
				<input type="file" accept="image/png, image/jpg, image/jpeg" name="image" class="opacity-0 h-full absolute top-0 left-0 right-0 bottom-0 z-10"/>
				Thumbnail
			</button>
		</div>
		<div>
			<button class="bg-orange-500 py-2 text-white font-bold rounded-md mt-4 hover:bg-orange-600 w-[150px]">Add Item</button>
		</div>
	</form>
</div>
<!-- <SearchTable /> -->