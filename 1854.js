/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
    const d = new Array(102).fill(0)
    d[0] = 0
    for (let i = 0; i < logs.length; i++) {
        let left = logs[i][0] - 1950
        let right = logs[i][1] - 1950
        d[left]++
        d[right]--
    }
    const a = new Array(102).fill(0)
    a[0] = d[0]
    for (let i = 1; i <= 100; i++) {
        a[i] = a[i - 1] + d[i]
    }
    // 求最大
    let max = Math.max(...a)
    return a.indexOf(max) + 1950
};

const logs = [[1993,1999],[2000,2010]]
console.log(maximumPopulation(logs)) // 1960