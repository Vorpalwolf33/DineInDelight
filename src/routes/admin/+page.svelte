<script lang='ts'>
	import { enhance } from "$app/forms";
</script>

<div class="flex flex-row justify-center relative top-1/2 translate-y-[-50%]">

	<div class="border px-8 py-12 bg-white shadow-xl rounded-xl">
		<h2 class="text-center font-bold text-4xl">Admin Login</h2>
		<form method="POST" action="?/login" use:enhance class="flex flex-col justify-center gap-2 mt-12">
			<div>
				<input type="text" placeholder="User ID" name="user_id" class="border px-4 py-2 text-md rounded-md"/>
			</div>
			<div>
				<input type="password" placeholder="Password" name="password" class="border px-4 py-2 text-md rounded-md"/>
			</div>
			<button class="max-w-[150px] ms-auto me-auto bg-orange-500 px-4 py-2 rounded-md text-white font-bold  mt-4">Submit</button>
		</form>
	</div>
</div>