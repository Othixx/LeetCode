const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let line = await readline();
    let n = parseInt(line);
    let arr = new Array(n);
    for(let i = 0; i < n; i++){
        line = await readline();
        let tokens = line.split('');
        arr[i] = [];
        for(let j = 0; j < n; j++){
            arr[i].push(parseInt(tokens[j]));
        }
    }

    let mem = new Array(n);     // mem 用于记录当前矩形框从左上角开始对应的0的数量
    for(let i = 0; i < n; i++){
        mem[i] = new Array(n).fill(0);
    }

    let calZero = function(a, b, i){
        for(let m = a; m <= a + i - 1; m++){
            if(m !== a + i - 1 && m !== a + i - 2){
                if(arr[m][b + i - 2] === 0) mem[a][b]++;
                if(arr[m][b + i - 1] === 0) mem[a][b]++;
            }
            else{
                for(let n = b; n <= b + i - 1; n++){
                    if(arr[m][n] === 0) mem[a][b]++;
                }
            }
        }
        if(2 * mem[a][b] === i * i) return true;
        else return false;
    };

    for(let i = 1; i <= n; i++){
        if(i % 2 === 1){
            console.log(0);
            continue;
        }
        let ans = 0
        for(let a = 0; a < n; a++){
            if(a + i - 1 >= n) break;
            for(let b = 0; b < n; b++){
                if(b + i - 1 >= n){
                    break;
                }
                if(calZero(a, b, i)) ans++;
            }
            
        }
        console.log(ans);
    }

    rl.close();
    process.exit();
    // while(line = await readline()){
    //     let tokens = line.split(' ');
    //     let a = parseInt(tokens[0]);
    //     let b = parseInt(tokens[1]);
    //     console.log(a + b);
    // }
}()
