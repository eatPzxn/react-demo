import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: this.props.title
    }
  }
  
  
  render () {
    return (
      <div className="header">
        <div className="header_inner">
          <div className="title">
            {this.state.title}
          </div>
        </div> 
      </div>
    )
  }
}