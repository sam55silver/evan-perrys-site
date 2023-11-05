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

	
	<div class="flex justify-between items-center">
		<LeftArrow />
		<slot />
		<RightArrow />
	</div>


	<nav>
		<HorizontalLine />
		<div class="mt-4 flex justify-center gap-4 w-full">
			<a href="/">Home</a>
			<a href="/forest">Forest</a>
			<a href="/cottage">Cottage</a>
			<a href="/beach">Beach</a>
			<a href="/lighthouse">Lighthouse</a>
			<a href="/van">Van</a>
			<a href="/contact">Contact</a>
		</div>
	</nav>
</main>
