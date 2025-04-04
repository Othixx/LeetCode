/*
 * @lc app=leetcode.cn id=901 lang=javascript
 *
 * [901] 股票价格跨度
 */

// @lc code=start

let st = new Array();
let st_index = new Array();
let tempDays = new Array();
let i = 0;
var StockSpanner = function () {

};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
    let ans = 1;
    let temp = 0;

    while (st.length !== 0 && st[st.length - 1] < price) {
        // ans++;
        st.pop();
        temp = st_index.pop();
        ans += tempDays[temp];
    }
    // if (tempDays.length !== 0) {
    //     ans += tempDays[temp];
    // }
    // else ans = 1;
    st.push(price);
    tempDays.push(ans);
    st_index.push(i);
    i++;
    return ans;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
// @lc code=end


// @after-stub-for-debug-begin
module.exports = StockSpanner;
// @after-stub-for-debug-end