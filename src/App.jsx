import React, { Component } from 'react';
import './App.css';
import './static/iconfont/iconfont.css';

import Header from './components/Header';
import Tabbar from './components/Tabbar';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: ''
    }
  }
  
  onChangeTitle (title) {
    this.setState({
      title: title
    })
  }

  // getDefaultProps () {

  // }

  // getInitialState () {

  // }

  // componentWillMount () {

  // }

  // componentDidCatch () {

  // }

  render() {
    return (
      <div className="App">
        <Header title={ this.state.title }></Header>
        <Tabbar changeTitle={ (title) => {this.onChangeTitle(title)} }></Tabbar>
      </div>
    );
  }
}

export default App;
