/**
 * @param {number} numArrows
 * @param {number[]} aliceArrows
 * @return {number[]}
 */
var maximumBobPoints = function (numArrows, aliceArrows) {
    let maxPoint = 0
    let bobArrows = []
    const tempArrows = []
    const dfs = function (i, nowCountArrow, point) {
        if (i === 12) {
            if (point > maxPoint) {
                bobArrows = new Array(...tempArrows)
                maxPoint = point
            }
            return
        }
        // 选或不选
        let thisBobArrow = aliceArrows[i] + 1
        if (i === 11 && nowCountArrow < numArrows) {
            thisBobArrow = numArrows - nowCountArrow
            if (thisBobArrow > aliceArrows[i]) {
                point += i
                tempArrows.push(thisBobArrow)
                dfs(i + 1, thisBobArrow + nowCountArrow, point)
                point -= i
                tempArrows.pop()
            }
            else {
                tempArrows.push(thisBobArrow)
                dfs(i + 1, thisBobArrow + nowCountArrow, point)
                tempArrows.pop()
            }
        }
        else {
            if (thisBobArrow + nowCountArrow <= numArrows) {
                // 选的前提条件，不能超出
                point += i
                tempArrows.push(thisBobArrow)
                dfs(i + 1, thisBobArrow + nowCountArrow, point)
                point -= i
                tempArrows.pop()
            }
            tempArrows.push(0)
            dfs(i + 1, nowCountArrow, point)    // 不选
            tempArrows.pop()
        }
    }

    dfs(0, 0, 0)
    return bobArrows
};

const numArrows = 9
const aliceArrows = [1,1,0,1,0,0,2,1,0,1,2,0]
console.log(maximumBobPoints(numArrows, aliceArrows))