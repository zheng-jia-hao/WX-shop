import Vue from "vue";
import Vuex from "vuex"
import indexData from "./modules/indexData/indexData.js"

Vue.use(Vuex);

const Store = new Vuex.Store({
	modules:{
		indexData,
	}
});

export default Store;