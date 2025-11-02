/**
 * @param {number[][]} squares
 * @return {number}
 */
var separateSquares = function(squares) {
    let maxY = 0
    let totalArea = 0
    for (const sq of squares) {
        let l = sq[2]
        totalArea += l * l
        maxY = Math.max(maxY, sq[1] + l)
    }

    const check = (squares, y, totalArea) => {
        let area = 0
        for (const sq of squares) {
            let yi = sq[1]
            if (yi < y) {
                let l = sq[2]
                area += l * Math.min(y - yi, l)
            }
        }
        return area >= totalArea / 2
    }

    let left = 0, right = maxY
    for (let i = 0; i < 48; i++) {
        let mid = (left + right) / 2
        if (check(squares, mid, totalArea)) right = mid
        else left = mid
    }
    return (left + right) / 2
};

const squares = [[0,0,1],[2,2,1]]
console.log(separateSquares(squares))