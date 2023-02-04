<script lang="ts">
	export let num: number;
	export let name: string;
	export let description: string;
	export let bannerURL: string = '';
</script>

<div class="project">
	<p class="number">Projet n°{num}</p>
	<img src={bannerURL} alt="" class="banner" />
	<div class="stats">
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

	.number {
		left: 0;
		padding-right: 8%;
		position: absolute;
		width: 100%;
		text-decoration: underline;
		text-align: right;
		font-size: 1.2rem;
		padding-top: 1%;
		transition: all 0.4s 0.1s;
	}

	.number:hover {
		font-size: 1.26rem;
	}

	.stats :first-child {
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
