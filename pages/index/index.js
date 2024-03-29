//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperData: [],
    navData: [],
    floorData:[],
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
        url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
        success: res => {
          if (res.statusCode === 200) {
            this.setData({
              swiperData: res.data.message
            })
          }
        }
      }),

      wx.request({
        url: 'https://api.zbztb.cn/api/public/v1/home/catitems',
        success: res => {
          if (res.statusCode === 200) {
            this.setData({
              navData: res.data.message
            })
          }
        }
      }),

      wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/floordata',
      success: res=>{
        console.log(res)
        if(res.statusCode === 200){
          this.setData({
            floorData: res.data.message
          })
        }
      }
      })
  },



  backToTop: function(e){
    console.log(e)
    wx.pageScrollTo({
      scrollTop: e.currentTarget.dataset.scrolltop,
      duration: 500
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})