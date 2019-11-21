// commponents/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handItemClick:function(event){
      //取出index
     console.log(event)
      const index=event.currentTarget.dataset.index;
      console.log(index);
      //修改currentindex
      this.setData({
        currentIndex:index
      })
      //点击后通知外部页面点击事件
      this.triggerEvent('itemclick',{index,title:this.properties.titles[index]},{})
    }

  }
})
