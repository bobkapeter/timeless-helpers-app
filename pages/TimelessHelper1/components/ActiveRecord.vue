<template>
	<div class="active-record">
		<!-- ID -->
		<div class="id">
			<strong>{{ id }}.</strong>
		</div>

		<!-- Data -->
		<div class="data">
			<!-- Group Size -->
			<div class="group">
				<div>
					<button @click="increaseGroupSize"><i class="fas fa-plus"></i></button>
					<button @click="decreaseGroupSize"><i class="fas fa-minus"></i></button>
				</div>
				<span>{{ groupSize }}</span>
			</div>

			<!-- Time of arrival -->
			<div class="time">
				<span>{{ timeOfArrival | formatTime }}</span>
			</div>
		</div>

		<!-- Buttons - Save & Remove -->
		<div class="buttons">
			<button @click="save"><i class="fas fa-check"></i></button>
			<button @click="remove"><i class="fas fa-times"></i></button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		id: Number,
		index: Number
	},
	data() {
		return {
			groupSize: 1,
			timeOfArrival: null
		};
	},
	mounted() {
		const date = new Date();
		this.timeOfArrival = date.getTime();
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
	},
	methods: {
		increaseGroupSize() {
			this.groupSize++;
		},
		decreaseGroupSize() {
			if (this.groupSize > 1) {
				this.groupSize--;
			}
		},
		save() {
			this.$emit("save", {
				index: this.index,
				groupSize: this.groupSize,
				timeOfArrival: this.timeOfArrival
			});
		},
		remove() {
			this.$emit("remove", this.index);
		}
	}
};
</script>

<style scoped>
/** 
***	ACTIVE RECORD 
*/
.active-record {
	width: 100%;
	min-width: 300px;
	height: 70px;
	display: flex;
	background-color: rgb(248, 248, 248);
	align-items: center;
	padding: 0.6em 0;
	border-bottom: 1px solid rgba(204, 204, 204, 0.3);
	transition: all 0.5s ease-in-out;
}

/** 
***	ACTIVE RECORD / ID 
*/
.active-record .id {
	width: 100px;
	text-align: center;
	color: rgb(185, 185, 185);
	border-right: 1px dotted #ccc;
	margin-right: 2em;
}
.active-record .id strong {
	display: block;
	color: #262626;
	font-size: 30px;
	font-weight: 900;
	line-height: 36px;
}

/** 
***	ACTIVE RECORD / DATA 
*/
.active-record .data {
	display: flex;
	height: 70px;
	align-items: center;
	justify-content: space-around;
	flex: 1;
}

.active-record .data .group {
	display: flex;
	width: 150px;
	height: 70px;
	align-items: center;
}
.active-record .data .group div {
	width: 66px;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	margin-right: 10px;
}
.active-record .data .group button {
	cursor: pointer;
	width: 30px;
	height: 30px;
	background: linear-gradient(180deg, #03a9f4, #1e82d2);
	color: white;
	font-size: 10px;
	font-weight: bold;
	line-height: 30px;
	border: none;
	border-radius: 4px;
	transition: all 0.05s linear;
}
.active-record .data .group button:active {
	transform: scale(0.95);
}

.active-record .data .group span {
	display: block;
	width: 70px;
	height: 100%;
	font-size: 30px;
	line-height: 70px;
}

.active-record .data .time span {
	width: 120px;
	height: 100%;
	display: block;
	font-size: 30px;
	font-weight: normal;
	line-height: 70px;
}

/** 
***	ACTIVE RECORD / BUTTONS 
*/
.active-record .buttons {
	width: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.active-record .buttons button {
	cursor: pointer;
	display: inline-block;
	width: 30px;
	height: 30px;
	line-height: 30px;
	font-size: 10px;
	color: white;
	font-weight: bold;
	border: none;
	border-radius: 10%;
	transition: all 0.05s linear;
}
.active-record .buttons button:first-of-type {
	width: 60px;
	height: 60px;
	line-height: 60px;
	font-size: 20px;
	background: #8bc34a;
	background: linear-gradient(180deg, #8bc34a, #4caf50);
	margin-right: 10px;
	border-radius: 50%;
}
.active-record .buttons button:last-of-type {
	background: #673ab7;
	background: linear-gradient(180deg, #673ab7, #452087);
}
.active-record .buttons button:active {
	transform: scale(0.95);
}

/** 
***	MEDIA QUERIES 
*/
@media screen and (max-width: 600px) {
	.active-record .id {
		width: 60px;
	}
	.active-record .data .group {
		width: auto;
	}
	.active-record .data .group div {
		width: 25px;
		flex-direction: column;
	}
	.active-record .data .group button {
		width: 25px;
		height: 25px;
		line-height: 25px;
		margin: 0.2em 0;
	}
}

@media screen and (max-width: 500px) {
	.active-record {
		height: 60px;
	}
	.active-record .id {
		border: none;
		margin-right: 1em;
	}
	.active-record .id strong,
	.active-record .data .group span,
	.active-record .data .time span {
		font-size: 20px;
	}

	.active-record .data .group span {
		width: 40px;
	}

	.active-record .data .time span {
		width: 90px;
	}

	.active-record .buttons button {
		width: 25px;
		height: 25px;
		line-height: 25px;
	}
	.active-record .buttons button:first-of-type {
		width: 50px;
		height: 50px;
		font-size: 16px;
		line-height: 50px;
	}
}
</style>
