<script>
	import Cottage from '$lib/assets/images/cottage.jpg'
	import ImageCard from '$lib/components/imageCard.svelte'
	import { onMount } from 'svelte'

	let imgWidth = 300
	onMount(() => {
		imgWidth = window.innerWidth * 3 / 5
	})
</script>

<ImageCard 
	title="Cottage Living" 
	description="Some chill vibes" 
	imgWidth={imgWidth}
	imgSrc={Cottage}
/>

