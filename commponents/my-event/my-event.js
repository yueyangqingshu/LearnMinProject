// commponents/my-event/my-event.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindClick:function(){
      console.log("----------------");
      this.triggerEvent("increment",{name:'吕辉',gender:'男'},{})
    }

  }
})
