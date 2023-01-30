<script lang="ts">
	export const get = async () => {
		const allimgsf = import.meta.glob('$lib/*.png');
		const iterableImages = Object.entries(allimgsf);

		const allimgs = await Promise.all(
			iterableImages.map(async ([path, resolver]) => {
				// @ts-ignore
				const imgPath = path.slice(1, -3);

				addTrigger();

				return {
					path: imgPath,
					name: imgPath.split('/').reverse()[0]
				};
			})
		);

		return allimgs;
	};

	export let addTrigger: () => void;
</script>

<div class="arts">
	{#await get() then get}
		{#each Object.values(get) as f}
			<div class="art">
				<img src={f.path + 'png'} alt={f.name} />
				<p>{f.name}</p>
			</div>
		{/each}
	{/await}
</div>

<style>
	.arts {
		margin: 0 auto;
		text-align: center;
	}

	.art {
		width: 320px;
		margin: 20px;
		border: 1px solid black;
		display: inline-block;
		font-weight: bold;
		color: rgb(124, 110, 110);
	}

	.art img {
		-webkit-user-drag: none;
		width: 100%;
		padding: 0.6%;
	}

	.art p {
		font-size: 0.8rem;
	}
</style>
