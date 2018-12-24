import React,{Component} from "react"
import {connect} from  "react-redux"
import {get_ClassifyData} from "../../../action/actioncreator"
class Classifylist extends  Component{
	render(){
		let {classifyPic} = this.props
		return(
			<div className="classifylist">
				<ul className="product">
					{
						classifyPic.map((item,index)=>{
							return <li key={index}>
								<img src={item.image}/>
								<span>{item.title}</span>
							</li>
						})
					}
				</ul>
			</div>
		)
	}
		
}

const mapStateToProps=(state)=>({
	classifyPic:state.classify.classifyPic	
})

export default connect(mapStateToProps)(Classifylist)
