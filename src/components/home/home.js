import React, { Component, Fragment } from "react";

import Search from "./children/search";

import Banner from './children/banner'

import Navlist from "./children/navlist"

import Advertisement from './children/advertisement'

import Popular from './children/popular'

import GoodsTitle from './children/goodstitle'

import GoodsFalse   from './children/goodsFalse'

import Swiper from 'swiper/dist/js/swiper.js'

import "./style/index.css";

import "swiper/dist/css/swiper.css"

import { connect } from "react-redux"

import {
	get_banner,
	get_navlist,
	get_Home_Popular_Data,
	get_GoodsMore_action
} from "../../action/actioncreator"

import BScroll from 'better-scroll'

class Home extends Component {
	constructor(){
		super();
		this.state = {
			flag : false
		}
	}
	render() {
		let { weekPopularList, advertisementList } = this.props;
		return (
			<Fragment>
				{this.state.flag ? <GoodsFalse /> : ''}
				<div className="wrapper" ref="wrapper">
					<div className="content">
						<Search />
						<Banner />
						<Navlist />
						<Advertisement advertisementList={advertisementList} />
						<Popular weekPopularList={weekPopularList} />
						{/* {this.state.flag ? "" : <GoodsTitle />} */}
						<GoodsTitle />
					</div>
				</div>
			</Fragment>
		)
	}
	componentDidMount() {
		this.scroll = new BScroll(this.refs.wrapper, {
			click: true,
			tap: true,
			pullUpLoad: true,//上拉配置项
			probeType: 2//1不是实时的,3消耗性能,默认为0
		});
		this.props.getData();
		//上拉加载
		this.scroll.on("pullingUp", () => {
			this.props.getDataMore(this.props.page);
		})
		//吸顶，，滚动的时候获取实时坐标
		this.scroll.on("scroll", (offset) => {
			//console.log(offset);
			if (offset.y <= -1860) {//-1855
				this.setState({
					flag : true
				})
			}else{
				this.setState({
					flag : false
				})
			}
		})
	}
	componentDidUpdate() {//获取到更新后的dom结构
		this.scroll.refresh();//重新计算高度
		//数据加载完毕以后通知better-scroll可以进行下一次下拉加载
		this.scroll.finishPullUp();
	}
}

const mapStateToProps = (state) => ({
	bannerPic: state.bannerPic.bannerPic,
	weekPopularList: state.home.weekPopularList,
	advertisementList: state.home.advertisementList,
	page: state.home.page
})

const mapDispatchToProps = (dispatch) => ({
	getData() {
		dispatch(get_banner());
		dispatch(get_navlist());
		get_banner(dispatch);
		get_Home_Popular_Data(dispatch)
	},
	getDataMore(params) {
		get_GoodsMore_action(dispatch, params)
	}
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)