<script>
	import "../app.css"
	import HorizontalLine from "$lib/components/horizontal-line.svelte"

</script>

<main class="container mx-auto">
	<h1 class="my-4 w-full text-center text-2xl font-bold">
		Evan Perry
	</h1>

	<HorizontalLine />

	<nav class="my-4 flex justify-center gap-4 w-full">
		<a href="/">Home</a>
		<a href="/forest">Forest</a>
		<a href="/cottage">Cottage</a>
		<a href="/beach">Beach</a>
		<a href="/lighthouse">Lighthouse</a>
		<a href="/van">Van</a>
		<a href="/contact">Contact</a>
	</nav>

	<main>
		<slot />
	</main>
</main>
