const MX = 10 ** 5
const isPrime = new Array(MX + 1).fill(-1)
const primeList = []
isPrime[0] = false
isPrime[1] = false
for (let i = 2; i <= MX; i++) {
  if (isPrime[i] === -1) {
    isPrime[i] = true
    primeList.push(i)
    for (let j = 2; i * j <= MX; j++) {
      isPrime[i * j] = false
    }
  }
}
/**
 * @param {number} n
 * @return {number}
 */
var smallestValue = function (n) {
  while (!isPrime[n]) {
    const oldN = n
    let temp = 0
    while (n > 1) {
      if (isPrime[n]) {
        temp += n
        break
      }
      for (let i = 0; primeList[i] <= Math.floor(n / 2); i++) {
        if (n % primeList[i] === 0) {
          temp += primeList[i]
          n /= primeList[i]
          break
        }
      }
    }
    if (temp < oldN) n = temp
    else return temp
  }
  return n
}

const n = 4
console.log(smallestValue(n))
