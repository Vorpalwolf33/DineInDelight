<script lang="ts">
	import Sidebar from "$lib/components/admin/Sidebar.svelte";
	import Titlebar from "$lib/components/admin/Titlebar.svelte";


</script>

<div class="flex h-full flex-row ">
	<Sidebar />
	<div class="flex-1 max-h-full overflow-y-auto flex flex-col justify-start">
		<Titlebar />
		<div class="px-8 py-10 ">
			<slot />
		</div>
	</div>
</div>