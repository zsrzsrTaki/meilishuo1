import fetchJsonp from "fetch-jsonp"

import {fetch} from 'whatwg-fetch'

export const get_banner = () => ({
	type: "GET_BANNER",
	payload: new Promise(resolve => {
		//"/jsonp/multiget/3?pids=5868%2C6348%2C43542%2C13730&callback=jsonp5868_6348_43542_13730"
		fetchJsonp("/jsonp/multiget/3?pids=5868%2C6348%2C43542%2C13730")
			.then(res => res.json())
			.then((data) => {
				resolve(data)
			})
	})
})

export const get_navlist = () => ({
	type: "GET_NAVLIST",
	payload: new Promise(resolve => {
		//"/jsonp/multiget/3?pids=5868%2C6348%2C43542%2C13730&callback=jsonp5868_6348_43542_13730"
		fetchJsonp("/jsonp/multiget/3?pids=5868%2C6348%2C43542%2C13730")
			.then(res => res.json())
			.then((data) => {
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
export const get_Home_Popular_Data = (dispatch) => {
	dispatch({
		type: "HOME_POPULAR_DATA",
		payload: new Promise(resolve => {
			let url = "https://mce.mogucdn.com/jsonp/multiget/3?pids=5868%2C6348%2C43542%2C13730&5868_6348_43542_13730";
			fetchJsonp(url)
				.then(res => res.json())
				.then((data) => {
					resolve(data)
				})
		})
	})
}

//
//http://list.meilishuo.com/search?frame=2&page=2&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=d3eb3f7a-79a1-4189-ac7d-5c73fc405a77&trace=0&cpc_offset=0&_=1545441774663&5
//http://list.meilishuo.com/search?frame=3&page=3&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=d3eb3f7a-79a1-4189-ac7d-5c73fc405a77&trace=0&cpc_offset=0&_=1545441782549&6
export const get_Goods_action = (dispatch) => {
	dispatch({
		type: "GET_GOODS_DATA",
		payload: new Promise(resolve => {
			let url = "http://list.meilishuo.com/search?frame=1&page=1&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=d3eb3f7a-79a1-4189-ac7d-5c73fc405a77&_=1545376530346&2";
			fetchJsonp(url)
				.then(res => res.json())
				.then((data) => {
					resolve(data)
				})
		})
	})
}


export const get_GoodsMore_action = (dispatch, page) => {
	dispatch({
		type: "GET_GOODSMORE_DATA",
		payload: new Promise(resolve => {
			if (page != "undefined") {
				let url = "http://list.meilishuo.com/search?frame=" + page +"&page=" + page + "&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=d3eb3f7a-79a1-4189-ac7d-5c73fc405a77&trace=0&cpc_offset=0&_=1545441774663&" + (page+3);
				fetchJsonp(url)
					.then(res => res.json())
					.then((data) => {
						resolve(data)
					})
			}
		})
	})
}

// 新款

export const get_Goods_action2 = (dispatch) => {
	dispatch({
		type: "GET_GOODS_Three_DATA",
		payload: new Promise(resolve => {
			let url = "http://list.meilishuo.com/search?frame=5&page=5&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=d3eb3f7a-79a1-4189-ac7d-5c73fc405a77&_=1545376530346&2";
			fetchJsonp(url)
				.then(res => res.json())
				.then((data) => {
					resolve(data)
				})
		})
	})
}

//流行
export const get_Goods_action3 = (dispatch) => {
	dispatch({
		type: "GET_GOODS_TWO_DATA",
		payload: new Promise(resolve => {
			let url = "http://list.meilishuo.com/search?frame=12&page=12&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=d3eb3f7a-79a1-4189-ac7d-5c73fc405a77&_=1545376530346&2";
			fetchJsonp(url)
				.then(res => res.json())
				.then((data) => {
					resolve(data)
				})
		})
	})

}
//详情页
export const get_Detail_action = (dispatch,id) => {
	dispatch({
		type: "GET_DETAIL_DATA",
		payload: new Promise(resolve => {
			//http://m.meilishuo.com/detail/mls/v1/h5?iid=1m8olks&_ajax=1&cparam=
			//http://m.meilishuo.com/detail/mls/v1/h5?iid=1m9oam0&_ajax=1&cparam=
			let url = "/detail/mls/v1/h5?iid=" + id + "&_ajax=1&cparam=";
			fetch(url)
			.then(res=>res.json())
			.then((data)=>{
				resolve(data)
			})
		})
	})
}
