<script lang="ts">
	export let active = 'home';
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
	<a class="navbar-brand" href="#">Kinya</a>
	<button
		class="navbar-toggler"
		type="button"
		data-toggle="collapse"
		data-target="#navbarNavAltMarkup"
		aria-controls="navbarNavAltMarkup"
		aria-expanded="false"
		aria-label="Toggle navigation"
	>
		<span class="navbar-toggler-icon" />
	</button>
	<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
		<div class="navbar-nav">
			<a class="nav-item nav-link {active === 'home' ? 'active' : ''}" href="/">Accueil</a>
			<a class="nav-item nav-link {active === 'projects' ? 'active' : ''}" href="/projects"
				>Projets</a
			>
			<a class="nav-item nav-link {active === 'arts' ? 'active' : ''}" href="/arts">Arts</a>
		</div>
	</div>
</nav>

<style lang="scss">
	.active {
		border: 1px solid black;
		border-style: dotted;
	}

	button {
		margin-right: 3%;
	}

	.navbar-brand {
		margin-left: 4%;
	}
</style>
