/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function (k) {
  if (k === 1) return 1
  const set = new Set()
  let x = 1
  let cnt = 1
  while (!set.has(x)) {
    set.add(x)
    x = (10 * x + 1) % k
    if (x === 0) return ++cnt
    cnt++
  }
  return -1
}

const k = 3
console.log(smallestRepunitDivByK(k))
