import React, { Component, Fragment } from 'react'

class Popular extends Component {
    render() {
        let { weekPopularList } = this.props;
        return (
            <Fragment>
                <div  className="h_popularList">
                    <h3  className="h_popular_title">
                        本周流行
                    </h3>
                    <ul  className="h_popular_list">
                        {
                            weekPopularList.map((item,index)=>{
                                return <li key={index}>
                                <img   src={item.image} className="h_popular_list_pic"/>
                                <span  className="h_popular_list_info">{item.title}</span>
                                </li>
                            })
                        }
                    </ul>
                    <ul  className="h_popular_list">
                        {
                            weekPopularList.map((item,index)=>{
                                return <li key={index}>
                                <img   src={item.image} className="h_popular_list_pic"/>
                                <span  className="h_popular_list_info">{item.title}</span>
                                </li>
                            })
                        }
                    </ul>
                    <div  className="h_popular_more">
                        <a>查看更多</a>
                        <i  className="iconfont">&#xe65e;</i>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Popular;