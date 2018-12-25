import React, { Component } from 'react'

import { connect } from 'react-redux'

import { get_Detail_action } from '../../../action/actioncreator'

import Swiper from 'swiper'

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shopId: ''
        }
    }
    render() {
        this.state.shopId = this.props.match.params.id;
        let { detailList,detail,list} = this.props;
        return (
            <div className="detail">
                <div className="swiper-container" ref="top">
                    <div className="swiper-wrapper">
                        {
                            detailList.map((item, index) => {
                                return <div className="swiper-slide" key={index}>
                                    <img src={item} />
                                </div>
                            })
                        }
                    </div>
                </div>
                <div  className="primary-info">
                    <span  className="info-title">{detail.desc}</span>
                    <div className="info-price">
                        <span className="now">{detail.price}</span>
                        <span className="market">{detail.oldPrice}</span>
                        <span className="discount">{detail.discountDesc}</span>
                    </div>
                    <div className="info-other">
                        <span className="item">{list[0]}</span>
                        <span className="item">{list[1]}</span>
                        <span className="item">72小时发货</span>
                        <span className="item">广东省广州市</span>
                    </div>
                    <div className="servers">
                        <span  className="server-item"></span>
                        <span  className="server-item"></span>
                        <span  className="server-item"></span>
                        <span  className="server-item"></span>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getData(this.state.shopId);
        //react-redux里面不用setState,因此在定时器
        //nextTick   === setState
        setTimeout(() => {
            this.swiper = new Swiper(this.refs.top, {
                loop: true,
                autoplay: true
            })
        }, 300)
    }
}

const mapStateToProps = (state) => ({
    detailList: state.home.detailList,
    detail : state.home.detail,
    list : state.home.columns
})


const mapDispatchToProps = (dispatch) => ({
    getData(id) {
        get_Detail_action(dispatch, id)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)