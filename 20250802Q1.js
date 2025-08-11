/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
    let calculateTime = function (i, j) {
        // 计算第i个陆地游乐设施和第j个水上游乐设施花费的时间
        let t = 0;
        if (landStartTime[i] < waterStartTime[i]) {
            t = landStartTime[i] + landDuration[i];
            t = Math.max(t + waterDuration[j], waterStartTime[j] + waterDuration[j]);
        }
        else {
            t = waterStartTime[j] + waterDuration[j];
            t = Math.max(t + landDuration[i], landStartTime[i] + landDuration[i]);
        }
        return t;
    };

    let ans = Infinity;
    let n = landStartTime.length, m = waterStartTime.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            ans = Math.min(ans, calculateTime(i, j));
        }
    }
    return ans;
};

let landStartTime = [85,19,36], landDuration = [52,5,47];
let waterStartTime = [76], waterDuration = [86];
console.log(earliestFinishTime(landStartTime, landDuration, waterStartTime, waterDuration)); // 输出: 162