import Vue from "vue";
import Home from "./pages/Home";
import TimelessHelper1 from "./pages/TimelessHelper1/TimelessHelper1";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "",
			component: Home
		},
		{
			path: "/nadcasovy-pomocnik-1",
			component: TimelessHelper1
		}
	],
	scrollBehavior(to, from, savedPosition) {
		return { x: 0, y: 0 };
	}
});
