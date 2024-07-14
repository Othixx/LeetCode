// @before-stub-for-debug-begin
#include <vector>
#include <string>
#include "commoncppproblem92.h"

using namespace std;
// @before-stub-for-debug-end

/*
 * @lc app=leetcode.cn id=92 lang=cpp
 *
 * [92] 反转链表 II
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
    ListNode *reverseBetween(ListNode *head, int left, int right)
    {
        ListNode *list_prev;
        list_prev = (ListNode *)malloc(sizeof(struct ListNode));
        // list_prev->next = head;

        ListNode *list_next;
        list_next = (ListNode *)malloc(sizeof(struct ListNode));
        list_next->next = head->next;

        int count = 1;
        ListNode *p = head;
        ListNode *nextp;
        ListNode *temp = p; // temp指向反转链表开始的地方
        ListNode *prev_left;

        while (p)
        { // 遍历
            nextp = p->next; // 记录当前节点的下一个节点
            if(count == 1){
                list_prev = head;
            }
            else if (count == left)
            {
                prev_left = p;
                p->next = nullptr;
            }
            else if (count == right)
            {
                list_prev->next = p; // 将前驱节点连接到链表对应指针上
                list_next = list_next->next;
                break;
            }
            else if (count > left)
            {
                p->next = temp;
                temp = p;
            }
            else if (count < left)
            {
                list_prev = list_prev->next;
            }
            list_next = list_next->next;

            p = nextp;
            count++;
        }
        prev_left->next = list_next;

        return head;
    }
};
// @lc code=end

