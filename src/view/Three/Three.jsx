import React, { Component } from 'react';

import './Three.css';

export default class Three extends Component {
  constructor (props) {
    super(props);
    this.state = {
      msg: '这是第三个页面'
    }
  }

  render() {
    return (
      <div className="three">
        <div className="three_inner">
          { this.state.msg }
        </div>
      </div>
    )
  }
}