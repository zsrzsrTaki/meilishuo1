const proxy = require("http-proxy-middleware")

module.exports=(app)=>{
	app.use("/jsonp",proxy({
		target:"https://mce.mogucdn.com",
		changeOrigin:true
	}))
}
