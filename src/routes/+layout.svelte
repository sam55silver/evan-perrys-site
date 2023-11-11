<script>
	import "../app.css"
	import RightArrow from "$lib/components/right-arrow.svelte"
	import LeftArrow from "$lib/components/left-arrow.svelte"
	import HorizontalLine from "$lib/components/horizontal-line.svelte"

	const navList = ["/", "/forest", "/cottage", "/beach", "/lighthouse", "/van", "/contact"]

	const next = () => {
		const curr = window.location.pathname
		const index = navList.indexOf(curr)

		if (index == navList.length - 1) {
			window.location.href = navList[0]
		} else {
			window.location.href = navList[index + 1]
		}
	}

	const prev = () => {
		const curr = window.location.pathname
		const index = navList.indexOf(curr)

		if (index == 0) {
			window.location.href = navList[-1]
		} else {
			window.location.href = navList[index - 1]
		}
	}
</script>

<main class="flex flex-col justify-between h-screen p-4">
	<div>
		<h1 class="mb-4 w-full text-center text-2xl font-bold">
			Evan Perry
		</h1>
		<HorizontalLine />
	</div>

	
	<div class="flex max-w-screen-lg w-full self-center justify-between gap-6 h-full items-center">
		<LeftArrow func={prev}/>
		<slot />
		<RightArrow func={next}/>
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
