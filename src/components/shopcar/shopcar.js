import React,{Component} from "react"
import {Link} from "react-router-dom"
import "./style/index.css"
class Shopcar extends Component{
	render(){
		return(
			<div className="shopcar">
				<div className="shopcarTitle">
				<Link to="/home"><i className="iconfont">&lt;</i></Link>
					<p>购物车</p>
					<span><Link to="/home">首页</Link></span>
				</div>
				<div className="prompt">
					<p>您的购物车还空着呢</p>
					<p>美物这么多快去选购吧</p>
					<a href="#/home" id="go">去看看</a>
				</div>
				
			</div>
		)
	}
}


export default Shopcar
