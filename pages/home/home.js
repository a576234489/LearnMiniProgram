// home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter: 0
  },
  handleIncrement(event){
    console.log(event)
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSelIncrement(){
    let this_sel = this.selectComponent('#my-sel');
    this_sel.incrementCounter(10)
  },
  
  handleTabClick(event){
    console.log(event)
  },
  bindtouchstart(){
    console.log('bindtouchstart')
  },
  bindtouchmove(){
    console.log('bindtouchmove')
  },
  bindtouchend(){
    console.log('bindtouchend')
  },
  bindTap(){
    console.log('bindTap')
  },
  bindlongpress(){
    console.log('bindlongpress')
  },
  
})