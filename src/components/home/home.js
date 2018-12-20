import React,{Component,Fragment} from "react";
import Search from "./children/search";
import "./style/index.css";
import Banner from './children/banner'
import Swiper from 'swiper/dist/js/swiper.js'
import "swiper/dist/css/swiper.css"
import {connect} from  "react-redux"
import {get_banner,get_navlist} from "../../action/actioncreator"
import Navlist from "./children/navlist" 

class Home extends Component{
	render(){		
		return( 
			<div id="home">
				<Search/>
				<Banner/>
				<Navlist/>
			</div>
			
		)
	}
	 componentDidMount(){
		this.props.getBannerPic()
		this.props.getNavlist()
	}
	
}

const mapStateToProps=(state)=>({
	bannerPic:state.bannerPic.bannerPic
})

const mapDispatchToProps=(dispatch)=>({
	getBannerPic(){
		dispatch(get_banner())
	},
	getNavlist(){
		dispatch(get_navlist())
	}
})


export default connect(mapStateToProps,mapDispatchToProps)(Home)