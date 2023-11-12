<script>
	import RightArrow from "$lib/components/right-arrow.svelte"
	import LeftArrow from "$lib/components/left-arrow.svelte"

	export let byWidth;
	export let imgSrc;
	export let title;
	export let description;

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

<div class="flex justify-center items-center gap-4">
	<LeftArrow func={prev} />
	<img 
		class="w-full max-w-screen-md h-[70vh] object-contain"
		src={imgSrc}
		alt={description}
	/>
	<RightArrow func={next} />
</div>

<h2 class="mt-6 text-center text-xl">{title}</h2>
