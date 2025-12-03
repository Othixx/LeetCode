let myMap = new Map([['a', 1], ['b', 2], ['c', 3]]);
let firstEntry = myMap.entries().next().value
console.log(firstEntry); // 输出: ['a', 1]