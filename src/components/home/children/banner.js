import React,{Component} from "react";
import Swiper from 'swiper/dist/js/swiper.js'
import "swiper/dist/css/swiper.css"
import {connect} from  "react-redux"
import {get_banner} from "../../../action/actioncreator"
 class Banner extends Component{
	constructor(props){
		super(props)
		this.state={flag:true}
	}
    render(){
    	let {bannerPic} = this.props
        return (
            <div className="banner">
       			<div className="swiper-container" ref="containerID">
			        <div className="swiper-wrapper">
			        		{
			        			bannerPic.map((item,index)=>{
			        				return <div className="swiper-slide" key={index}>
			        					<img src={item.image}/>
			        				</div>
			        			})
			        		}
			        </div>
        				<div className='swiper-pagination' ref="paginationID"></div>
      			</div>
      		</div>
        )
    }
    componentDidUpdate(){
    	if(this.state.flag){
			new Swiper(this.refs.containerID, {
				 autoplay:true,
				 loop:true
	  		 });
	  		 this.setState({flag:false})
    	}
	}
}
 const mapStateToProps=(state)=>({
	bannerPic:state.bannerPic.bannerPic
})

export default connect(mapStateToProps)(Banner)