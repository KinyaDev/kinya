<script>
	import { onMount } from 'svelte';
	import Header from '../../components/Header.svelte';
	import Navbar from '../../components/Navbar.svelte';
	import Project from '../../components/Project.svelte';
</script>

<svelte:head>
	<title>Kinya Website - Projects</title>
</svelte:head>

<div>
	<div class="main">
		<Navbar active="projects" />
		<Header />
		<div class="projects animate__animated animate__zoomInDown">
			<Project
				num={1}
				description="Dans ce manga, rejoignez le dieu draconique amnésique réincarné dans un autre monde."
				name="Qanthris"
			/>
		</div>
	</div>
</div>

<style lang="scss">
	.main {
		text-align: center;
		align-items: center;
		width: 100%;
	}

	* {
		font-family: sans-serif;
	}
</style>
