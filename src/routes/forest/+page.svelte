<script>
	import Forest from '$lib/assets/images/forest.jpg'
	import { onMount } from 'svelte'

	let imgHeight = 100
	onMount(() => {
		//imgHeight = window.innerHeight / 3
	})
</script>


<div class="flex flex-col items-center p-6 text-center">
	<img width="300" src={Forest} />
	<div class="mt-6">
		<h2 class="text-xl font-bold">Walk in the Woods</h2>
		<p>
			Sir Donald strolling through the woods
		</p>
	</div>
	<a class="mt-4 bg-sky-700 text-white rounded px-6 py-3">Learn More</a>
</div>
