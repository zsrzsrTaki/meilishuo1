import  React,{Component} from "react"
import 	Search from "../home/children/search"
import "./style/index.css"
import Classifylist from "./children/classifylist"
import {connect} from  "react-redux"
import {get_ClassifyData} from "../../action/actioncreator"
class Classify extends Component{
	render(){
		return(
			<div className="classify">
					<Search/>
					<p>本周流行</p>
					<Classifylist/>
			</div>
		)
	}
	componentDidMount(){
		this.props.getClassifydata()
		
	}
}

const mapStateToProps=(state)=>({
	classifyPic:state.classify.classifyPic
})

const mapDispatchToProps=(dispatch)=>({
	getClassifydata(){
		dispatch(get_ClassifyData())
	}
})



export default connect(mapStateToProps,mapDispatchToProps)(Classify)
