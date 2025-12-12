/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function(tasks) {
    const POW = 10 ** 5
    const order = []
    const n = tasks.length
    for (let i = 0; i < n; i++) {
        tasks[i].push(i)    // 添加编号
    }
    tasks.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0]
        else return a[2] - b[2]
    })   // [入队时间，执行时间，编号]

    const minQueue = new PriorityQueue((a, b) => {
        if (a[1] !== b[1]) return a[1] - b[1]
        else return a[0] - b[0]
    })    // [编号，processingTime]
    let time = 0
    let p = 0
    // 边执行，边入队
    while (p < n) {
        if (minQueue.size() === 0 && time < tasks[p][0]) {
            time = tasks[p][0]
        }
        while (p < n && tasks[p][0] <= time) {
            minQueue.enqueue([tasks[p][2], tasks[p][1]])
            p++
        }
        if (minQueue.size() > 0) {
            const temp = minQueue.dequeue()
            time += temp[1]
            order.push(temp[0])
        }
    }
    // 全部都入队了，剩下来的依次按顺序执行
    while (minQueue.size() > 0) {
        order.push(minQueue.dequeue()[0])
    }
    return order
};

const tasks = [[1,2],[2,4],[3,2],[4,1]]
console.log(getOrder(tasks))  // [0,2,3,1]