import React,{Component,Fragment} from "react";
import Search from "./children/search";
import "./style/index.css";
import Banner from './children/banner'
import Popular from './children/popular'
import Swiper from 'swiper/dist/js/swiper.js'
import "swiper/dist/css/swiper.css"
import {connect} from  "react-redux"
import {get_banner,get_navlist,getHomePopularData} from "../../action/actioncreator"
import Navlist from "./children/navlist" 

class Home extends Component{
	render(){
		  let {weekPopularList} = this.props;
        console.log(this.props.weekPopularList)
		return( 
			<Fragment>
				<Search/>
				<Banner/>
				<Navlist/>
				  <Popular  weekPopularList={weekPopularList} />
			</Fragment>
			
		)
	}
	 componentDidMount(){
		this.props.getBannerPic()
		this.props.getNavlist()
		 this.props.getPopularData()
	}
	
}

const mapStateToProps=(state)=>({
	bannerPic:state.bannerPic.bannerPic,
	 weekPopularList : state.home.weekPopularList
})

const mapDispatchToProps=(dispatch)=>({
	getBannerPic(){
		dispatch(get_banner())
	},
	getNavlist(){
		dispatch(get_navlist())
	},
	 getPopularData(){
        getHomePopularData(dispatch)
    }
})


export default connect(mapStateToProps,mapDispatchToProps)(Home)