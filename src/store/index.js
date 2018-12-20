import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxPromiseMiddleware from "redux-promise-middleware";
import bannerPic from "./reducer/bannerPic"
import home from './reducer/home'
const reducers = combineReducers({
 bannerPic,
 home
})

const store = createStore(reducers,applyMiddleware(reduxPromiseMiddleware()));


export default store;