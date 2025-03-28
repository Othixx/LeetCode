/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let n = temperatures.length;
    let answer = new Array(n).fill(0);
    let indexStack = new Array();
    indexStack.push(0);
    for(let i = 1; i < n; i++){
        // 从左向右，栈中只放比当前温度更低(<=)的，遇到更高的就要pop出去
        while(indexStack.length !== 0 && temperatures[i] > temperatures[indexStack[indexStack.length - 1]]){
            answer[indexStack[indexStack.length - 1]] = i - indexStack[indexStack.length - 1];
            indexStack.pop();
        }
        indexStack.push(i);
    }
    return answer;
};

let temperatures = [73,74,75,71,69,72,76,73];
console.log(dailyTemperatures(temperatures)); // [1,1,4,2,1,1,0,0]