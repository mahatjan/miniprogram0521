//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    image_list:[],
    nav_image:[],
    p_list:[]
  },
  //事件处理函数

  onLoad: function () {
  this.getimageList();
  this.getnavImageFun();
  this.getpListImage();
  },
  getimageList:function(e){
    const image_list={
      "msg":[{
        "image_src":"http://www.linweiqin.cn/img/banner1.jpg"
      },{
        "image_src":"http://www.linweiqin.cn/img/banner2.jpg"
      },{
        "image_src":"http://www.linweiqin.cn/img/banner3.jpg"
      }]
    }
    this.setData({
      image_list:image_list.msg
    })
  },

  getnavImageFun:function(e){
    const nav_image={
      "msg":[{
        "nav_image_src":"http://www.linweiqin.cn/img/cat1.png"
      },{
        "nav_image_src":"http://www.linweiqin.cn/img/cat2.png"
      },{
        "nav_image_src":"http://www.linweiqin.cn/img/cat3.png"
      },{
        "nav_image_src":"http://www.linweiqin.cn/img/cat4.png"
      },{
        "nav_image_src":"http://www.linweiqin.cn/img/cat5.png"
      }]
    }
    this.setData({
      nav_image:nav_image.msg
    })
  },
  getpListImage:function(e){
    const p_list={
      "msg":[{
        "image_src":"http://www.linweiqin.cn/img/floor1.jpg"
      },{
        "image_src":"http://www.linweiqin.cn/img/floor2.jpg"
      },{
        "image_src":"http://www.linweiqin.cn/img/floor3.jpg"
      },{
        "image_src":"http://www.linweiqin.cn/img/floor4.jpg"
      },{
        "image_src":"http://www.linweiqin.cn/img/floor5.jpg"
      },{
        "image_src":"http://www.linweiqin.cn/img/floor6.jpg"
      },]
    }
    this.setData({
      p_list:p_list.msg
    })
  }
})
