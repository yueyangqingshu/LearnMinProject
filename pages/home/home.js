// pages/home/home.js
const app=getApp()
const age = app.gloabalData.age;
console.log(age)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'Codewhy',
    age: 18,
    students:[
      {id:100,name:'zhangsan',age:12},
      {id:222,name:'wangwu',age:22},
      {id:300,name:'tongtong',age:18}

    ],
    counter:0
  },
  handleBtnClick(){
    this.setData({

      counter: this.data.counter +1
    })

  },
  handleBtnGetUserClick(event){
    console.log(event)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('页面加载的方法')

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

  }

})