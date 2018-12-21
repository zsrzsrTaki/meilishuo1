import {fetch} from "whatwg-fetch";
import { resolve } from "url";
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

export  const getHomePopularData = (dispatch) =>{
    dispatch({
        type : "HOME_POPULAR_DATA",
        payload:new Promise(resolve=>{
            let url = "https://mcebackup.mogucdn.com/jsonp/get/3%3Fpid=13730&13730backup";
            fetchJsonp(url)
            .then(res=>res.json())
            .then((data)=>{
                resolve(data)
            })
        })
    })
}

export const get_ClassifyData = ()=>({
	type:"GET_CLASSIFYDATA",
	payload:new Promise(resolve=>{
		fetchJsonp("http://simba-api.meilishuo.com/venus/mce/v1/urlChange/pc?pid=20783&channel=wap&page=1&pageSize=30&_=1545373336997")
		.then(res=>res.json())
		.then((data)=>{
			console.log(data)
			resolve(data)
		})
	})
	
})
