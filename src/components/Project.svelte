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
	* {
		font-family: Arial, Helvetica, sans-serif;
	}
	.pr-cl {
		padding-left: 5%;
		text-align: left;
		text-decoration: underline;
		font-size: 1.2rem;
		padding-top: 1%;
		transition: all 0.4s 0.1s;
	}

	.pr-cl:hover {
		font-size: 1.26rem;
	}

	.stats :first-child {
		font-size: 2rem;
		text-shadow: -1.5px -1.5px #b8b4b4;
	}

	.project {
		margin-left: 5%;
		margin-right: 5%;
		padding-bottom: 1%;
		background-color: #dd6969;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
			rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
	}
</style>
