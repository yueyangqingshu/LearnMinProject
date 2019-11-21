
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: "http://music.163.com/song/media/outer/url?id=385965.mp3",
    author: "五月天",
    name: "拥抱",
    poster: "http://p1.music.126.net/AmUoDfx17bcXoZF0uxU0-A==/109951163188724394.jpg?param=130y130",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  audioPlay:  function () {

            innerAudioContext.src = 'xxx';

            innerAudioContext.play();





            innerAudioContext.onPlay(() => {

                  console.log('录音播放中');

            })



            innerAudioContext.onStop(() => {

                  console.log('录音播放停止');

            })



            innerAudioContext.onEnded(() => {

                  console.log('录音播放结束');

            })



    }

})

