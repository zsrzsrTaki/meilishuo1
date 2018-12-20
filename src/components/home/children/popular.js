import React, { Component, Fragment } from 'react'

class Popular extends Component {
    render() {
        let { weekPopularList } = this.props;
        return (
            <Fragment>
                <div  className="popularList">
                    <ul>
                        {
                            weekPopularList.map((item,index)=>{
                                return <li key={index}>
                                <img   src={item.image}/>
                                {item.title}
                                </li>
                            })
                        }
                    </ul>
                </div>
            </Fragment>
        )
    }
}

export default Popular;