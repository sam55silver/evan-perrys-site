<script>
	export let byWidth;
	export let imgSrc;
	export let title;
	export let description;
</script>

<div class="flex flex-col items-center justify-center h-full">
	<img class="{ byWidth ? 'w-full max-w-screen-md h-auto' : 'h-[75%] w-auto'}" src={imgSrc} alt={description} />
</div>
