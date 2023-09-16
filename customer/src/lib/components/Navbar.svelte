<div class="fixed h-nav-height w-screen top-0 left-0 shadow-md bg-orange-500">
	<div class="md:px-[10%] px-[5%] max-w-[1920px] ms-auto me-auto flex flex-row">
		<div class="flex-1 md:pt-2 pt-3 text-center">
			<img src="/logo.png" alt="logo" class="md:w-[64px] md:h-[64px] h-[48px] w-[48px]" style="filter: invert(1);"/>
		</div>
		<form method="POST" action="?/search" class="flex-1 text-center pt-4 md:text-xl text-md">
			<input type="text" placeholder="Search" name="search" class="px-4 py-2 rounded-3xl bg-white/70"/>
		</form>
		<div class="hidden md:flex flex-1 flex-row justify-end gap-4">
			<a class="w-[100px] text-2xl text-center pt-5 hover:font-bold duration-100 text-white/70" href="/">Home</a>
			<a class="w-[100px] text-2xl text-center pt-5 hover:font-bold duration-100 text-white/70" href="/cart">Cart</a>
			<a class="w-[100px] text-2xl text-center pt-5 hover:font-bold duration-100 text-white/70" href="/about">About</a>
		</div>
	</div>
</div>