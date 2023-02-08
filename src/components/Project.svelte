<script lang="ts">
	export let num: number;
	export let name: string;
	export let description: string;
	export let bannerURL: string = '';
</script>

<div class="project">
	<img src={bannerURL} alt="" class="banner" />
	<div class="stats">
		<p class="number">Projet n°{num}</p>
		<b>{name}</b>
		<p>{description}</p>
		<a href="https://twitter.com/kinyascales" target="_blank" rel="noreferrer"
			>Rejoindre les Projets</a
		>
	</div>
</div>

<style lang="scss">
	* {
		font-family: Arial, Helvetica, sans-serif;
	}

	.banner {
		width: 100%;
		height: 80%;
	}

	.stats b {
		font-size: 2rem;
		text-shadow: -1.5px -1.5px #b8b4b4;
	}

	.project {
		width: 40%;
		height: 60%;
		flex: 1;
		margin-left: 5%;
		margin-right: 5%;
		padding-bottom: 1%;
		background-color: #dd6969;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
			rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
	}

	.stats p {
		padding-left: 1%;
		padding-right: 1%;
	}
</style>
