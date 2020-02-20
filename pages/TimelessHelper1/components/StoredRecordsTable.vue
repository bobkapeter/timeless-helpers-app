<template>
	<div class="table-container">
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>Čas príchodu</th>
					<th>Veľkosť skupiny</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="record in storedRecords"
					:key="record.id"
				>
					<td>{{ record.id }}.</td>
					<td>{{ record.timeOfArrival | formatTime }}</td>
					<td>{{ record.groupSize }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	props: {
		storedRecords: Array
	},
	filters: {
		formatTime(time) {
			if (!time) return "";

			const dateFormatOptions = {
				timeStyle: "medium"
			};

			return new Date(time).toLocaleDateString(
				"sk-SK",
				dateFormatOptions
			);
		}
	}
};
</script>

<style scoped>
.table-container {
	width: 100%;
	overflow: auto;
	margin: 0 auto;
}

table {
	width: 100%;
	max-width: 600px;
	min-width: 400px;
	margin: 0 auto;
	font-size: 14px;
}

thead {
	background-color: #ffffff;
	color: #452087;
	margin: 0 auto;
}

thead th {
	font-size: 13px;
	font-weight: 900;
	text-align: center;
	text-transform: uppercase;
	padding: 1.2em 1em;
	letter-spacing: 0.05em;
}

tbody td {
	text-align: center;
	padding: 1em 0;
}

tbody tr:nth-child(even) {
	background-color: rgba(255, 255, 255, 0.03);
}

@media screen and (max-width: 600px) {
	table th {
		font-size: 11px;
	}
	table {
		font-size: 11px;
	}
}
</style>
