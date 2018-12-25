import React, { Component } from 'react'

import { HashRouter as Router, Link } from 'react-router-dom'

import { connect } from 'react-redux'

import Loading from '../../../commmon/loading'

import { get_Goods_action } from '../../../../action/actioncreator'

class GoodsOne extends Component {
    render() {
        let { goodsListOne } = this.props;
        return (
            <Router>
                <div className="goodsList">
                    {
                        goodsListOne.map((item, index) => {
                            return <Link  to={"/detail/" + item.iid}  key={index}>
                                <div key={index} className="goodsItem">
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
                            </Link>
                        })
                    }
                    <Loading />
                </div>
            </Router>
        )
    }
    // handlerClick(id) {
    //     onClick={this.handlerClick.bind(this, item.shopId)}
    // }
    componentDidMount() {
        this.props.getGoodsData();
    }
}

const mapStateToProps = (state) => ({
    goodsListOne: state.home.goodsListOne
})

const mapDispatchToProps = (dispatch) => ({
    getGoodsData() {
        get_Goods_action(dispatch)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(GoodsOne);