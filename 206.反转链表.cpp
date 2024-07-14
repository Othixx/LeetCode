// @before-stub-for-debug-begin
#include <vector>
#include <string>
#include "commoncppproblem206.h"

using namespace std;
// @before-stub-for-debug-end

/*
 * @lc app=leetcode.cn id=206 lang=cpp
 *
 * [206] 反转链表
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
class Solution
{
public:
    ListNode *reverseList(ListNode *head)
    {
        ListNode *p; // 指针p，指向当前位置
        ListNode *temp;
        int count = 0; // 计数器
        p = head;
        while (p->next != NULL) // 反转
        {
            temp = p; // 将p指针所指的结构体发送给temp
            if (count == 0)
            {
                p->next = NULL;
            }
            count++;
            head->next = p;
            p = temp.next;
        }
        head = p;
        return head;
    }
};
// @lc code=end

