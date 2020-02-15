<template>
	<div id="app">
		<div class="view-container">
			<transition
				name="fade"
				mode="out-in"
			>
				<router-view></router-view>
			</transition>
		</div>
	</div>
</template>

<script>
import Vue from "vue";

export default {};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
	transition-duration: 0.2s;
	transition-property: opacity, transform;
	transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
	opacity: 0;
}

* {
	padding: 0;
	margin: 0;
	color: inherit;
}

*::-webkit-scrollbar-track {
	background-color: #f5f5f5;
	box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

*::-webkit-scrollbar {
	width: 6px;
	height: 6px;
	background-color: #f5f5f5;
}

*::-webkit-scrollbar-thumb {
	background-color: #9c9c9c;
	border-radius: 3px;
}

body {
	color: #262626;
	font-family: "Open Sans", sans-serif;
}

button {
	outline: none;
	font-family: inherit;
}

#app {
	width: 100%;
	height: 100vh;
	min-height: 400px;
	overflow: hidden;
	background-color: #4caf50;
	background: linear-gradient(180deg, #8bc34a, #4caf50);
}

.view-container {
	width: 100%;
	max-width: 800px;
	height: 100vh;
	min-height: 400px;
	overflow: hidden;
	background-color: rgb(248, 248, 248);
	margin: auto;
	box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.3);
}

.page {
	height: 100%;
	overflow: auto;
	padding: 0px 3em;
	box-sizing: border-box;
}

header {
	text-align: center;
	padding-top: 4em;
	margin-bottom: 3em;
}

header h1 {
	font-size: 55px;
	font-weight: 900;
}

header .sub-title {
	margin-top: 0.6em;
}
</style>
