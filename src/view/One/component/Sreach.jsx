import React, { Component } from 'react';

import './Sreach.css';

export default class Sreach extends Component {

  constructor(props) {
    super(props);

    this.state = {
      keyWord: '',
    }
  }

  resetKeyWord = () => {
    this.setState({
      keyWord: ''
    })
  }

  setKeyWord = (e) => {
    this.setState({
      keyWord: e.target.value
    })
  }

  search = () => {
    // this.history.pushState(null, '/abc')
  }

  render() {
    // 咋绑啊  不知道    你这样写没错啊 输入不了了  现在开始222了
    // 啥啊  v-model啊   
    return (
      <div className="sreach">
        <i className="iconfont icon-huolieniao" onClick={this.resetKeyWord}></i>
        <input type="text" value={this.state.keyWord} onChange={this.setKeyWord} placeholder="点击查询" />
        <i className="iconfont icon-penzaixianrenzhang-" onClick={this.search}></i>
      </div>
    )
  }
}