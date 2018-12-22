const defaultState={
	bannerPic:[],
	navPic:[],
}

export default (state=defaultState,action)=>{
	switch(action.type){
		case "GET_BANNER_FULFILLED" :
			let bannerState =JSON.parse(JSON.stringify(state))
			bannerState.bannerPic = action.payload.data[43542].list
			return bannerState;
		case "GET_NAVLIST_FULFILLED" :
			let navState = JSON.parse(JSON.stringify(state))
			navState.navPic = action.payload.data[13730].list;
			return navState;
		
		
	}
	return state
}
