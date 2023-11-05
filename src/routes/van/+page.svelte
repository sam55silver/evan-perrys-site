<script>
	import Van from '$lib/assets/images/van.jpg'
	import ImageCard from '$lib/components/imageCard.svelte'
	import { onMount } from 'svelte'

	let imgWidth = 300
	onMount(() => {
		imgWidth = window.innerWidth * 3 / 5
	})
</script>

<ImageCard 
	title="Dudes and a Van" 
	description="Driving a van and chilling" 
	imgWidth={imgWidth}
	imgSrc={Van}
/>

