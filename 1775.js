/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minOperations = function (nums1, nums2) {
  let sum1 = 0,
    sum2 = 0
  const m = nums1.length,
    n = nums2.length
  if (m > n) {
    if (1 * m > 6 * n) return -1
  } else if (m < n) {
    if (1 * n > 6 * m) return -1
  }
  for (let i = 0; i < m; i++) {
    sum1 += nums1[i]
  }
  for (let i = 0; i < n; i++) {
    sum2 += nums2[i]
  }
  let mx = Math.max(sum1, sum2)
  let mn = Math.min(sum1, sum2)
  const calOp = (maxNums, minNums, mx, mn) => {
    maxNums.sort((a, b) => b - a)
    minNums.sort((a, b) => a - b)
    const m = maxNums.length
    const n = minNums.length
    let p1 = 0,
      p2 = 0 // p1 为max数组的指针，p2为min数组的指针
    let cnt = 0
    while (p1 < m && p2 < n && mx > mn) {
      // 比较哪个贡献更大，就变化哪个
      if (maxNums[p1] - 1 >= 6 - minNums[p2]) {
        mx -= maxNums[p1] - 1
        p1++
      } else {
        mn += 6 - minNums[p2]
        p2++
      }
      cnt++
      if (mx <= mn) return cnt
    }
    // 上面某单个数组已经遍历完了
    if (p1 < m) {
      while (mx > mn) {
        mx -= maxNums[p1] - 1
        p1++
        cnt++
      }
      return cnt
    } else {
      while (mx > mn) {
        mx -= 6 - minNums[p2]
        p2++
        cnt++
      }
      return cnt
    }
  }
  if (sum1 > sum2) return calOp(nums1, nums2, mx, mn)
  else if (sum1 < sum2) return calOp(nums2, nums1, mx, mn)
  else return 0
}

const nums1 = [1, 2, 3, 4, 5, 6]
const nums2 = [1, 1, 2, 2, 2, 2]
console.log(minOperations(nums1, nums2))
