<template>
	<div class="control-panel">
		<!-- Toggle Info Screen Button -->
		<button
			class="button toggle-button toggle-info-button"
			@click="toggleInfoScreen"
			:class="{ active: isInfoScreenVisible }"
		>
			<i class="fas fa-question"></i>
		</button>

		<!-- Add New Active Record Button -->
		<button
			class="button save-button"
			@click="addNewActiveRecord"
		><i class="fas fa-plus"></i></button>

		<!-- Toggle Stored Records Screen Button -->
		<button
			class="button toggle-button toggle-stored-records-button"
			@click="toggleStoredRecordsScreen"
			:class="{ active: isStoredRecordsScreenVisible }"
		>
			<i class="fas fa-database"></i>
		</button>
	</div>
</template>

<script>
export default {
	props: {
		isInfoScreenVisible: Boolean,
		isStoredRecordsScreenVisible: Boolean
	},
	methods: {
		toggleInfoScreen() {
			this.$emit("toggleInfoScreen");
		},
		addNewActiveRecord() {
			this.$emit("addNewActiveRecord");
		},
		toggleStoredRecordsScreen() {
			this.$emit("toggleStoredRecordsScreen");
		}
	}
};
</script>

<style scoped>
/**
*** CONTROL PANEL
*/
.control-panel {
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
}

/**
*** CONTROL PANEL - BUTTON
*/
.control-panel .button {
	cursor: pointer;
	width: 50px;
	height: 50px;
	background: #1e82d2;
	color: white;
	font-size: 16px;
	line-height: 50px;
	margin: 0 0.2em;
	border: none;
	border-radius: 50%;
}

/**
***	TOGGLE BUTTON
*/
.toggle-button {
	position: relative;
}
.toggle-button::before {
	content: "";
	opacity: 0;
	width: 36px;
	height: 36px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%) scale(0);
	border: 2px solid white;
	transition: all 0.24s linear;
}
.toggle-button.active::before {
	opacity: 1;
	transform: translate(-50%, -50%) scale(1);
}

/**
***	TOGGLE INFO SCREEN BUTTON
*/
.control-panel .toggle-info-button {
	background: #1e82d2;
	background: linear-gradient(180deg, #03a9f4, #1e82d2);
}

/**
***	SAVE BUTTON 
*/
.control-panel .save-button {
	background: #4caf50;
	background: linear-gradient(180deg, #8bc34a, #4caf50);
	transition: all 0.05s linear;
}
.control-panel .save-button:active {
	transform: scale(0.95);
}

/**
***	TOGGLE INFO SCREEN BUTTON
*/
.control-panel .toggle-stored-records-button {
	background: #452087;
	background: linear-gradient(180deg, #673ab7, #452087);
}

/**
***	MEDIA QUERIES
*/
@media screen and (max-width: 600px) {
	.control-panel {
		height: 60px;
	}
	.control-panel .button {
		width: 40px;
		height: 40px;
		font-size: 12px;
		line-height: 40px;
		margin: 0 0.4em;
	}
	.toggle-button::before {
		width: 28px;
		height: 28px;
		border-width: 1px;
	}
}
</style>
