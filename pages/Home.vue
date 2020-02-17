<template>
	<div class="page">
		<header>
			<h1>Nadčasový Pomocníci</h1>
			<p class="sub-title">Aplikácia na zjednodušenie merania časových údajov.</p>
		</header>

		<main>
			<p>Táto aplikácia bola vytvorená za účelom zjednodušenia zbierania údajov (hlavne časových) v rôznych obslužných systémoch (obchody, výdajne jedla a pod.). Zozbierané dáta je následne možné použiť pri vytváraní simulačného modelu pre daný obslužný systém. Dobre navrhnutý model môže potom poslúžiť na simulovanie obslužného systému, experimentovanie a hľadanie riešení, ktoré zlepšia tento systém.</p>

			<p>Aplikácia sa skladá z niekoľkých nadčasových pomocníkov. Každý z nich sa líši tým, aké dáta je pomocou neho možné zozbierať. Zozbierané dáta sa ukladajú lokálne vo webovom prehliadači (Google Chrome, Opera, a pod.), v ktorom je táto aplikácia práve otvorená. Po zozbieraní dát je možné si dáta skopírovať (skopírované dáta sú v CSV formáte - jednotlivé údaje sú oddelené bodkočiarkou) a vložiť do nejakého súboru v počítači.</p>

			<section>
				<h2>Nadčasový Pomocník 1</h2>
				<p>Pomocník na meranie toho, kedy a koľko zákaníkov vstúpilo do obslužného systému.</p>
				<router-link to="nadcasovy-pomocnik-1"><i class="fas fa-play"></i> Spustiť</router-link>
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
main section h2 {
	font-size: 30px;
	font-weight: 900;
}

main p {
	line-height: 1.6em;
	text-align: justify;
	padding-bottom: 2em;
}

main section {
	padding-bottom: 2em;
}

main section p {
	margin: 0.3em 0 0.6em 0;
	padding-bottom: 0;
}

main section a {
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

main section a .fas {
	width: 40px;
	height: 40px;
	background-color: rgba(255, 255, 255, 0.2);
	font-size: 14px;
	text-align: center;
	line-height: 40px;
	margin-right: 1.5em;
	border-radius: 50%;
}
</style>
