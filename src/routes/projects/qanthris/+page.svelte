<script>
	import Header from '../../../components/Header.svelte';
	import Navbar from '../../../components/Navbar.svelte';
</script>

<svelte:head>
	<title>Kinya Website - Qanthris</title>
</svelte:head>

<div>
	<div class="container">
		<Navbar active="arts" />
		<Header />
		<br />
		<h2>Qanthris</h2>
		<div class="synopsis">
			<b class="synopsis-title">Synopsis</b>
			<p class="synopsis-text">
				Après avoir été atteint par une malédiction dont même les dieux ne peuvent pas s’échapper,
				Qanthris, Dragon du Printemps fût réincarné par ses frères dans un autre monde, amnésique
				aux pouvoirs dormants. C’était la seule solution pour effacer la malédiction le rendant fou.
				Maintenant, dans l’autre monde, avec sa forme humanoïde, il apprivoise le monde tout en
				découvrant qui il est réellement.
			</p>
		</div>

		<div class="characters">
			<b class="characters-title">Personnages</b>
			<ul>
				<li><a href="#">Qanthris, le Dragon du Printemps</a></li>
			</ul>
		</div>

		<div class="conlangs">
			<b class="conlangs-title">Langues fictives présentes dans le Light Novel.</b>
			<ul>
				<li>
					<a
						href="https://docs.google.com/document/d/1lCDBqb9BbIWkYJxgu8NByHc7aG-6ctJkBFa6b6As4uo/edit?usp=sharing"
						target="_blank"
						rel="noreferrer">Grammaire de Qanthris (Light Novel)</a
					>
				</li>
				<li>
					<a
						href="https://docs.google.com/spreadsheets/d/1QlWBhyjvWuXDYgay2s0boTJuMALYsvVSbNYQPFghPxU/edit?usp=share_link"
						target="_blank"
						rel="noreferrer">Phonétique & Vocabulaire de Qanthris (Light Novel)</a
					>
				</li>
			</ul>
		</div>

		<div class="status">
			<b class="status-title">Etat de développement</b>
			<p class="status-text">Ce projet est une ébauche.</p>
		</div>

		<div class="discord">
			<b>Discord</b>
			<p>Il n'y a pas encore de serveur Discord pour le moment.</p>
		</div>
	</div>
</div>
