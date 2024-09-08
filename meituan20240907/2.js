const { hash } = require("crypto");

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    let line = await readline();
    let T = parseInt(line);
    for (let round = 0; round < T; round++) {
        line = await readline();
        n = parseInt(line);
        if(n === 1){
            console.log(0);
            continue;
        }

        // 生成一个hashMap
        let hashMap = new Array(n + 1).fill(0);
        let matrix = new Array(n + 1);      // 二维矩阵，代表两个结点之间是否存在一条边
        for(let i = 0; i < n + 1; i++){
            matrix[i] = new Array(n + 1).fill(0);
        }

        for(let i = 0; i < n - 1; i++){
            line = await readline();
            let tokens = line.split(' ');
            let a = parseInt(tokens[0]);
            let b = parseInt(tokens[1]);
            if(a > b){
                let temp = b;
                b = a;
                a = temp;
            }
            matrix[a][b] = 1;
        }
        let stack = [1];
        while(stack.length !== 0){
            let temp = 0;
            for(let j = 1; j <= n; j++){
                if(matrix[stack[0]][j] === 1){
                    stack.push(j);
                    // matrix[stack[0]][j] = 0;
                    temp++;
                }
            }
            hashMap[stack[0]] = temp;
            stack.shift();
        }

        let newMap = [];
        for(let i = 1; i <= n; i++){
            newMap.push(hashMap[i]);
        }
        newMap.sort((a,b) => {
            return a - b;
        });

        // 统计有多少个相似的结点
        let ans = 0;
        // let max = hashMap[n];
        let cnt = 1;
        for(let i = 1; i < n; i++){
            if(newMap[i] === newMap[i - 1]) cnt++;
            else{
                if(cnt > 1){
                    ans += cnt * (cnt - 1) / 2;
                }
                cnt = 1;
            }
        }
        if(cnt > 1) ans += cnt * (cnt - 1) / 2;
        console.log(ans);
        // console.log(1);
    }
    rl.close();
    process.exit();
    // while(line = await readline()){
    //     let tokens = line.split(' ');
    //     let a = parseInt(tokens[0]);
    //     let b = parseInt(tokens[1]);
    //     console.log(a + b);
    // }
})();
