#include <bits/stdc++.h>

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
    ListNode *reverseBetween(ListNode *head, int left, int right)
    {
        ListNode *dummy; // 哨兵节点
        dummy = (ListNode *)malloc(sizeof(ListNode));
        dummy->next = head;
        ListNode *p0 = dummy; // 反转段的前节点
        ListNode *curr = head;
        ListNode *prev = nullptr;
        ListNode *nxt;
        int count = 1;

        while (count < left)
        {
            count++;
            curr = curr->next;
            p0 = p0->next;
        }

        while (count <= right)
        {
            count++;
            nxt = curr->next;
            curr->next = prev;
            prev = curr;
            curr = nxt;
        }

        p0->next = prev;
        p0->next->next = curr;
        head = dummy->next;
        return head;
    }
};