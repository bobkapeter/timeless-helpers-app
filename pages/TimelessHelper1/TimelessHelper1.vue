<template>
	<div id="timeless-helper-1">
		<div class="screens">
			<!-- Informations -->
			<div
				class="screen screen-info"
				:class="{ visible: isInfoScreenVisible }"
			>
				<header class="header">
					<h1>Nadčasový Pomocník 1</h1>
					<p class="sub-title">Pomocník na meranie toho, kedy a koľko zákaníkov vstúpilo do obslužného systému.</p>
				</header>

				<main class="description">
					<p>
						Bonbon brownie sweet gingerbread soufflé. Tart cake ice cream macaroon carrot cake. Cupcake
						liquorice jelly beans biscuit sweet carrot cake jelly. Chocolate cake macaroon sweet roll. Candy
						canes gingerbread icing sesame snaps pie soufflé carrot cake muffin pudding. Chocolate cake
						gummi bears lemon drops chocolate. Donut dragée dragée cake topping. Marzipan danish pie jelly
						beans. Cake candy marshmallow. Cupcake donut sesame snaps chocolate bar halvah lollipop. Cotton
						candy tootsie roll wafer jelly ice cream sweet roll bonbon candy canes chupa chups. Tootsie roll
						sweet cupcake candy tart gummies.
					</p>

					<p>
						Lollipop pudding marzipan bear claw muffin. Cake donut cake cheesecake jelly-o cupcake. Powder
						cake marzipan topping jelly pastry gummies. Tootsie roll dragée halvah tootsie roll. Macaroon
						pastry donut. Muffin bonbon chocolate cake cotton candy cake topping pastry. Marshmallow toffee
						pastry jelly beans. Sweet roll caramels powder. Caramels biscuit jelly marshmallow sesame snaps
						lemon drops. Marzipan jelly-o apple pie gingerbread. Lemon drops chupa chups icing pudding
						liquorice soufflé. Liquorice pudding cookie lollipop donut donut pudding croissant jujubes.
						Gummies sugar plum dessert sweet soufflé. Marzipan gummi bears cake fruitcake halvah sugar plum
						carrot cake.
					</p>

					<p>
						Bonbon brownie sweet gingerbread soufflé. Tart cake ice cream macaroon carrot cake. Cupcake
						liquorice jelly beans biscuit sweet carrot cake jelly. Chocolate cake macaroon sweet roll. Candy
						canes gingerbread icing sesame snaps pie soufflé carrot cake muffin pudding. Chocolate cake
						gummi bears lemon drops chocolate. Donut dragée dragée cake topping. Marzipan danish pie jelly
						beans. Cake candy marshmallow. Cupcake donut sesame snaps chocolate bar halvah lollipop. Cotton
						candy tootsie roll wafer jelly ice cream sweet roll bonbon candy canes chupa chups. Tootsie roll
						sweet cupcake candy tart gummies.
					</p>
				</main>
			</div>

			<!-- Active Records -->
			<div class="screen screen-active-records">
				<transition name="fade">
					<p v-if="activeRecords.length == 0">Pridaj nový záznam ...</p>
				</transition>

				<!-- List of Active Records -->
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
			</div>

			<!-- Stored Records -->
			<div
				class="screen screen-stored-records"
				:class="{ visible: isStoredRecordsScreenVisible }"
			>
				<h2>Uložené záznamy</h2>

				<div class="buttons">
					<button @click="copyStoredRecords"><i class="fas fa-copy"></i>Kopírovať</button>
					<button @click="removeStoredRecords"><i class="fas fa-trash-alt"></i>Vymazať</button>
				</div>

				<stored-records-table :storedRecords="storedRecords"></stored-records-table>
			</div>
		</div>

		<!-- Control Panel -->
		<control-panel
			:isInfoScreenVisible="isInfoScreenVisible"
			:isStoredRecordsScreenVisible="isStoredRecordsScreenVisible"
			@toggleInfoScreen="toggleInfoScreen"
			@addNewActiveRecord="addNewActiveRecord"
			@toggleStoredRecordsScreen="toggleStoredRecordsScreen"
		></control-panel>
	</div>
</template>

<script>
import ActiveRecord from "./components/ActiveRecord";
import StoredRecordsTable from "./components/StoredRecordsTable";
import ControlPanel from "./components/ControlPanel";

export default {
	components: {
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
#timeless-helper-1 {
	position: relative;
	height: 100vh;
}

/** 
***	SCREENS 
*/
.screens {
	height: 100vh;
	overflow: hidden;
	position: relative;
}
.screen {
	height: 100%;
	position: relative;
	overflow: auto;
	padding: 0px 3em;
	padding-bottom: 100px;
	box-sizing: border-box;
	transition: transform 0.5s ease-in-out;
}

.screen-info,
.screen-stored-records {
	width: 100%;
	position: absolute;
	top: 0;
	z-index: 2;
}

/** 
***	SCREEN INFO 
*/
.screen-info {
	left: 0;
	z-index: 3;
	transform: translateX(-100%);
	background: rgb(248, 248, 248);
}
.screen-info.visible {
	transform: translateX(0%);
}

/** 
***	SCREEN ACTIVE RECORDS 
*/
.screen-active-records p {
	width: 100%;
	position: absolute;
	top: 2em;
	left: 0;
	text-align: center;
}

/** 
***	SCREEN STORED RECORDS 
*/
.screen-stored-records {
	background: #452087;
	right: 0;
	z-index: 2;
	transform: translateX(100%);
	color: white;
}
.screen-stored-records.visible {
	transform: translateX(0%);
}
.screen-stored-records h2 {
	font-size: 55px;
	font-weight: 900;
	text-align: center;
	padding-top: 64px;
	margin-bottom: 0.2em;
}

.screen-stored-records .buttons {
	max-width: 600px;
	text-align: center;
	padding-bottom: 1em;
	margin: 3em auto 2em auto;
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.screen-stored-records .buttons button {
	cursor: pointer;
	background-color: rgba(255, 255, 255, 0.1);
	font-size: 11px;
	font-weight: bold;
	font-weight: 700;
	line-height: 40px;
	text-transform: uppercase;
	letter-spacing: 0.06em;
	padding-right: 3em;
	margin: 0 0.2em;
	border: none;
	border-radius: 40px;
}

.screen-stored-records .buttons button .fas {
	width: 40px;
	height: 40px;
	background-color: white;
	color: #452087;
	font-size: 14px;
	line-height: 40px;
	margin-right: 1.5em;
	border-radius: 50%;
}

/**
***	FADE TRANSITION		
*/
.fade-enter-active,
.fade-leave-active {
	transition: all 0.5s ease-in-out;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
	transform: scale(0);
}

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

/**
***	MEDIA QUERIES		
*/
@media screen and (max-width: 700px) {
	.screen {
		padding: 0 2em;
	}
}

@media screen and (max-width: 600px) {
	.screen {
		padding: 0 1em;
	}
}
</style>
