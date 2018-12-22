const defaultState = {
    weekPopularList: [],
    advertisementList: [],
    goodsListOne: [],
    page: 2
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case "HOME_POPULAR_DATA_FULFILLED":
            let weekPopularState = JSON.parse(JSON.stringify(state));
            weekPopularState.weekPopularList = action.payload.data["13730"].list;
            return weekPopularState;
        case "GET_BANNER_FULFILLED":
            let advertisementState = JSON.parse(JSON.stringify(state));
            advertisementState.advertisementList = action.payload.data["43542"].list[1];
            return advertisementState
        case "GET_GOODS_DATA_FULFILLED":
            let goodsState = JSON.parse(JSON.stringify(state));
            goodsState.goodsListOne = action.payload.data.list;
            return goodsState;
        case 'GET_GOODS_TWO_DATA_FULFILLED':
            let goodsState2 = JSON.parse(JSON.stringify(state));
            goodsState2.goodsListOne = action.payload.data.list;
            return goodsState2;
        case 'GET_GOODS_Three_DATA_FULFILLED':
            let goodsState3 = JSON.parse(JSON.stringify(state));
            goodsState3.goodsListOne = action.payload.data.list;
            return goodsState3;
        case "GET_GOODSMORE_DATA_FULFILLED":
            let moreState = JSON.parse(JSON.stringify(state));
            moreState.goodsListOne = [...moreState.goodsListOne, ...action.payload.data.list]
            moreState.page += 1;
            return moreState
        default:
    }
    return state;
}