 // pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: "22",
    firstname : "firstname",
    lastname : "lastname",
    age : 12,
    nowtime : '',
    isActive : false,
    scope : 20,
    movies :['星际争霸','刺客信条','生化危机'],
    nums: [
      [10,14,11,18],
      [22,332,22,22],
      [22,223,33,34]

    ]
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      setInterval(() =>{
        this.setData({
          nowtime : new Date().toLocaleString()
        })

      },1000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  handSwitchColor: function(){
    this.setData({

      isActive: !this.data.isActive  
    })

  },
  
  handleIncrement : function(){
      this.setData({
        scope : this.data.scope+6

      })
  }
})