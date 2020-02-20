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
				:class="{ visible: isInfoScreenVisible }"
			>
				<slot name="active-records"></slot>
			</div>

			<!-- Stored Records -->
			<div
				class="screen screen-stored-records"
				:class="{ visible: isStoredRecordsScreenVisible }"
			>
				<slot name="strored-records"></slot>
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
		isStoredRecordsScreenVisible: Boolean
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
</style>