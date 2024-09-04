let T = 1;
let tokens = [6, 3, 3];
let nums = [4, 5, 2, 3, 1, 0];
for(let round = 0; round < T; round++){
    // line = await readline();
    // let tokens = line.split(' ');
    let n = tokens[0];
    let k = tokens[1];
    let x = tokens[2];
    // line = await readline();
    // let nums = line.split(' ');

    // 找到初始最小的数
    let flag = new Array(n + 1).fill(false);
    for(let i = 0; i < n; i++){
        if(!flag[nums[i]])  flag[nums[i]] = true;
    }
    let i = 0;
    for(; i < n + 1; i++){
        if(!flag[i]) break;
    }
    let mex = i;

    let numsLength = nums.length;
    let minCost = Infinity;
    let nowCost = 0;
    while(numsLength >= 0){
        let tempCost = nowCost + mex * k;
        if(tempCost < minCost) minCost = tempCost;
        if(numsLength === 0) break;
        nowCost += x;
        let temp = nums.shift();
        if(temp < mex) mex = temp;
        numsLength--;
    }

    console.log(minCost);
}