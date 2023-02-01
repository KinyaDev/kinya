<script lang="ts">
	import ArtsColumn from './ArtsColumn.svelte';

	export const get = async () => {
		const allimgsf = import.meta.glob('$lib/images/*.png');
		const iterableImages = Object.entries(allimgsf);

		const allimgs = await Promise.all(
			iterableImages.map(async ([path, resolver]) => {
				// gets the resolved asset path
				// @ts-ignore
				const imgPath = /** @type {{default: string;}} */ (await resolver()).default.slice(0, -4);

				addTrigger();

				return {
					path: imgPath,
					name: decodeURI(imgPath.split('/').at(-1)).split('-')[0]
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
