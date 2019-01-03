import React, { Component } from 'react';
import News from './component/News';
import './Two.css';

export default class Two extends Component {
  constructor (props) {
    super(props);
    this.state = {}
  }
  render () {
    return (
      <div className="two">
        <div className="two_inner">
          <News />
        </div>
      </div>
    )
  }
}