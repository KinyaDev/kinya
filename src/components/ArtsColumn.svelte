<script lang="ts">
	export let fi: {
		path: string;
		name: string;
	}[];
</script>

<div class="column">
	{#each Object.values(fi) as f}
		<div>
			<img src={f.path + 'png'} alt={f.name} />
			<p>{f.name}</p>
		</div>
	{/each}
</div>

<style lang="scss">
	/* Create four equal columns that sits next to each other */
	.column {
		flex: 25%;
		max-width: 25%;
		padding: 0 4px;

		img {
			margin-top: 8px;
			vertical-align: middle;
			width: 100%;
			-webkit-user-drag: none;
		}
	}

	/* Responsive layout - makes a two column-layout instead of four columns */
	@media screen and (max-width: 800px) {
		.column {
			flex: 50%;
			max-width: 50%;
		}
	}

	/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
	@media screen and (max-width: 600px) {
		.column {
			flex: 100%;
			max-width: 100%;
		}
	}
</style>
