var sumOfPrimesInRange = function (n) {
  const check = (x) => {
    for (let i = 2; i <= Math.ceil(Math.sqrt(x)); i++) {
      if (x % i === 0) return false
    }
    return true
  }

  let rotatedN = 0
  const originN = n
  while (n > 0) {
    let temp = n % 10
    rotatedN = 10 * rotatedN + temp
    n = Math.floor(n / 10)
  }
  let ans = 0
  for (
    let i = Math.min(rotatedN, originN);
    i <= Math.max(rotatedN, originN);
    i++
  ) {
    if (check(i)) ans += i
  }
  return ans
}

const n = 10
console.log(sumOfPrimesInRange(n))
