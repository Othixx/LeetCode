/*
 * @lc app=leetcode.cn id=21 lang=cpp
 *
 * [21] 合并两个有序链表
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

#include <iostream>

using namespace std;

struct ListNode
{
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution
{
public:
    ListNode *mergeTwoLists(ListNode *list1, ListNode *list2)
    {
        ListNode *mergeList = NULL;       // 合并链表的开始结点
        ListNode *p1 = list1, *p2 = list2; // 两个指针遍历原链表
        ListNode *merge_p = mergeList;    // 新链表遍历指针

        while (p1 || p2)
        {
            if (!mergeList)
            {
                if (p1)
                {
                    if (p2)
                    {
                        if (p1->val < p2->val)
                        { // p1小
                            mergeList = p1;
                            merge_p = mergeList;
                            p1 = p1->next;
                        }
                        else
                        { // p2小
                            mergeList = p2;
                            merge_p = mergeList;
                            p2 = p2->next;
                        }
                    }
                    else
                    {
                        mergeList = p1;
                        break;
                    }
                }
                else
                {
                    mergeList = p2;
                    break;
                }
            }
            else
            {
                if (p1)
                { // list1不空
                    if (p2)
                    { // list2不空
                        if (p1->val < p2->val)
                        {
                            merge_p->next = p1;
                            merge_p = merge_p->next;
                            p1 = p1->next;
                        }
                        else
                        {
                            merge_p->next = p2;
                            merge_p = merge_p->next;
                            p2 = p2->next;
                        }
                    }
                    else
                    {   // list2空
                        merge_p->next = p1;
                        break;
                    }
                }
                else
                { // list1空
                    merge_p = p2;
                    break;
                }
            }
        }

        return mergeList;
    }
};
// @lc code=end
