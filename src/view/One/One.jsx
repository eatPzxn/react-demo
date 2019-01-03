import React, { Component } from 'react';
import Sreach from './component/Sreach';
import Banner from './component/Banner';
import Itemlist from './component/Itemlist';
import Notice from './component/Notice';
import Shop from './component/Shop';
import './One.css';

export default class One extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: '嘿咻嘿咻拔萝卜',
      tsY: 0,
      startY: 0
    }
  }

  touchStart = e => {
    console.log(React)
    this.setState({
      startY: e.touches[0].clientY
    })
    console.log(e.touches[0].clientY);
    console.log(document.querySelector('.one_inner').scrollTop);
  }

  touchMove = e => {
    if (document.documentElement.scrollTop !== 0) {
      return false;
    }
    let n = (e.touches[0].clientY - this.state.startY) / 3;    
    if (n <= 0) {
      n = 0
    }
    if (n >= 30) {
      n = 45
    }
    this.setState({
      tsY: n
    })
    console.log(this.state.startY, this.state.tsY)
  }

  touchStop = e => {
    if (this.state.tsY === 45) {
      setTimeout(() => {
        this.setState({
          tsY: 0
        })
      }, 3000)
    } else {
      this.setState({
        tsY: 0
      })
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="one">
        <div className="loadfuck" style={{ height: `${this.state.tsY}px` }}>
          <p>{ this.state.msg }</p>
        </div>
        <div className="one_inner" 
             style={{ transform: `translateY(${this.state.tsY}px)` }} 
             onTouchStart={this.touchStart} 
             onTouchMove={this.touchMove} 
             onTouchEnd={this.touchStop}>
          <Sreach />
          <Banner />
          <Itemlist />
          <Notice />
          <Shop />
        </div>
      </div >
    )
  }
}