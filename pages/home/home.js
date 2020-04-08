// home/home.js
let app = getApp();
console.log(app.globalData.name)
console.log(app.globalData.age)
Page({
  handleGetUserInfo(event){
    console.log(event)
  },
  data: {
    list: []
  },
  onLoad(){
    console.log("页面加载完成")
    wx.request({
      url: 'http://152.136.185.210:8000/api/h8/recommend',
      success: (res) => {
        console.log(res);
        this.setData({
          list: res.data.data.list
        })
      }
    })
  },
  onShow(){
    console.log("页面显示")
  },
  onReady(){
    console.log("页面渲染进入准备阶段")
  },
  onHide(){
    console.log("页面退出")
  },
  onunload(){
    console.log("页面返回,页面销毁")
  },
  //监听页面滚动，得到距离顶部的距离
  onPageScroll(obj){
    // console.log(obj)
  },
  //监听页面滚动到底部
  onReachBottom(){
    console.log("滚动到底部了")
  },
  onPullDownRefresh(){
    console.log("下拉刷新更多")
  }
})