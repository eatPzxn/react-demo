import React, { Component } from 'react';
import axios from 'axios';

import './News.css';


export default class News extends Component {

  constructor(props) {
    super(props);

    this.state = {
      newsData: []
    }
  }
  formatTime = (time, cFormat) => {
    if ((time + '').length === 10) {
      time = +time * 1000
    }
    let format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}',
      date
    if (typeof time === 'object') {
      date = time
    } else {
      date = new Date(time)
    }

    let formatObj = {
      y: date.getFullYear(),
      m: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      i: date.getMinutes(),
      s: date.getSeconds(),
      a: date.getDay()
    }

    let time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
      var value = formatObj[key]
      if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
      if (result.length > 0 && value < 10) {
        value = '0' + value
      }
      return value || 0
    })

    return time_str
  }

  componentDidMount() {
    axios.get('https://rabtman.com/api/v2/acgclub/pictures').then(res => {
      // console.log(res)
    })
    axios.get('https://v1.hitokoto.cn/').then(res => {
      // console.log(res)
    })
    this.showMore()
  }


  showMore = () => {
    const domBtn = document.querySelector('.show_more');
    const observer = new IntersectionObserver(changes => {
      console.log(changes[0].intersectionRatio)
      if (changes[0].intersectionRatio >= 0) {
        console.log(2)
        this.addNews(10)
      }
    })
    observer.observe(domBtn)
  }

  addNews = (n) => {
    for (let i = 0; i <= n; i++) {
      axios.get('https://v1.hitokoto.cn/').then(res => {
        // if(i===0){
        //   console.log(res.data)
        // }
        let o = {
          title: res.data.from,
          content: res.data.hitokoto,
          time: res.data.created_at
        }
        const news = this.state.newsData
        news.push(o)
        this.setState({
          newsData: news
        })
      })
    }
  }

  render() {
    let itemList = this.state.newsData.map((item, index) => {
      return (
        <div className="news_item" key={index}>
          <div className="news_img"></div>
          <div className="news_text">
            <div className="news_t">{item.title}</div>
            <div className="news_p">{item.content}</div>
            <div className="news_date">{this.formatTime(item.time, '{y}-{m}-{d} {h}:{i}:{s}')}</div>
          </div>
        </div>
      )
    })
    return (
      <div className="news">
        <div className="news_inner">
          {itemList}
          <div className="show_more">加载更多···</div>
        </div>
      </div>
    )
  }
}