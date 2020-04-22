// components/my-event/my-event.js
Component({
  methods: {
    handleIncrement() {
      this.triggerEvent('increment',{name:'梁海新',age:18},{})
    }
  }
})
