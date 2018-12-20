const defaultState = {
    weekPopularList : []
}

export default (state = defaultState,action) => {
    //console.log(action.type)
    switch(action.type){
        case "HOME_POPULAR_DATA_FULFILLED" :
            let weekPopularState = JSON.parse(JSON.stringify(state));
            weekPopularState.weekPopularList = action.payload.data["13730"].list;
            return weekPopularState;
        default : 
    }
    return state;
}