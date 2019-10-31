//注册一个小程序的示例
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    //网络请求

    //获取用户信息  
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    //判断小程序的进入场景
    // console.log(options)

    // wx.getUserInfo({
    //     success: function(res){
    //       console.log(res)

    //     }
    // })
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  gloabalData:{
    name: 'coderwhy',
    age:18

  }
})
