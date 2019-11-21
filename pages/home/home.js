// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles:['衣服','裤子','帽子'],
    count:0
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
  handleEventClick:function(event){
    console.log(event);
  },
  handleItemClick:function(event){
console.log(event);

  },
  handleCaptureView1:function(){
    console.log("handleCaptureView1");
  },
  handleCaptureView2: function () {
    console.log("handleCaptureView2");
  },
    handleCaptureView3: function () {
    console.log("handleCaptureView3");
  },
  handleBindView1:function(){
    console.log("handleBindView1")
  },
  handleBindView2: function () {
    console.log("handleBindView2")
  },
  handleBindView3: function () {
    console.log("handleBindView3")
  },
  handleIncrement:function(event){

    console.log(event);
    this.setData({
      count:this.data.count+1
    })
  },
  handtabControClick:function(event){
    console.log(event);
  },
  updateComData :function(){
    const my_sel=this.selectComponent('.sel-class')
    console.log(my_sel);
    my_sel.setDataFunction(10)
  }
  
})