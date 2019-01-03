import React, { Component } from 'react';
import './Notice.css';


export default class Notice extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      msg: '桥本环奈（Kanna Hashimoto），1999年2月3日出生于日本福冈县，日本偶像歌手、演员，偶像团体 Rev. from DVL成员'
    }
  }
  render () {
    return (
      <div className="notice">
        <div className="notice_inner">
          <div className="notice_marquee">
            <p>{ this.state.msg }</p>
          </div>
        </div>
      </div>
    )
  }
}