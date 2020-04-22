// components/x-tab-control/x-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    "titles": {
      type: Array,
      value: [1,2,3]
    }
  },
  data: {
    currentIndex: 0
  },
  methods: {
    handleTabClick(event){
      let index = event.currentTarget.dataset.index
      let name = event.currentTarget.dataset.name
      this.setData({
        currentIndex: index
      })
      this.triggerEvent('tabClick',{index:index,name:name},{})
    }
  }

})
