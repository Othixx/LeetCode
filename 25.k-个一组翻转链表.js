/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    let dummy = new ListNode(0, head);
    let p = head;
    if (p.next === null) return head;
    let cnt = 0;
    let firstNode = head;
    let prev = dummy;
    while (p) {
        cnt++;
        if (cnt % k === 0) {
            cnt = 0;
            let lastNext = p.next;

            // 调换顺序，从firstNode 到 p一共k个节点
            let q = firstNode;
            let tempHead = p.next;
            let nextPrev = q;
            for (let i = 0; i < k; i++) {
                let nxt = q.next;
                q.next = tempHead;
                tempHead = q;
                if(i === 0) nextPrev = q;
                q = nxt;

            }
            prev.next = tempHead;
            prev = nextPrev;
            firstNode = prev.next;
            p = firstNode;
        }
        else p = p.next;
    }
    return dummy.next;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = reverseKGroup;
// @after-stub-for-debug-end