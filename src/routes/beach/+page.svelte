<script>
	import Beach from '$lib/assets/images/beach-walk.jpg'
	import ImageCard from '$lib/components/imageCard.svelte'
	import { onMount } from 'svelte'

	let imgWidth = 300
	onMount(() => {
		imgWidth = window.innerWidth * 3 / 5
	})
</script>

<ImageCard 
	title="Beach Walk" 
	description="Women walks on the beach" 
	imgWidth={imgWidth}
	imgSrc={Beach}
/>

