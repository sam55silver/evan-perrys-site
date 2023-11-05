<script>
	import Lighthouse from '$lib/assets/images/lighthouse.jpg'
	import ImageCard from '$lib/components/imageCard.svelte'
	import { onMount } from 'svelte'

	let imgWidth = 300
	onMount(() => {
		imgWidth = window.innerWidth * 3 / 5
	})
</script>

<ImageCard 
	title="Lighthouse on a beach" 
	description="Guide them boats" 
	imgWidth={imgWidth}
	imgSrc={Lighthouse}
/>

