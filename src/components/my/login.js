import React,{Component} from "react"
import {HashRouter as Router, Route,Link,Switch} from "react-router-dom"
import "./style/index.css"

class Login extends Component{
	render(){
		return(
				<Router>
			<div className="login">		
								<Switch>
								
								</Switch>
				<div className="loginTitle">
						<Link to="/home"><i className="iconfont">xxx</i></Link>
							<p>登录</p>
						<span><Link to="/home">忘记密码</Link></span>
				</div>
				<div className="loginOut">
						<div className="loginInput">
							<p>美丽说账号</p>
							<input type='text' placeholder="输入用户名/邮箱/手机号"/>
						</div>
						
						<div className="passwordInput">
							<p>密码</p>
							<input type='text' placeholder="输入密码"/>
						</div>
						
						<div className="loginButton">
							<a href="#/home" id="loginButton">登录</a>
						</div>
						
						<div className="loginBottom">
							<a href="#/home" id="freelogin">免密登录</a>
							<Link to="/register" id="registerCount">注册账号</Link>
						</div>
				</div>
				
			</div>
			</Router>
		)
	}
}

export default Login
