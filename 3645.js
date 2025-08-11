/**
 * @param {number[]} value
 * @param {number[]} limit
 * @return {number}
 */
var maxTotal = function (value, limit) {
    let n = value.length;
    for (let i = 0; i < n; i++) {
        value[i] = [value[i], limit[i]];
    }
    value.sort((a, b) => {
        if (a[1] !== b[1]) return a[1] - b[1];
        else return b[0] - a[0];
    });
    // value.push([0, -1]);
    let ans = 0;
    for (let i = 0; i < n; i++) {
        let nowLimit = value[i][1];
        let cnt = 0;
        while (cnt < nowLimit) {
            ans += value[i][0];
            cnt++;
            if (i <= n - 2 && nowLimit === value[i + 1][1]) i++;
            else break;
        }
        if (cnt === nowLimit) {
            while (i < n && value[i][1] === nowLimit) i++;
            i--;
        }
        
        // while (nowLimit === value[i + 1][1]) {
        //     if (cnt < nowLimit) {
        //         ans += value[i][0];
        //         cnt++;
        //     }
        //     i++;
        // }
    }
    return ans;
};

let value = [3,5,8];
let limit = [2,1,3];
console.log(maxTotal(value, limit));