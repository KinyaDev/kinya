<script>
	import Header from '../../components/Header.svelte';
	import Navbar from '../../components/Navbar.svelte';
	import Project from '../../components/Project.svelte';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
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
				description="Après avoir été atteint par une malédiction dont même les dieux ne peuvent pas s’échapper, Qanthris, Dragon du Printemps fût réincarné par ses frères dans un autre monde, amnésique aux pouvoirs dormants. C’était la seule solution pour effacer la malédiction le rendant fou. Maintenant, dans l’autre monde, avec sa forme humanoïde, il apprivoise le monde tout en découvrant qui il est réellement."
				name="Qanthris"
				bannerURL="https://t4.ftcdn.net/jpg/04/04/73/39/360_F_404733910_2mIXr6RbC5G3WZJFjopVsBaR3EOM6Bqy.jpg"
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

	.projects {
		display: flex;
		gap: 1.2rem;
	}
</style>
