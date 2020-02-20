<template>
	<helper-layout
		:isInfoScreenVisible="isInfoScreenVisible"
		:isActiveRecordsScreenVisible="true"
		:isStoredRecordsScreenVisible="isStoredRecordsScreenVisible"
		:isActiveRecordsEmpty="activeRecords.length === 0"
		@copyStoredRecords="copyStoredRecords"
		@removeStoredRecords="removeStoredRecords"
	>
		<!-- Info -->
		<template v-slot:info>
			<header class="header">
				<h1>Nadčasový Pomocník&nbsp;1</h1>
				<p class="sub-title">Pomocník na meranie toho, kedy a koľko zákaníkov vstúpilo do obslužného systému.</p>
			</header>

			<main class="description">
				<p>
					Bonbon brownie sweet gingerbread soufflé. Tart cake ice cream macaroon carrot cake. Cupcake
					liquorice jelly beans biscuit sweet carrot cake jelly. Chocolate cake macaroon sweet roll. Candy
					canes gingerbread icing sesame snaps pie soufflé carrot cake muffin pudding. Chocolate cake gummi
					bears lemon drops chocolate. Donut dragée dragée cake topping. Marzipan danish pie jelly beans. Cake
					candy marshmallow. Cupcake donut sesame snaps chocolate bar halvah lollipop. Cotton candy tootsie
					roll wafer jelly ice cream sweet roll bonbon candy canes chupa chups. Tootsie roll sweet cupcake
					candy tart gummies.
				</p>

				<p>
					Lollipop pudding marzipan bear claw muffin. Cake donut cake cheesecake jelly-o cupcake. Powder cake
					marzipan topping jelly pastry gummies. Tootsie roll dragée halvah tootsie roll. Macaroon pastry
					donut. Muffin bonbon chocolate cake cotton candy cake topping pastry. Marshmallow toffee pastry
					jelly beans. Sweet roll caramels powder. Caramels biscuit jelly marshmallow sesame snaps lemon
					drops. Marzipan jelly-o apple pie gingerbread. Lemon drops chupa chups icing pudding liquorice
					soufflé. Liquorice pudding cookie lollipop donut donut pudding croissant jujubes. Gummies sugar plum
					dessert sweet soufflé. Marzipan gummi bears cake fruitcake halvah sugar plum carrot cake.
				</p>

				<p>
					Bonbon brownie sweet gingerbread soufflé. Tart cake ice cream macaroon carrot cake. Cupcake
					liquorice jelly beans biscuit sweet carrot cake jelly. Chocolate cake macaroon sweet roll. Candy
					canes gingerbread icing sesame snaps pie soufflé carrot cake muffin pudding. Chocolate cake gummi
					bears lemon drops chocolate. Donut dragée dragée cake topping. Marzipan danish pie jelly beans. Cake
					candy marshmallow. Cupcake donut sesame snaps chocolate bar halvah lollipop. Cotton candy tootsie
					roll wafer jelly ice cream sweet roll bonbon candy canes chupa chups. Tootsie roll sweet cupcake
					candy tart gummies.
				</p>
			</main>
		</template>

		<!-- Active Records -->
		<template v-slot:active-records>
			<transition-group
				class="active-records"
				name="active-records"
				tag="div"
			>
				<active-record
					v-for="(record, index) in activeRecords"
					:key="record.id"
					:id="record.id"
					:index="index"
					@save="saveActiveRecord"
					@remove="removeActiveRecord"
				></active-record>
			</transition-group>
		</template>

		<!-- Stored Records -->
		<template v-slot:stored-records>
			<stored-records-table :storedRecords="storedRecords"></stored-records-table>
		</template>

		<!-- Control Panel -->
		<template v-slot:control-panel>
			<control-panel
				:isInfoScreenVisible="isInfoScreenVisible"
				:isStoredRecordsScreenVisible="isStoredRecordsScreenVisible"
				@toggleInfoScreen="toggleInfoScreen"
				@addNewActiveRecord="addNewActiveRecord"
				@toggleStoredRecordsScreen="toggleStoredRecordsScreen"
			></control-panel>
		</template>
	</helper-layout>
</template>

