/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function (events) {
  const endMaxValue = [] // [右区间值，最大值]
  const startMaxValue = []

  // 添加从1到右区间的最大值进数组，右区间升序排列
  events.sort((a, b) => a[1] - b[1])
  const n = events.length
  let temp = 0
  for (let i = 0; i < n - 1; i++) {
    temp = Math.max(temp, events[i][2])
    if (events[i + 1][1] > events[i][1]) {
      endMaxValue.push([events[i][1], temp])
    }
  }
  temp = Math.max(temp, events[n - 1][2])
  endMaxValue.push([events[n - 1][1], temp])

  // 左区间值的最大值数组，左区间降序排列
  temp = 0
  events.sort((a, b) => b[0] - a[0])
  for (let i = 0; i < n - 1; i++) {
    temp = Math.max(temp, events[i][2])
    if (events[i + 1][1] !== events[i][1])
      startMaxValue.push([events[i][0], temp])
  }
  temp = Math.max(temp, events[n - 1][2])
  startMaxValue.push([events[n - 1][0], temp])

  const findLeft = (x) => {
    // 右区间值最大为x，查找可行的最大价值
    let left = 0,
      right = endMaxValue.length - 1
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (endMaxValue[mid][0] <= x) left = mid + 1
      else right = mid - 1
    }
    return right < 0 ? 0 : endMaxValue[right][1]
  }

  const findRight = (x) => {
    // 左区间值最小为x，查找可行的最大价值
    let left = 0,
      right = startMaxValue.length - 1
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (startMaxValue[mid][0] >= x) left = mid + 1
      else right = mid - 1
    }
    return right < 0 ? 0 : startMaxValue[right][1]
  }

  let ans = 0
  for (const [startTime, endTime, value] of events) {
    ans = Math.max(
      ans,
      value,
      value + findLeft(startTime - 1),
      value + findRight(endTime + 1),
    )
  }
  return ans
}

const events = [
  [1, 3, 2],
  [4, 5, 2],
  [2, 4, 3],
]
console.log(maxTwoEvents(events))
