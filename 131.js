/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let n = s.length;
    let temp = [];
    let ans = [];
    let isHuiwen = function(s){
        let i = 0;
        let j = s.length - 1;
        while(i < j){
            if(s[i] == s[j]){
                i++;
                j--;
            }
            else{
                break;
            }
        }
        if(i >= j) return true;
        else return false;
    };

    let dfs = function(pointer, douhao){
        if(douhao === n){
            let zichuan = s.slice(pointer, douhao);
            if(isHuiwen(zichuan)){
                temp.push(zichuan);
                ans.push(Array.from(temp));
                temp.pop();
            }
            return;
        }

        // 选当前逗号
        let zichuan = s.slice(pointer, douhao);
        // 判断是否回文，是继续，否则剪枝
        if(isHuiwen(zichuan)){
            temp.push(zichuan);
            dfs(douhao, douhao + 1);     // dfs;
            temp.pop();
        }

        // 不选当前逗号
        dfs(pointer, douhao + 1);   // dfs
    };

    dfs(0, 1);
    return ans;
};

s = "aab";
partition(s);