<script lang="ts">
	export let num: number;
	export let name: string;
	export let description: string;
</script>

<div class="project">
	<p class="pr-cl">Projet n°{num}</p>
	<div class="stats">
		<b>{name}</b>
		<p>{description}</p>
		<a href={`/projects/${name.toLowerCase()}`} rel="noreferrer">Rejoindre</a>
	</div>
</div>

<style lang="scss">
	.pr-cl {
		text-align: left;
	}
	.stats {
		border: 1px solid black;
	}
</style>
