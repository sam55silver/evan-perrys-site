<script>
	export let imgWidth;
	export let imgSrc;
	export let title;
	export let description;
</script>


<img width={imgWidth} src={imgSrc} alt={description} />
<div class="mt-6">
	<h2 class="text-xl font-bold">{title}</h2>
	<p>
		{description}
	</p>
</div>
<a class="mt-4 bg-sky-700 text-white rounded px-6 py-3">Learn More</a>
