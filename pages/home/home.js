// home/home.js
Page({
  data(){
    token: token
  },
  handleShowToast(){
    let token = getApp().globalData.token;
    this.setData({
      token: token
    })
    wx.showToast({
      title: '成功啦',
      icon: 'loading'
    })
  },
  handleShowModal(){
    wx.showModal({
      title: '你不是人',
      content: '对不对',
      success: function(res){
        console.log(res)
      }
    })
  },
  handleShowLoading(){
    wx.showLoading({
      title: '等等吧',
    })
    setInterval(res => {
      wx.hideLoading({
      
      })
    },1000)
  },
  handleShowActionSheet(){
    wx.showActionSheet({
      itemList: ['相册','相机'],
    })
  },
  onShareAppMessage(options){
    return {
      title: '梁海新',
      path: '/pages/home/home',
      imageUrl: 'https://t7.baidu.com/it/u=3616242789,1098670747&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1588148029&t=fb04555472694e6eba7fbf6939ba0266'
    }
  },
  
  

})