<script>
	import { page } from "$app/stores";
	const sections = [
		{
			name: "Analytics",
			url: "/analytics",
		},
		{
			name: "Accounting",
			url: "/accounting",
		},
		{
			name: "Customer Feedback",
			url: "/customer-feedback",
		},
		{
			name: "Inventory",
			url: "/inventory",
		},
		{
			name: "Menu",
			url: "/menu",
		},
		{
			name: "Orders",
			url: "/orders",
		},
		{
			name: "Reservation",
			url: "/reservation",
		},
	]
</script>

<div class="max-w-[300px] min-w-[300px] shadow-lg flex flex-col justify-between pb-12 px-6">
	<div>
		<div class="border-b border-gray-300">
			<img src="/logo.png" alt="Logo" class="w-[48px] h-[48px] ms-auto me-auto my-5"/>
		</div>
		<div class="flex flex-col justify-start mt-12 gap-4">
			{#each sections as section}
				<a href="/admin{section.url}" class={`duration-100 hover:font-semibold text-lg ${'/admin' + section.url == $page.url.pathname?"font-semibold text-2xl": ""}`}>
					<button>{section.name}</button>
				</a>
			{/each}
		</div>
	</div>
	<div>
		<button class="border border-gray-300 bg-black/5 px-4 py-2 w-full rounded-3xl flex flex-row justify-center gap-2">
			<img src="/logout.svg" alt="O" class="text-xs"/>
			<div>
				Logout
			</div>
		</button>
	</div>
</div>