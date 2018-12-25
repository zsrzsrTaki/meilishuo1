<<<<<<< HEAD

=======
>>>>>>> wxh
import React,{Component} from "react"
import {HashRouter as Router, Route,Link,Switch} from "react-router-dom"
import "./style/index.css"
import axios from "axios"
import Loginsuccess from './loginsucccess'
class Login extends Component{
	constructor(props){
		super(props);
		this.state={
			username:'',
			password:'',
			user:[]
		}
		
	}
	render(){
		return(
				<Router>
			<div className="login">		
							
				<div className="loginTitle">
						<Link to="/home"><i className="iconfont">&lt;</i></Link>
							<p>登录</p>
						<span><Link to="/home">忘记密码</Link></span>
				</div>
				<div className="loginOut">
						<div className="loginInput">
							<p>美丽说账号</p>
							<input type='text' placeholder="输入用户名/邮箱/手机号" onChange={this.handleChangeUser.bind(this)}/>
						</div>
						
						<div className="passwordInput">
							<p>密码</p>
							<input type='password' placeholder="输入密码" onChange={this.handleChangePass.bind(this)}/>
						</div>
						
						<div className="loginButton">
							<button id="loginButton" onClick={this.handleClick.bind(this)}>登陆</button>
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
	componentDidUpdate(){
		axios.get("http://localhost:8080/user").then((res)=>{
					this.state.user=res.data
					//console.log(res)
					//console.log(this.state.user)
					
				})
	}
	handleChangeUser(e){
		let usernameVal =e.target.value
		this.setState({
			username:usernameVal
		})
	}
	handleChangePass(e){
		let passwordVal = e.target.value
		this.setState({
			password:passwordVal
		})	
	}
	handleClick(){
		
		var arr = this.state.user.filter((item)=>{
						console.log(this.state.username)
						return item.username === this.state.username
					})	
		console.log(arr)
		if(arr.length>0){
							if(this.state.password===arr[0].password){
								alert("登陆成功")
								this.props.history.push("/loginsucccess") 
							}else{
								alert("密码错误")
							}
						}else{
							alert("用户不存在")
						}
	}

}

export default Login
