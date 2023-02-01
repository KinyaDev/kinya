<script lang="ts">
	import Arts from '../../components/Arts.svelte';
	import Header from '../../components/Header.svelte';
	import Navbar from '../../components/Navbar.svelte';

	$: artcount = 0;

	let addTrigger = () => artcount++;
</script>

<svelte:head>
	<title>Kinya Website - Publications</title>
</svelte:head>

<div>
	<div class="container">
		<Navbar active="arts" />
		<Header />
		<br />
		<h2>Publications ({artcount})</h2>
		<br />
		<Arts {addTrigger} />
	</div>
</div>
