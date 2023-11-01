Page({
  data: {
    name: 'zwh',
    age: 18,
    students: [
      {id: 520, name: 'z', age: 25},
      {id: 521, name: 'w', age: 26},
      {id: 1314, name: 'h', age: 27}
    ],
    counter: 20
  },
  handleBtnClick(){
    this.setData({
      counter: this.data.counter + 10
    })
  },
  handleSuntraction(){
    this.setData({
      counter: this.data.counter - 1
    })
  }
})
