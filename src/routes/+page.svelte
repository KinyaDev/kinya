<script>
	import About from '../components/About.svelte';
	import Header from '../components/Header.svelte';
	import Navbar from '../components/Navbar.svelte';
	// import { dev } from '$app/environment';
	// import { inject } from '@vercel/analytics';

	// inject({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<title>Kinya Website</title>
</svelte:head>

<div>
	<div class="container">
		<Navbar />
		<Header />
		<About />
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
