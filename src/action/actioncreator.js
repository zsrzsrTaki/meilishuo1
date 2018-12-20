import {fetch} from "whatwg-fetch";
import fetchJsonp from "fetch-jsonp" 
export const get_banner=()=>({
	type:"GET_BANNER",
	payload:new Promise(resolve=>{
		//"/jsonp/multiget/3?pids=5868%2C6348%2C43542%2C13730&callback=jsonp5868_6348_43542_13730"
		fetchJsonp("/jsonp/multiget/3?pids=5868%2C6348%2C43542%2C13730")
		.then(res=>res.json())
		.then((data)=>{
			console.log(data)
			resolve(data)
		})
	})
})

export const get_navlist=()=>({
	type:"GET_NAVLIST",
	payload:new Promise(resolve=>{
		//"/jsonp/multiget/3?pids=5868%2C6348%2C43542%2C13730&callback=jsonp5868_6348_43542_13730"
		fetchJsonp("/jsonp/multiget/3?pids=5868%2C6348%2C43542%2C13730")
		.then(res=>res.json())
		.then((data)=>{
			console.log(data)
			resolve(data)
		})
	})
})
