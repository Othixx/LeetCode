/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */

#include <stdio.h>
#include <malloc.h>

struct ListNode{
    int val;
    struct ListNode *next;
};

struct ListNode* Insert(struct ListNode* L, int k){
    struct ListNode* tmp;
    tmp = malloc(sizeof(struct ListNode));
    tmp->val = k;
    tmp->next = L;
    return tmp;
}

struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2){
    struct ListNode* l3;
    l3 = malloc(sizeof(struct ListNode));
    struct ListNode* root = l3;
    struct ListNode* prev;

    //初始化l3
    l3->val = 0;
    l3->next = NULL;
    
    int flag1=1, flag2=1;   //两个记忆器，标记l1，l2是否遍历到头
    while(flag1 || flag2){
        int a, b;   //a标记当前位，b标记进位
        a = (l3->val + l1->val + l2->val) % 10;
        b = (l3->val + l1->val + l2->val) / 10;

        //当前位
        l3->val = a;

        //进位
        //初始化tmp
        struct ListNode* tmp;
        tmp = malloc(sizeof(struct ListNode));
        tmp->next = NULL;
        //进位操作
        tmp->val = b;
        
        l3->next = tmp;
        prev = l3;
        l3 = l3->next;
        if(flag1){
            l1 = l1->next;
        }
        if(flag2){
            l2 = l2->next;
        }
        if(l1 == NULL){
            flag1 = 0;
            l1 = malloc(sizeof(struct ListNode));
            l1->val = 0;
        }
        if(l2 == NULL){
            flag2 = 0;
            l2 = malloc(sizeof(struct ListNode));
            l2->val = 0;
        }
    }
    if(l3->val == 0){
        prev->next = NULL;
        free(l3);
    }
    return root;
}

int main(){
    struct ListNode* l1 = NULL;
    struct ListNode* l2 = NULL;
    struct ListNode* l3;

    for(int i=0;i<7;i++){
        l1 = Insert(l1, 9);
    }
    for(int i=0;i<4;i++){
        l2 = Insert(l2, 9);
    }

    l3 = addTwoNumbers(l1, l2);

    return 0;
}