import React, { Component } from 'react';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import './Banner.css';

export default class Banner extends Component {

  constructor(props) {
    super(props);
    this.state = {
      banners: [
        require('../../../static/banner/timg.jpg'),
        require('../../../static/banner/timg1.jpg'),
        require('../../../static/banner/timg2.jpg'),
        require('../../../static/banner/timg3.jpg'),
      ],
    }
  }

  componentDidMount() {
    new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

  render() {
    let slide = this.state.banners.map((item, index) => {
      return (
        <div className="swiper-slide" key={index} style={{ background: `url(${item}) no-repeat center/cover` }}></div>
      )
    })
    return (
      <div className="banner">
        <div className="banner_inner">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {slide}
            </div>
            <div className='swiper-pagination'></div>
          </div>
        </div>
      </div>
    )
  }
}