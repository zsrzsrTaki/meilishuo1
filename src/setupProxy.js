const proxy = require("http-proxy-middleware")

module.exports=(app)=>{
	app.use("/jsonp",proxy({
		target:"https://mce.mogucdn.com",
		changeOrigin:true
	})),
	app.use("/venus",proxy({
		target:"http://simba-api.meilishuo.com",
		changeOrigin:true
	})),
	//http://m.meilishuo.com/detail/mls/v1/h5?iid=1m8olks&_ajax=1&cparam=
	app.use("/detail",proxy({
		target : "http://m.meilishuo.com",
		changeOrigin : true
	}))
	
}
