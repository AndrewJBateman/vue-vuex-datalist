import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const url = "https://uselessfacts.jsph.pl/random.json?language=en";
const headers = {
	Accept: "application/json",
};

export default new Vuex.Store({
	state: {
		currentData: "Random facts display",
		allDatas: [],
	},
	mutations: {
		setCurrentData(state, payload) {
			state.currentData = payload;
			state.allDatas.push(payload);
		},
	},
	actions: {
		async setCurrentData(state) {
			const data = await fetch(url, { headers });
			const d = await data.json();
			console.log("json data: ", d.items);
			state.commit("setCurrentData", d.text);
		},
	},
	modules: {},
	getters: {
		getCurrentData: (state) => state.currentData,
		getAllDatas: (state) => state.allDatas,
	},
});
