import React, { Component } from 'react'

import { HashRouter as Router, Route, NavLink, Redirect, Switch } from 'react-router-dom'

import GoodsOne from './goodslist/goodsone'

import GoodsTwo from './goodslist/goodstwo'

import GoodsThree from './goodslist/goodsthree'

import Store from '../../../store'

import { Provider } from 'react-redux'

class GoodsFalse extends Component {
    render() {
        return (
            <Provider store={Store}>
                <Router>
                    <div>
                        <div id="goodsTitleFalse">
                            <ul>
                                <li>
                                    <a>流行</a>
                                </li>
                                <li>
                                    <a>新款</a>
                                </li>
                                <li>
                                    <a>精选</a>
                                </li>
                            </ul>
                        </div>
                        {/* <Switch>
                            <Route  path="/home/one"  component={GoodsOne}></Route>
                            <Route  path="/home/two"  component={GoodsTwo}></Route>
                            <Route  path="/home/three"  component={GoodsThree}></Route>
                            <Redirect  path="/home" to="/home/one" />
                        </Switch> */}
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default GoodsFalse;