import config from "./serverConfig.js"
export default (reqUrl,data={},method="get") => {
	return new Promise((resolve,reject)=>{
		uni.request({
			url: reqUrl,  //h5页面直接配置代理获取即可
			// url: config.mhost + reqUrl,
			data,
			method,
			success(res) {
				resolve(res.data)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}
