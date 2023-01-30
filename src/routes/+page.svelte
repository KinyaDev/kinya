<script>
	import About from '../components/About.svelte';
	import Arts from '../components/Arts.svelte';
	import Header from '../components/Header.svelte';

	$: artcount = 0;

	let addTrigger = () => artcount++;
</script>

<svelte:head>
	<title>Kinya Website</title>
</svelte:head>

<div>
	<div class="container">
		<Header />
		<About />
		<br />
		<p>Il y a {artcount} publications</p>
		<br />
		<Arts {addTrigger} />
	</div>
</div>

<style>
	.container {
		text-align: center;
		align-items: center;
		width: 100%;
	}

	* {
		font-family: sans-serif;
	}
</style>
