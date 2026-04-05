/**
 * @param {number} n
 * @return {number[]}
 */
var findGoodIntegers = function (n) {
  const goodMap = new Map()
  const goodArr = []
  const MAXINT = 10 ** 9
  for (let i = 1; i <= 999; i++) {
    for (let j = i; j <= 999; j++) {
      const temp = i ** 3 + j ** 3
      if (temp <= MAXINT) {
        if (goodMap.has(temp)) {
          const freq = goodMap.get(temp)
          if (freq === 1) goodArr.push(temp)
          goodMap.set(temp, freq + 1)
        } else goodMap.set(temp, 1)
      }
    }
  }
  goodArr.sort((a, b) => a - b)
  console.log(goodArr)
}

findGoodIntegers(1000000000)
