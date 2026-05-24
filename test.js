// 创建一个 Map
const myMap = new Map()
myMap.set('name', '小明')
myMap.set('age', 18)
myMap.set('gender', '男')

// for of 直接遍历
for (const item of myMap) {
  // item 是 [key, value] 数组
  console.log('键：', item[0])
  console.log('值：', item[1])
}
