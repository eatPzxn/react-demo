import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import './Tabbar.css';
import One from '../view/One/One';
import Two from '../view/Two/Two';
import Three from '../view/Three/Three';


export default class Tabbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }


  render() {
    return (
      <BrowserRouter basename="/">
        <div className="views">
          <Route exact path='/' component={One} />
          <Route path='/two' component={Two} />
          <Route path='/three' component={Three} />
          <div className="tabbar">
            <div className="tabbar_inner">
              <NavLink className="tab" exact activeClassName="active" to='/'>
                <i className="iconfont icon-niao-"></i>
                <span>雀</span>
              </NavLink>
              <NavLink className="tab" activeClassName="active" to='/two'>
                <i className="iconfont icon-xiaolu-"></i>
                <span>狐</span>
              </NavLink>
              <NavLink className="tab" activeClassName="active" to='/three'>
                <i className="iconfont icon-huli-"></i>
                <span>猫</span>
              </NavLink>
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}