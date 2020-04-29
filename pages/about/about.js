// about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad(){
    let pages = getCurrentPages();
    console.log(pages)
  },
  onUnload(){
    let pages = getCurrentPages();
    let home = pages[pages.length - 2];
    home.setData({
      text: '啥啥啥'
    })
  }
  
})