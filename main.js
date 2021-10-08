import App from './App'
import request from "./utils/index.js"
import store from "./store/index.js"
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
Vue.prototype.$http = request;
// 声明当前的app代表整个应用
App.mpType = 'app'
const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.$http = request;
  return {
    app
  }
}
// #endif