import React,{Component} from "react"
import {Link} from "react-router-dom"
import "./style/index.css"
import axios from "axios"
class Login extends Component{
	constructor(props){
		super(props);
		this.state={
			username:"",
			password:""
		}
	}
	render(){
		return(
			<div className="login">
			
				<div className="loginTitle">
						<Link to="/home"><i className="iconfont">&lt;</i></Link>
							<p>注册</p>
						<span><Link to="/my">已有账号</Link></span>
				</div>
				<div className="loginOut">
						<div className="loginInput">
							<p>请输入您的账号</p>
							<input type='text' placeholder="输入用户名/邮箱/手机号"  onChange={this.handleChangeUsername.bind(this)}/>
						</div>
						
						<div className="passwordInput">
							<p>密码</p>
							<input type='password' placeholder="输入密码" onChange={this.handleChangePwd.bind(this)}/>
						</div>
						
						<div className="loginButton">
							<button id="loginButton" onClick={this.handleClick.bind(this)}>注册</button>
						</div>
						
						 
				</div>
			</div>
		)
	}
	handleChangeUsername(e){
		let usernameVal =e.target.value
		this.setState({
			username:usernameVal
		})
	}
	handleChangePwd(e){
		let passwordVal = e.target.value
		this.setState({
			password:passwordVal
		})
		
	}
	handleClick(){
		axios.post("http://localhost:8080/user",{
			username:this.state.username,
			password:this.state.password
		},{
			headers:{
						'content-type':"application/json"
					}
		}).then((res)=>{
				console.log(res.data)				
					alert("注册成功")
					this.props.history.push("/my") 
		})
		
		
	}
	
}


export default Login