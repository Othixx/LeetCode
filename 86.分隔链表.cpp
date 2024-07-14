// @before-stub-for-debug-begin
#include <vector>
#include <string>
#include "commoncppproblem86.h"

using namespace std;
// @before-stub-for-debug-end

/*
 * @lc app=leetcode.cn id=86 lang=cpp
 *
 * [86] 分隔链表
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
    ListNode* partition(ListNode* head, int x) {
        // 拉两个链表
        ListNode* smalllist = NULL, biglist = NULL;   // 两个链表头结点
        ListNode* smallend, bigend;     // 两个链表尾结点
        bool small = true, big = true;
        ListNode* p;
        ListNode* nxt;

        p = head;
        while(p){
            nxt = p->next;
            p->next = NULL;
            if(p->val < x){
                if(small){
                    // 第一结点
                    smalllist = p;
                    smallend = p;
                    small = !small;
                }
                else{
                    smallend->next = p;
                    smallend = smallend->next;
                }
            }
            else{
                if(big){
                    biglist = p;
                    bigend = p;
                    big = !big;
                }
                else{
                    bigend->next = p;
                    bigend = bigend->next;
                }
            }
            p = nxt;
        }

        // 拼接
        if(biglist){
            smallend->next = biglist;
        }

        return smalllist;
    }
};
// @lc code=end

