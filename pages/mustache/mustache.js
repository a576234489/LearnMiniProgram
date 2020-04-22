// pages/mustache/mustache.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isActive: false,
    nowTime: new Date().toLocaleString(),
    score: 45
  },
  handleColor(){
    this.setData({
      isActive: !this.data.isActive,
    })
  },
  onLoad(){
    setInterval(()=>{
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    },1000)
  },
  handleAddScore(){
    this.setData ({
      score: this.data.score + 6
    })
  }
})