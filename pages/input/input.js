// pages/input/input.js
Page({
  handleInput(event){
    console.log("输入文本时触发: ",event)
  },
  handleFocus(event){
    console.log("获取焦点时触发: ",event)
  },
  handleBlur(event){
    console.log("失去焦点时触发: ",event)
  }
  
})