import React, { Component, Fragment } from 'react'

import { BrowserRouter, HashRouter as Router, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom'

import Home from './components/home/home'

import Classify from './components/classify/classify'

import Shopcar from './components/shopcar/shopcar'

import My from './components/my/login'

import  Register from "./components/my/register"

import LoginSuccess from "./components/my/loginsucccess"


import Detail from './components/home/children/detail'


import Store from './store'

import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Router>
          <div>
            <Switch>
              <Route path="/home" component={Home}></Route>
              <Route path="/classify" component={Classify}></Route>
              <Route path="/shopcar" component={Shopcar}></Route>
              <Route path="/my" component={My}></Route>

              <Route path="/register"  component={Register}></Route>
              <Route path="/detail/:id"  component={Detail}></Route>
              <Route path="/loginsuccess"  component={LoginSuccess}></Route>

              <Redirect path="/" to="/home" />
            </Switch>
            <div id="footer">
              <ul>
                <li>
                  <NavLink to="/home">
                    <i className="iconfont">&#xe6a5;</i>
                    <span>首页</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/classify">
                    <i className="iconfont">&#xe616;</i>
                    <span>分类</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/shopcar">
                    <i className="iconfont">&#xe60d;</i>
                    <span>购物车</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/my">
                    <i className="iconfont">&#xe64a;</i>
                    <span>我</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App