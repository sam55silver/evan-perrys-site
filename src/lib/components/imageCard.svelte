<script>
	export let byWidth;
	export let imgSrc;
	export let title;
	export let description;
</script>

<div class="flex flex-col items-center justify-center h-full">
	<img class="{ byWidth ? 'w-full h-auto' : 'h-[75%] w-auto'}" src={imgSrc} alt={description} />
	<div class="mt-4 text-center">
		<h2>{title}</h2>
		<p class="text-sm mb-1">
			{description}
		</p>
		<a class="text-sm bg-sky-700 text-white rounded px-3 py-1">Learn More</a>
	</div>
</div>
