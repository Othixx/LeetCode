/**
 * @param {number[]} stones
 * @param {number} k
 * @return {number}
 */
var mergeStones = function (stones, k) {
    n = stones.length;
    if (n === 1) return 0;
    if ((n - 1) % (k - 1) !== 0) return -1;
    let frontSum = [0];
    frontSum.push(stones[0]);
    let frontSumLen = frontSum.length;
    for (let i = 1; i < n; i++) {
        frontSumLen = frontSum.length;
        let temp = frontSum[frontSumLen - 1] + stones[i];
        frontSum.push(temp);
    }

    let count = 0;
    frontSumLen = frontSum.length;
    while (frontSumLen > 2) {
        let i_min = k;
        let temp = frontSum[k];
        for (let i = k + 1; i < frontSumLen; i++) {
            if (frontSum[i] - frontSum[i - k] < temp) {
                temp = frontSum[i] - frontSum[i - k];
                i_min = i;
            }
        }
        count += temp;
        // console.log(frontSum.slice(0, i_min - k + 1));
        // console.log(frontSum.slice(i_min, frontSumLen));
        frontSum = [...frontSum.slice(0, i_min - k + 1), ...frontSum.slice(i_min, frontSumLen)];
        frontSumLen = frontSum.length;
    }

    return count;
};

let stones = [3, 5, 1, 2, 6];
let k = 3;
console.log(mergeStones(stones, k));