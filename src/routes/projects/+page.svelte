<script>
	import Header from '../../components/Header.svelte';
	import Navbar from '../../components/Navbar.svelte';
	import Project from '../../components/Project.svelte';

	import { inject } from '@vercel/analytics';
	inject();
</script>

<svelte:head>
	<title>Kinya Website - Projects</title>
</svelte:head>

<div>
	<div class="container">
		<Navbar active="projects" />
		<Header />
		<br />
		<h2>Mes Projets</h2>
		<Project
			num={1}
			description="Dans ce manga, rejoignez le dieu draconique amnésique réincarné dans un autre monde."
			name="Qanthris"
		/>
	</div>
</div>

<style lang="scss">
	.container {
		text-align: center;
		align-items: center;
		width: 100%;
	}

	* {
		font-family: sans-serif;
	}
</style>
