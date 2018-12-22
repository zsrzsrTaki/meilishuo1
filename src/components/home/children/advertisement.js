import  React,{Component}  from 'react'

class Advertisement extends Component{
    render(){
        let {advertisementList} = this.props;
        return (
            <div  className="h_advertisement">
                <div  className="h_advertisement_title">
                    <i  className="iconfont">&#xe61e;</i>
                    <span>限时特卖</span>
                </div>
                <div  className="h_advertisement_pic">
                    <img src={advertisementList.image}/>
                </div>
            </div>
        )
    }
}

export  default  Advertisement