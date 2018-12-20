import React,{Component} from "react"
import {connect} from  "react-redux"
import {get_navlist} from "../../../action/actioncreator"
class Navlist extends Component{
	render(){
		let {navPic} = this.props
		return(
			<div id="navlist">
					{
						navPic.map((item,index)=>{
						return <li key={index}>
							<img src={item.image}/>
							<span>{item.title}</span>
						</li>
					})
						
					}
		
		    </div>
		)
	}
	


	
}

const mapStateToProps=(state)=>({
	navPic:state.bannerPic.navPic
})
const mapDispatchToProps=(dispatch)=>({
	
})

export default connect(mapStateToProps,mapDispatchToProps)(Navlist)