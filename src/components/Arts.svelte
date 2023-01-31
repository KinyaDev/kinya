<script lang="ts">
	import ArtsColumn from './ArtsColumn.svelte';

	export const get = async () => {
		const allimgsf = import.meta.glob(`/static/images/*.png`);
		
		const iterableImages = Object.entries(allimgsf);

		const allimgs = await Promise.all(
			iterableImages.map(async ([path, resolver]) => {
				// @ts-ignore
				const imgPath = path.slice(1, -3);

				addTrigger();

				return {
					path: imgPath.slice(7),
					name: imgPath.split('/').reverse()[0].replace(".","")
				};
			})
		);

		return allimgs;
	};

	export let addTrigger: () => void;

	function chunkArray(myArray: any[], chunk_size: number) {
		var index = 0;
		var arrayLength = myArray.length;
		var tempArray = [];

		for (index = 0; index < arrayLength; index += chunk_size) {
			let myChunk = myArray.slice(index, index + chunk_size);
			// Do something if you want with the group
			tempArray.push(myChunk);
		}

		return tempArray;
	}
</script>

<div class="row">
	{#await get() then get}
		{#each chunkArray(get, 7) as c}
			<ArtsColumn fi={c} />
		{/each}
	{/await}
</div>

<style lang="scss">
	.row {
		display: flex;
		flex-wrap: wrap;
		padding: 0 4px;
	}
</style>
