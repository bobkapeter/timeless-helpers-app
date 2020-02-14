<template>
	<div class="control-panel">
		<div class="control-panel-container">
			<!-- Toggle Info Screen Button -->
			<button
				@click="toggleInfoScreen"
				:class="{ active: isInfoScreenVisible }"
			>
				<i class="fas fa-question"></i>
			</button>

			<!-- Add New Active Record Button -->
			<button
				class="button-save"
				@click="addNewActiveRecord"
			><i class="fas fa-plus"></i></button>

			<!-- Toggle Stored Records Screen Button -->
			<button
				@click="toggleStoredRecordsScreen"
				:class="{ active: isStoredRecordsScreenVisible }"
			><i class="fas fa-database"></i></button>
		</div>
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
.control-panel {
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

.control-panel-container {
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.control-panel button {
	cursor: pointer;
	width: 50px;
	height: 50px;
	background: #1e82d2;
	color: white;
	font-size: 16px;
	font-weight: bold;
	line-height: 50px;
	margin: 0 0.2em;
	border: none;
	border-radius: 50%;
	transition: background 0.24s linear;
}
.control-panel button.active {
	background: #452087;
}

.control-panel .button-save {
	background: #8bc34a;
	background: linear-gradient(180deg, #8bc34a, #4caf50);
}
</style>
