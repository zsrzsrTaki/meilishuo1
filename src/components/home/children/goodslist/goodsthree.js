import React, { Component } from 'react'

import { connect } from 'react-redux'

import Loading from '../../../commmon/loading'

import { get_Goods_action3 } from '../../../../action/actioncreator'

class GoodsThree extends Component {
    render() {
        let { goodsListOne } = this.props;
        return (
            <div className="goodsList">
                {
                    goodsListOne.map((item, index) => {
                        return <div key={index} className="goodsItem"  onClick={this.handlerClick.bind(this)}>
                            <div className="goodsItem_show">
                                <img src={item.show.img} />
                            </div>
                            <p className="goodsItem_title">{item.title}</p>
                            <div className="goodsItem_Info">
                                <span className="price">{item.price}</span>
                                <i className="iconfont">&#xe6cc;</i>
                                <span className="num">{item.cfav}</span>
                            </div>
                        </div>
                    })
                }
                <Loading />
            </div>
        )
    }
    handlerClick(){
        alert(1)
    }
    componentDidMount() {
        this.props.getGoodsData();
    }
}

const mapStateToProps = (state) => ({
    goodsListOne: state.home.goodsListOne
})

const mapDispatchToProps = (dispatch) => ({
    getGoodsData() {
        get_Goods_action3(dispatch)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(GoodsThree);