import React,{Component} from "react"
import {Link} from "react-router-dom"
import "./style/index.css"

class Login extends Component{
	render(){
		return(
			<div className="login">
			
				<div className="loginTitle">
						<Link to="/home"><i className="iconfont">xxx</i></Link>
							<p>注册</p>
						<span><Link to="/my">已有账号</Link></span>
				</div>
				<div className="loginOut">
						<div className="loginInput">
							<p>请输入您的账号</p>
							<input type='text' placeholder="输入用户名/邮箱/手机号"/>
						</div>
						
						<div className="passwordInput">
							<p>密码</p>
							<input type='text' placeholder="输入密码"/>
						</div>
						
						<div className="loginButton">
							<a href="#/my" id="loginButton">注册</a>
						</div>
						
						
				</div>
			</div>
		)
	}
}

export default Login