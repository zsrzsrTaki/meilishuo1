import  React,{Component}  from 'react'

import {HashRouter as Router,Route,NavLink,Redirect,Switch}  from 'react-router-dom'

import  GoodsOne from './goodslist/goodsone'

import GoodsTwo from './goodslist/goodstwo'

import GoodsThree from './goodslist/goodsthree'

import Store from '../../../store'

import {Provider}  from 'react-redux'

class GoodsTitle extends Component{
    render(){
        return(
            <Provider  store={Store}>
                <Router>
                    <div>
                        <div  id="goodsTitle">
                            <ul>
                                <li>
                                    <NavLink  to="/home/one">流行</NavLink>
                                </li>
                                <li>
                                    <NavLink  to="/home/two">新款</NavLink>
                                </li>
                                <li>
                                    <NavLink  to="/home/three">精选</NavLink>
                                </li>
                            </ul>
                        </div>
                        <Switch>
                            <Route  path="/home/one"  component={GoodsOne}></Route>
                            <Route  path="/home/two"  component={GoodsTwo}></Route>
                            <Route  path="/home/three"  component={GoodsThree}></Route>
                            <Redirect  path="/home" to="/home/one" />
                        </Switch>
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default GoodsTitle;