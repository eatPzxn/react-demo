import React, { Component } from 'react';

import './Shop.css';

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrls: [
        { title: 'biubiu', money: '5000', tax: false, url: require('../../../static/shop.jpg') },
        { title: '咻咻', money: '5000', tax: false, url: require('../../../static/shop1.jpg') },
        { title: '啦啦', money: '5000', tax: false, url: require('../../../static/shop2.jpg') },
        { title: '嘿嘿', money: '5000', tax: false, url: require('../../../static/shop3.jpg') },
        { title: 'biubiu', money: '5000', tax: false, url: require('../../../static/shop.jpg') },
        { title: '咻咻', money: '5000', tax: false, url: require('../../../static/shop1.jpg') },
        { title: '啦啦', money: '5000', tax: false, url: require('../../../static/shop2.jpg') },
        { title: '嘿嘿', money: '5000', tax: false, url: require('../../../static/shop3.jpg') },
        { title: 'biubiu', money: '5000', tax: false, url: require('../../../static/shop.jpg') },
        { title: '咻咻', money: '5000', tax: false, url: require('../../../static/shop1.jpg') },
      ]
    }
  }

  add(e) {
    const title = ['biubiu', '咻咻', '啦啦', '嘿嘿']
    console.log('e===========', e)
    const imgBox = this.state.imgUrls;
    imgBox.push({ title: `${title[imgBox.length % 4]}${imgBox.length}`, money: '5000', tax: false, url: require(`../../../static/shop${imgBox.length % 4 === 0 ? '' : imgBox.length % 4}.jpg`) })
    this.setState({
      imgUrls: imgBox
    })
  }

  render() {
    let itemList = this.state.imgUrls.map((item, index) => {
      return (
        <div className="shop_item" key={index} onClick={(e) => this.add(e)} >
          <div className="shop_img" style={{ backgroundImage: `url(${item.url})` }}></div>
          <div className="shop_title">
            <span className="shop_name">{item.title}</span>
            <span className="shop_money">￥{item.money}円（免税）</span>
          </div>
        </div>
      )
    })

    return (
      <div className="shop">
        <div className="shop_inner">
          {itemList}
        </div>
      </div>
    )
  }
}