<template>
	<div class="page">
		<!-- Header -->
		<header class="header">
			<h1>Nadčasový Pomocníci</h1>
			<p class="sub-title">Aplikácia na zjednodušenie merania časových údajov.</p>
		</header>

		<main>
			<!-- SECTION: Description -->
			<section class="description">
				<p>Táto aplikácia bola vytvorená za účelom <strong>zjednodušenia zbierania údajov</strong> (hlavne časových) v rôznych obslužných systémoch (obchody, výdajne jedla a pod.). Zozbierané dáta je následne možné použiť pri vytváraní simulačného modelu pre daný obslužný systém. Na tvorbu modelov existuje mnoho programov. Dobre navrhnutý model môže potom poslúžiť na simulovanie obslužného systému, experimentovanie a hľadanie riešení, ktoré zlepšia tento systém.</p>

				<p>Aplikácia sa skladá z niekoľkých nadčasových pomocníkov. Každý z nich sa líši tým, aké dáta je pomocou neho možné zozbierať. Zozbierané <strong>dáta sa ukladajú lokálne</strong> vo webovom prehliadači (Google Chrome, Opera, a pod.), v ktorom je táto aplikácia práve otvorená. Po zozbieraní dát <strong>je možné si dáta skopírovať</strong> (skopírované dáta sú v CSV formáte - jednotlivé údaje sú oddelené bodkočiarkou) a vložiť do nejakého súboru v počítači.</p>
			</section>

			<!-- SECTION: Nadčasový Pomocník 1 -->
			<section class="helper">
				<h2>Nadčasový Pomocník 1</h2>
				<p class="sub-title">Pomocník na meranie toho, kedy a koľko zákaníkov vstúpilo do obslužného systému.</p>

				<!-- Link -->
				<router-link
					class="helper-link"
					to="nadcasovy-pomocnik-1"
				><i class="icon fas fa-play"></i> Spustiť</router-link>
			</section>
		</main>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style scoped>
/**
*** HELPER 
*/
.helper {
	padding-bottom: 2em;
}

.helper .sub-title {
	line-height: 1.6em;
	padding-bottom: 0;
	margin: 0.3em 0 0.6em 0;
}

.helper h2 {
	font-size: 35px;
	font-weight: 900;
}

.helper-link {
	cursor: pointer;
	display: inline-block;
	background-color: #4caf50;
	color: white;
	font-size: 11px;
	font-weight: bold;
	font-weight: 700;
	line-height: 40px;
	text-transform: uppercase;
	text-decoration: none;
	letter-spacing: 0.06em;
	padding-right: 3em;
	margin: 0.6em 0;
	border: none;
	border-radius: 40px;
}

.helper-link .icon {
	width: 40px;
	height: 40px;
	background-color: rgba(255, 255, 255, 0.2);
	font-size: 14px;
	line-height: 40px;
	text-align: center;
	margin-right: 1.5em;
	border-radius: 50%;
}
</style>
