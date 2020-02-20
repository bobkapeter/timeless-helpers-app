<template>
	<div class="helper-container">
		<!-- Screens -->
		<div class="screens">
			<!-- Informations -->
			<div
				class="screen screen-info"
				:class="{ visible: isInfoScreenVisible }"
			>
				<slot name="info"></slot>
			</div>

			<!-- Active Records -->
			<div
				class="screen screen-active-records"
				:class="{ visible: isActiveRecordsScreenVisible }"
			>
				<transition name="scale-out">
					<p v-if="isActiveRecordsEmpty">Pridaj nový záznam ...</p>
				</transition>

				<slot name="active-records"></slot>
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

				<slot name="stored-records"></slot>
			</div>
		</div>

		<!-- Control Panel -->
		<div class="control-panel-container">
			<slot name="control-panel"></slot>
		</div>
	</div>
</template>


<script>
export default {
	props: {
		isInfoScreenVisible: Boolean,
		isActiveRecordsScreenVisible: Boolean,
		isStoredRecordsScreenVisible: Boolean,
		isActiveRecordsEmpty: Boolean
	},
	methods: {
		copyStoredRecords() {
			this.$emit("copyStoredRecords");
		},
		removeStoredRecords() {
			this.$emit("removeStoredRecords");
		}
	}
};
</script>

<style scoped>
/** 
***	GENERAL 
*/
.helper-container {
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
.screen-active-records {
	opacity: 0;
	transition: opacity 0.5s ease-in-out;
}
.screen-active-records.visible {
	opacity: 1;
}

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
	padding-top: 1.2em;
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
*** CONTROL PANEL
*/
.control-panel-container {
	width: 100%;
	max-width: 800px;
	background-color: white;
	position: fixed;
	bottom: 0;
	left: 50%;
	z-index: 999999;
	transform: translateX(-50%);
	text-align: center;
	border-top: 2px solid rgba(204, 204, 204, 0.5);
}

/**
*** TRANSITION: SCALE OUT		
*/
.scale-out-enter-active,
.scale-out-leave-active {
	transition: all 0.5s ease-in-out;
}
.scale-out-enter,
.scale-out-leave-to {
	opacity: 0;
	transform: scale(0);
}

/**
***	MEDIA QUERIES		
*/
@media screen and (max-width: 800px) {
	.screen-stored-records h2 {
		font-size: 7vw;
	}
}
@media screen and (max-width: 700px) {
	.screen {
		padding-right: 2em;
		padding-left: 2em;
	}
	.screen-stored-records .buttons {
		margin-top: 2em;
	}
}

@media screen and (max-width: 600px) {
	.screen {
		padding-right: 1em;
		padding-left: 1em;
	}
	.screen-active-records {
		padding-right: 0.5em;
		padding-left: 0.5em;
	}
}

@media screen and (max-width: 450px) {
	.screen-stored-records .buttons button {
		margin: 0.6em auto;
	}
}

@media screen and (max-width: 400px) {
	.screen-stored-records h2 {
		font-size: 12vw;
	}
}
</style>