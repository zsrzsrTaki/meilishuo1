import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxPromiseMiddleware from "redux-promise-middleware";
import bannerPic from "./reducer/bannerPic"

const reducers = combineReducers({
 bannerPic
})

const store = createStore(reducers,applyMiddleware(reduxPromiseMiddleware()));


export default store;