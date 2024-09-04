const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let t = await readline();
    let line = await readline();
    let tokens = line.split(' ');
    tokens.sort((a, b) => {
        if(a < b) return -1;
        else return 1;
    });
    console.log(tokens.join(' '));

    rl.close();
    process.exit();
    
//     rl.close();
//     while(line = await readline()){
//         let tokens = line.split(' ');
//         for(let i = 0; i < tokens.length; i++){
//             tokens[i] = parseInt(tokens[i]);
//         }
//         if(tokens[0] === 0){
//             rl.close();
//             process.exit();
//         }
//         let ans = 0;
//         for(let i = 1; i < tokens[0]; i++){
//             ans += tokens[i];
//         }
//         console.log(ans);
//     }
}()
