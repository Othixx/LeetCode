/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function (digits) {
    digits.sort((a, b) => {
        return a - b;
    });
    let singleDigits = [];
    singleDigits.push(digits[0]);
    for (let i = 1; i < digits.length; i++) {
        // 去重
        if (digits[i] !== singleDigits[singleDigits.length - 1]) {
            singleDigits.push(digits[i]);
        }
    }
    let ans = 0;
    for (let i = 0; i < singleDigits.length; i++) {
        if (singleDigits[i] % 2 === 0) {
            let endNum = singleDigits[i];
            // 从排好序的digits中删去刚才放进去的数，并暂存到新数组里
            let temp = [];
            let j = 0;
            for (; j < digits.length; j++) {
                if (digits[j] === endNum) break;
            }
            if (j === 0) {
                // 如果删去的刚好是digits中的第一个数
                temp = digits.slice(1, digits.length);
            } else if (j === digits.length - 1) {
                // 如果删去的刚好是digits中的最后一个数
                temp = digits.slice(0, digits.length - 1);
            } else {
                temp = [
                    ...digits.slice(0, j),
                    ...digits.slice(j + 1, digits.length),
                ];
            }
            // 如果剩下的temp中还有0，那么放0进来
            if (temp[0] === 0) ans += singleDigits.length - 1;
            // 检查数字在temp中出现两次的个数
            // if (sigleDigits[0] === 0) j = 1;
            // else j = 0;
            for (j = 0; j < digits.length; j++) {
                if(digits[j] !== 0){
                    if(j + 1 < digits.length && digits[j] === digits[j + 1]){
                        ans++;
                        while(j + 1 !== digits.length && digits[j] === digits[j + 1]){
                            j++;
                        }
                    }
                }
            }
            // 余下的数进行排列组合
            if(singleDigits[0] === 0) ans += (singleDigits.length - 1) * (singleDigits.length - 2);
            else ans += singleDigits.length * (singleDigits.length - 1)
        }
    }
};
