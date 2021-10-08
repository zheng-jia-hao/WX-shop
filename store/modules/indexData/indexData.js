import request from "../../../utils/index.js"
import {SAVE_INDEXDATA} from "./mutations-type.js"
export default {
	
	state:{
		indexData:{}
	},
	mutations:{
		[SAVE_INDEXDATA](state,indexData) {
			state.indexData = indexData
		}
	},
	actions:{
		async getIndexDataAction({commit}) {
			let res = await request("/getIndexData");
			commit(SAVE_INDEXDATA,res);
		}
	},
	getters:{
		
	}
	
}