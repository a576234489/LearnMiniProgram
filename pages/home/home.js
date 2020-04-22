// home/home.js
import request from '../../service/network'
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad(){
    request({
      url: 'http://152.136.185.210:8000/api/h8/recommend'
    }).then(res => {
      console.log(res)
    }).catch(res => {

    })
  }
  
})