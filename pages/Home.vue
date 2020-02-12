<template>
	<div class="page">
		<header>
			<h1>Nadčasový Pomocníci</h1>
			<p class="sub-title">Aplikácia na zjednodušenie merania časových údajov.</p>
		</header>

		<main>
			<p>
				Bonbon brownie sweet gingerbread soufflé. Tart cake ice cream macaroon carrot cake. Cupcake liquorice
				jelly beans biscuit sweet carrot cake jelly. Chocolate cake macaroon sweet roll. Candy canes gingerbread
				icing sesame snaps pie soufflé carrot cake muffin pudding. Chocolate cake gummi bears lemon drops
				chocolate. Donut dragée dragée cake topping. Marzipan danish pie jelly beans. Cake candy marshmallow.
				Cupcake donut sesame snaps chocolate bar halvah lollipop. Cotton candy tootsie roll wafer jelly ice
				cream sweet roll bonbon candy canes chupa chups. Tootsie roll sweet cupcake candy tart gummies.
			</p>
			<section>
				<h2>Nadčasový Pomocník 1</h2>
				<router-link to="nadcasovy-pomocnik-1">Spustiť</router-link>
				<p>
					Lollipop pudding marzipan bear claw muffin. Cake donut cake cheesecake jelly-o cupcake. Powder cake
					marzipan topping jelly pastry gummies. Tootsie roll dragée halvah tootsie roll. Macaroon pastry
					donut. Muffin bonbon chocolate cake cotton candy cake topping pastry. Marshmallow toffee pastry
					jelly beans. Sweet roll caramels powder. Caramels biscuit jelly marshmallow sesame snaps lemon
					drops. Marzipan jelly-o apple pie gingerbread. Lemon drops chupa chups icing pudding liquorice
					soufflé. Liquorice pudding cookie lollipop donut donut pudding croissant jujubes. Gummies sugar plum
					dessert sweet soufflé. Marzipan gummi bears cake fruitcake halvah sugar plum carrot cake.
				</p>
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

main section a {
	display: inline-block;
	color: #4caf50;
	margin: 0.6em 0;
}

main p {
	line-height: 1.6em;
	text-align: justify;
	padding-bottom: 2em;
}
</style>
