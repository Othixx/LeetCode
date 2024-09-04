/**
 * @param {string[]} testStrings
 * @param {string} password
 * @return {number}
 */
let lowestTryTimes = function(testStrings, password){
    // 排序
    testStrings.sort((a, b) => {
        return a - b;
    });
};

let testStrings = ['ba', 'ab', 'a', 'bc'];
lowestTryTimes(testStrings);