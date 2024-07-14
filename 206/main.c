/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
//注意，力扣上空指针可能会有使用问题，因此这里代码有点奇怪

#include <stdio.h>
#include <malloc.h>

struct ListNode {
    int val;
    struct ListNode *next;
};

//链表头插
struct ListNode* Insert(int x, struct ListNode* head){
    struct ListNode* tmp;
    tmp = malloc(sizeof(struct ListNode));
    tmp->val = x;
    tmp->next = head;
    head = tmp;
    return head;
}

struct ListNode* reverseList(struct ListNode* head){
    if(head && !head->next || !head){
        return head;
    }
    else if(head){
        head->next = reverseList(head->next);
        struct ListNode* p;
        p = head;
        while(p->next){
            p = p->next;
        }
        p->next = head;
        head = head->next;
        p->next->next = NULL;
        return head;
    }
    return head;
}

int main(){
    struct ListNode* List;
    List=NULL;
    for(int i=5;i>=1;i--){
        List=Insert(i,List);
    }
    List=reverseList(List);
    return 0;
}