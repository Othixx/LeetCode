/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function (arr) {
  let preXor = 0
  let ans = 0
  const map = new Map()
  map.set(0, [0, 1])
  for (let i = 0; i < arr.length; i++) {
    preXor ^= arr[i]
    if (map.has(preXor)) {
      let [sum, cnt] = map.get(preXor)
      ans += cnt * i - sum
      sum += i + 1
      cnt++
      map.set(preXor, [sum, cnt])
    } else {
      map.set(preXor, [i + 1, 1])
    }
  }
  return ans
}

const arr = [2, 3, 1, 6, 7]
console.log(countTriplets(arr))
