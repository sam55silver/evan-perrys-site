<script>
	import Forest from '$lib/assets/images/forest.jpg'
	import ImageCard from '$lib/components/imageCard.svelte'
	import { onMount } from 'svelte'

	let imgWidth = 300
	onMount(() => {
		imgWidth = window.innerWidth * 3 / 5
	})
</script>

<ImageCard 
	title="Walk in the Woods" 
	description="Sir Donald strolling through the woods" 
	byWidth={false}
	imgSrc={Forest}
/>

