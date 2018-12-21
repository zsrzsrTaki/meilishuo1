import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxPromiseMiddleware from "redux-promise-middleware";
import bannerPic from "./reducer/bannerPic"
import home from './reducer/home'
import classify from "./reducer/classify"
const reducers = combineReducers({
 bannerPic,
 home,
 classify
})

const store = createStore(reducers,applyMiddleware(reduxPromiseMiddleware()));


export default store;