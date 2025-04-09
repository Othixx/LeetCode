/**
 * @param {number[]} chargeTimes
 * @param {number[]} runningCosts
 * @param {number} budget
 * @return {number}
 */
var maximumRobots = function(chargeTimes, runningCosts, budget) {
    let n = chargeTimes.length;
    let q = [];     // 最大值队列
    let sum = 0;
    let l = 0;      // 左指针
    let ans = 0;
    for(let i = 0; i < n; i++){
        while(q.length !== 0 && chargeTimes[q[q.length - 1]] <= chargeTimes[i]){
            q.pop();
        }
        q.push(i);
        sum += runningCosts[i];
        while(q.length !== 0 && chargeTimes[q[0]] + (i - l + 1) * sum > budget){
            if(l === q[0]){
                q.shift();
            }
            sum -= runningCosts[l];
            l++;
        }
        ans = Math.max(ans, i - l + 1);
    }
    return ans;
};

let chargeTimes = [11,12,74,67,37,87,42,34,18,90,36,28,34,20];
let runningCosts = [18,98,2,84,7,57,54,65,59,91,7,23,94,20];
let budget = 937;
console.log(maximumRobots(chargeTimes, runningCosts, budget)); // 4