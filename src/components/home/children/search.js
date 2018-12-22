import React, { Component } from 'react'

class Search extends Component {
	render() {
		return (
			<div className="searchPart">
				<div className="logo">

				</div>
				<div id="search">
					<i className="iconfont  one">&#xe61b;</i>
					<input type="text" placeholder="搜索" />
				</div>
				<i className="iconfont  two">&#xe607;</i>
			</div>
		)
	}
}

export default Search 