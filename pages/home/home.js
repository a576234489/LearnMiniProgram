Page({
  data:{
    name: "梁海新",
    age: 18,
    students:[
      {name:"kobe",age:20},
      {name:"lhx",age:22},
      {name:"jams",age:23},
      {name:"kurry",age:18},
    ],
    counter:0
  },
  handleCounterAdd(){
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleCounterSubtraction(){
    this.setData({
      counter: this.data.counter - 1
    })
  }
})