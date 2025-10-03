/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var getBiggestThree = function(grid) {
    const m = grid.length
    const n = grid[0].length
    let max1 = -1, max2 = -1, max3 = -1
    const cal = (k) => {
        // k 为当前的边长
        let square = 2 * k - 1
        for (let i = 0; i + square <= m; i++) {
            for (let j = 0; j + square <= n; j++) {
                let temp = 0
                for (let a = 0; a < square; a++) {
                    if (a === 0 || a === square - 1) {
                        temp += grid[i + a][j + k - 1]
                    }
                    else {
                        if (a < k) {
                            temp += grid[i + a][j + k - 1 - a] + grid[i + a][j + k - 1 + a]
                        }
                        else {
                            temp += grid[i + a][j +  k - 1 - (square - 1 - a)] + grid[i + a][j + k - 1 + (square - 1 - a)]
                        }
                    }
                }
                if (temp > max1) {
                    [max1, temp] = [temp, max1]
                }
                if (temp !== max1 && temp > max2) {
                    [max2, temp] = [temp, max2]
                }
                if (temp !== max1 && temp !== max2 && temp > max3) {
                    [max3, temp] = [temp, max3]
                }
            }
        }
    }

    let maxK = Math.floor((Math.min(m, n) + 1) / 2)
    for (let k = 1; k <= maxK; k++) {
        cal(k)
    }
    const ans = []
    if (max1 !== -1) ans.push(max1)
    if (max2 !== -1) ans.push(max2)
    if (max3 !== -1) ans.push(max3)
    return ans
};

const grid = [[15,14,15,19,6,18,15,14],[18,7,8,10,3,5,11,19],[20,11,10,1,6,3,16,3],[7,14,4,9,18,14,13,3],[20,5,15,3,9,8,16,16],[6,7,4,12,2,19,11,20],[20,11,10,3,4,9,5,15],[13,10,4,18,16,2,4,20]]
console.log(getBiggestThree(grid))