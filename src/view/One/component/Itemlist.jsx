import React, { Component } from 'react';

import './Itemlist.css'

export default class Itemlist extends Component {
  constructor (props) {
    super(props);
    this.state = {
      List: [
        { name:'桥', id: 1, iconFont: 'icon-shuzhi-'},
        { name:'本', id: 2, iconFont: 'icon-shuye-1'},
        { name:'环', id: 3, iconFont: 'icon-shu-1'},
        { name:'奈', id: 4, iconFont: 'icon-yezi-'},
        { name:'嗒', id: 5, iconFont: 'icon-yezi-1'},
        { name:'咩', id: 6, iconFont: 'icon-yezi-2'},
        { name:'嘚', id: 7, iconFont: 'icon-yezi-3'},
        { name:'嘶', id: 8, iconFont: 'icon-yezi-4'},
      ]
    }
  }
  
  clickRoute (n, i, e) {
    e.stopPropagation();
    console.log(n, i);
  }

  render () {
    let lists = this.state.List.map((item, index) => {
      return (
        <div className="itemlist_child" key={ index } >
          <div className={`itemlist_icon iconfont ${item.iconFont}`} onClick={(e) => this.clickRoute(item.name, index, e)}></div>
          <span>{ item.name }</span>
        </div>
      )
    })
    return (
      <div className="itemlist">
        <div className="itemlist_inner">
          { lists }
        </div>
      </div>
    )
  }
}