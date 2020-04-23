App({
  globalData:{
    token: ''
  },
  onLaunch(){
    let token = wx.getStorageSync('token');
    if(token && token.length > 0){
      console.log("验证操作")
      wx.request({
        url: 'http://123.207.32.32:3000/auth',
        header: {
          token
        },
        method: 'post',
        success: res => {
          if(res.errMsg == "request:ok"){
            this.globalData.token = token
            console.log(this.globalData.token)
          }else{
            this.login();
          }
        }
      })
    }else{
      console.log("登录操作")
      this.login();
    }
  },
  login(){
    wx.login({
      success: res => {
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          data: {
            code: res.code,
          },
          method: 'post',
          success: res => {
            if(res.data.token && res.data.token.length > 0){
              this.globalData.token = res.data.token;
            }
            wx.setStorageSync('token', res.data.token)
          }
        })
      }
    })
  }
})