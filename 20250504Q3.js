/**
 * @param {number} l
 * @param {number} n
 * @param {number} k
 * @param {number[]} position
 * @param {number[]} time
 * @return {number}
 */
var minTravelTime = function (l, n, k, position, time) {
    // 计算原始花费时间
    let ans = 0;
    for(let i = 0; i < n - 1; i++){
        ans += (position[i + 1] - position[i]) * time[i];
    }
    for (let j = 0; j < k; j++) {
        let change_pos = -1;
        let change_time = Infinity;
        for (let i = 1; i < n - 1; i++) {
            let temp = Infinity;
            if (i !== n - 2)
                temp =
                    (position[i + 1] - position[i]) * (time[i - 1] - time[i]) +
                    (position[i + 2] - position[i + 1]) * time[i + 1];
            else
                temp =
                    (position[i + 1] - position[i]) * (time[i - 1] - time[i]);
            if (temp < change_time) {
                change_time = temp;
                change_pos = i;
            }
        }
        ans += change_time;
        // 合并
        position = [...position.slice(0, change_pos), ...position.slice(change_pos + 1, n)];
        time[change_pos + 1] = time[change_pos] + time[change_pos + 1];
        time = [...time.slice(0, change_pos), ...time.slice(change_pos + 1, n)];
        n = time.length;
    }
    return ans;
};

let l = 10;
let n = 4;
let k = 1;
let position = [0,3,8,10];
let time = [5,8,3,6];
console.log(minTravelTime(l, n, k, position, time)); 