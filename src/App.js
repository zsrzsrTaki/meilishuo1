import React, { Component,Fragment } from 'react';
import Home from "./components/home/home"
import {Provider} from "react-redux";
import store from "./store"
class App extends Component {
  render() {
    return (
    	<Provider store={store}>
    			<Home/>
    	</Provider>
    );
  }
}

export default App;
