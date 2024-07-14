// @before-stub-for-debug-begin
#include <vector>
#include <string>
#include "commoncppproblem23.h"

using namespace std;
// @before-stub-for-debug-end

/*
 * @lc app=leetcode.cn id=23 lang=cpp
 *
 * [23] 合并 K 个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        // // 针对每个list的开头新建哨兵节点
        // vector<ListNode*> dummy;
        // for(int i = 0; i < lists.size(); i++){
        //     ListNode* temp = new ListNode(-99999);
        //     temp->next = lists[i];
        //     dummy.push_back(temp);
        // }
        vector<ListNode*> p;
        for(int i = 0; i < lists.size(); i++){
            p.push_back(lists[i]);
        }

        // 遍历
        ListNode* mergedummy = new ListNode(-99999);    // 新链表的哨兵节点
        ListNode* prev = mergedummy;
        while(1){
            ListNode* nxt = NULL;
            int position = -1;  // 需要最终更新链表的位置
            int i = 0;
            for(; i < lists.size(); i++){
                if(nxt){    // nxt不空
                    if(p[i]){
                        if(p[i]->val < nxt->val) {
                            nxt = p[i];
                            position = i;
                        }
                    }
                }
                else{   // nxt为空，此时遇到任何存在的数都填入
                    if(p[i]){
                        nxt = p[i];
                        position = i;
                    }
                }
            }
            if(position == -1) break;       // 所有链表为空，结束
            prev->next = nxt;
            prev = prev->next;
            p[position] = p[position]->next;
        }
        return mergedummy->next;
    }
};
// @lc code=end

