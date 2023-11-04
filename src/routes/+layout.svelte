<script>
	import "../app.css"
	import RightArrow from "$lib/components/right-arrow.svelte"
	import LeftArrow from "$lib/components/left-arrow.svelte"
	import HorizontalLine from "$lib/components/horizontal-line.svelte"
</script>

<main class="flex flex-col justify-between h-screen px-4 py-8">
	<div>
		<h1 class="mb-4 w-full text-center text-2xl font-bold">
			Evan Perry
		</h1>
		<HorizontalLine />
	</div>

	
	<div class="flex items-center">
		<LeftArrow />
		<slot />
		<RightArrow />
	</div>


	<nav>
		<HorizontalLine />
		<div class="mt-4 flex justify-center gap-4 w-full">
			<a>Home</a>
			<a>Forest</a>
			<a>Cottage</a>
			<a>Beach</a>
			<a>Lighthouse</a>
			<a>Van</a>
			<a>Contact</a>
		</div>
	</nav>
</main>