<script>
import HelperLayout from "../components/HelperLayout";
import ActiveRecord from "./components/ActiveRecord";
import StoredRecordsTable from "./components/StoredRecordsTable";
import ControlPanel from "./components/ControlPanel";

export default {
	components: {
		HelperLayout,
		ActiveRecord,
		StoredRecordsTable,
		ControlPanel
	},
	data() {
		return {
			isInfoScreenVisible: true,
			isStoredRecordsScreenVisible: false,

			activeRecords: [],
			nextRecordID: 1,
			storedRecords: []
		};
	},
	mounted() {
		this._initLocalStorage();
		this._initStoredRecords();
	},
	methods: {
		_formatTime(time) {
			if (!time) return "";

			const dateFormatOptions = {
				timeStyle: "medium"
			};

			return new Date(time).toLocaleDateString(
				"sk-SK",
				dateFormatOptions
			);
		},
		_initLocalStorage() {
			const storageData = localStorage.getItem("timeless-helper-1");

			if (!storageData) {
				const data = {
					records: [],
					nextRecordID: 1
				};

				localStorage.setItem("timeless-helper-1", JSON.stringify(data));
			}
		},
		_initStoredRecords() {
			let storageData = localStorage.getItem("timeless-helper-1");

			if (storageData) {
				storageData = JSON.parse(storageData);
				this.storedRecords = storageData.records;
			} else {
				this.storedRecords = [];
			}
		},
		addNewActiveRecord() {
			this.isInfoScreenVisible = false;
			this.isStoredRecordsScreenVisible = false;

			this.activeRecords.push({
				id: this.nextRecordID
			});
			this.nextRecordID++;
		},
		saveActiveRecord({ index, groupSize, timeOfArrival }) {
			let storageData = localStorage.getItem("timeless-helper-1");

			if (!storageData) {
				this._initStoredRecords();
				this._initLocalStorage();
				storageData = localStorage.getItem("timeless-helper-1");
			}

			storageData = JSON.parse(storageData);
			const newRecord = {
				id: storageData.nextRecordID,
				groupSize: groupSize,
				timeOfArrival: timeOfArrival
			};

			storageData.records.push(newRecord);
			this.storedRecords.push(newRecord);
			storageData.nextRecordID++;

			localStorage.setItem(
				"timeless-helper-1",
				JSON.stringify(storageData)
			);

			this.removeActiveRecord(index);
		},
		removeActiveRecord(index) {
			this.activeRecords.splice(index, 1);
		},
		copyStoredRecords() {
			const textarea = document.createElement("textarea");
			let storageData = localStorage.getItem("timeless-helper-1");
			let text = "";

			if (!storageData) return;

			storageData = JSON.parse(storageData);
			storageData.records.forEach(({ id, groupSize, timeOfArrival }) => {
				const time = this._formatTime(timeOfArrival);
				text += `${id};${time};${groupSize}\n`;
			});

			textarea.value = text;
			textarea.setAttribute("readonly", "");
			textarea.style = { position: "absolute", left: "-9999px" };
			document.body.appendChild(textarea);

			textarea.select();
			document.execCommand("copy");
			alert("Záznamy boli skopírované.");

			document.body.removeChild(textarea);
		},
		removeStoredRecords() {
			const confirm1 = confirm(
				"Naozaj chceš vymazať všetky uložené záznamy ?"
			);

			if (confirm1) {
				this.storedRecords.splice(0, this.storedRecords.length);
				localStorage.removeItem("timeless-helper-1");
			}
		},
		toggleInfoScreen() {
			this.isStoredRecordsScreenVisible = false;
			this.isInfoScreenVisible = this.isInfoScreenVisible ? false : true;
		},
		toggleStoredRecordsScreen() {
			this.isInfoScreenVisible = false;
			this.isStoredRecordsScreenVisible = this
				.isStoredRecordsScreenVisible
				? false
				: true;
		}
	}
};
</script>

<style scoped>
/**
***	ACTIVE RECODS - TRANSITIONS		
*/
.active-records {
	display: flex;
	position: relative;
	flex-direction: row;
	flex-wrap: wrap;
}
.active-records-enter,
.active-records-leave-to {
	opacity: 0;
	transform-origin: top center;
	transform: scale(0);
}
</style>
