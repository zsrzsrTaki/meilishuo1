const defaultState={
	classifyPic:[]
}


export default(state = defaultState,action)=>{
	switch(action.type){
		case "GET_CLASSIFYDATA_FULFILLED" :
		console.log(state)
		let classifyState = JSON.parse(JSON.stringify(state))
		classifyState.classifyPic=action.payload.value
		return classifyState	
	}
	return state
}
