/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
    let n = envelopes.length;

    // 排序，第一维升序第二维降序
    envelopes.sort((a, b) => {
        if (a[0] === b[0]) return b[1] - a[1];
        return a[0] - b[0];
    });

    // 下面只需要求第二维的LIS
    let p = [];
    p.push(envelopes[0][1]);
    // 查找第一个下标j，让p[j]>=envelopes[i][1]
    for (let i = 1; i < n; i++) {
        // 二分查找
        let m = 0;
        let n = p.length - 1;
        let pos = Math.floor((m + n) / 2);
        while (m <= n) {
            if (p[pos] >= envelopes[i][1]) n = pos - 1;
            else m = pos + 1;
            pos = Math.floor((m + n) / 2);
        }
        if (m >= p.length) p.push(envelopes[i][1]);
        else p[m] = envelopes[i][1];
    }
    return p.length;
};

let envelopes = [[5, 4], [6, 7], [6, 4], [2, 3]];
console.log(maxEnvelopes(envelopes));