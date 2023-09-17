<script lang="ts">
	import "../app.css"
	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte";
</script>

<div>
	<Navbar />
	<div class="max-w-[1920px] ms-auto me-auto min-h-screen">
		<slot />
	</div>
	<Footer />
</div>