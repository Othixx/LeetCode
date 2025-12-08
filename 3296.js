/**
 * @param {number} mountainHeight
 * @param {number[]} workerTimes
 * @return {number}
 */
var minNumberOfSeconds = function(mountainHeight, workerTimes) {
    const minQueue = new MinPriorityQueue(e => e[0])
    let ans = 0
    for (const workerTime of workerTimes) {
        minQueue.enqueue([workerTime, workerTime, workerTime])   // [工作后总花费，最小花费，当前工作花费]
    }
    while (mountainHeight > 0) {
        let timeArr = minQueue.dequeue()
        ans = timeArr[0]
        timeArr[2] += timeArr[1]
        timeArr[0] += timeArr[2]
        minQueue.enqueue(timeArr)
        mountainHeight--
    }
    return ans
};