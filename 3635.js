/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function (
  landStartTime,
  landDuration,
  waterStartTime,
  waterDuration,
) {
  const waterArr = [] // [最早开始, 持续时间]
  const landArr = []
  // 建议将重复的剔除，选持续时间最短的，方便
  const waterMap = new Map()
  const landMap = new Map()
  for (let i = 0; i < waterStartTime.length; i++) {
    if (waterMap.has(waterStartTime[i])) {
      const temp = waterMap.get(waterStartTime[i])
      if (waterDuration[i] < temp)
        waterMap.set(waterStartTime[i], waterDuration[i])
    } else waterMap.set(waterStartTime[i], waterDuration[i])
  }
  for (let i = 0; i < landStartTime.length; i++) {
    if (landMap.has(landStartTime[i])) {
      const temp = landMap.get(landStartTime[i])
      if (landDuration[i] < temp) landMap.set(landStartTime[i], landDuration[i])
    } else landMap.set(landStartTime[i], landDuration[i])
  }

  for (const [startTime, duration] of waterMap) {
    waterArr.push([startTime, duration])
  }
  for (const [startTime, duration] of landMap) {
    landArr.push([startTime, duration])
  }
  waterArr.sort((a, b) => a[0] - b[0])
  landArr.sort((a, b) => a[0] - b[0])

  // 最短持续时间
  const minWaterDuration = [waterArr[0][1]]
  const minLandDuration = [landArr[0][1]]
  for (let i = 1; i < waterArr.length; i++) {
    minWaterDuration.push(Math.min(minWaterDuration[i - 1], waterArr[i][1]))
  }
  for (let i = 1; i < landArr.length; i++) {
    minLandDuration.push(Math.min(minLandDuration[i - 1], landArr[i][1]))
  }

  // 最早结束时间
  const earlyWaterEndTime = [
    waterArr[waterArr.length - 1][0] + waterArr[waterArr.length - 1][1],
  ]
  const earlyLandEndTime = [
    landArr[landArr.length - 1][0] + landArr[landArr.length - 1][1],
  ]
  for (let i = waterArr.length - 2; i >= 0; i--) {
    earlyWaterEndTime.unshift(
      Math.min(waterArr[i][0] + waterArr[i][1], earlyWaterEndTime[0]),
    )
  }
  for (let i = landArr.length - 2; i >= 0; i--) {
    earlyLandEndTime.unshift(
      Math.min(landArr[i][0] + landArr[i][1], earlyLandEndTime[0]),
    )
  }

  let ans = Infinity
  const binarySearch = (t, arr) => {
    // 找第一个>t的下标
    let left = 0,
      right = arr.length - 1
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (arr[mid][0] > t) right = mid - 1
      else left = mid + 1
    }
    return left
  }
  // 先玩陆地的
  for (const [startTime, duration] of landArr) {
    // 对每个求最早结束时间
    const t = startTime + duration
    const idx = binarySearch(t, waterArr)
    if (idx === waterArr.length)
      ans = Math.min(ans, t + minWaterDuration[idx - 1])
    else if (idx === 0) ans = Math.min(ans, earlyWaterEndTime[idx])
    else
      ans = Math.min(ans, t + minWaterDuration[idx - 1], earlyWaterEndTime[idx])
  }
  // 先玩海洋
  for (const [startTime, duration] of waterArr) {
    const t = startTime + duration
    const idx = binarySearch(t, landArr)
    if (idx === landArr.length)
      ans = Math.min(ans, t + minLandDuration[idx - 1])
    else if (idx === 0) ans = Math.min(ans, earlyLandEndTime[idx])
    else
      ans = Math.min(ans, t + minLandDuration[idx - 1], earlyLandEndTime[idx])
  }
  return ans
}

const landStartTime = [63, 11, 6]
const landDuration = [30, 99, 1]
const waterStartTime = [69, 38]
const waterDuration = [83, 45]
console.log(
  earliestFinishTime(
    landStartTime,
    landDuration,
    waterStartTime,
    waterDuration,
  ),
)
