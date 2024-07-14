// @before-stub-for-debug-begin
#include <vector>
#include <string>
#include "commoncppproblem138.h"

using namespace std;
// @before-stub-for-debug-end

/*
 * @lc app=leetcode.cn id=138 lang=cpp
 *
 * [138] 随机链表的复制
 */

// @lc code=start
/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* next;
    Node* random;
    
    Node(int _val) {
        val = _val;
        next = NULL;
        random = NULL;
    }
};
*/

class Solution {
public:
    Node* copyRandomList(Node* head) {
        // 遍历原链表，转换成数组和新链表
        Node* p = head;    // 遍历指针
        // Node* nxt;  // 遍历的下一个指针
        Node* cpy_head;
        Node* cpy_p;
        bool flag = true;
        vector<int> position;   // 存储random指向的相对位置
        while(p){
            // 复制原链表
            // Node(p->val);
            if(!p->val) break;
            Node* temp = new Node(p->val);
            if(flag){   // 头结点
                cpy_head = temp;
                cpy_p = cpy_head;
                flag = false;
            }
            else{
                cpy_p->next = temp;
                cpy_p = cpy_p->next;
            }

            // 存储random
            if(p->random){
                Node* visit = p->random;
                Node* q = head;
                int count = 0;
                while(q){
                    if(q == visit) break;
                    q = q->next;
                    count++;
                }
                position.push_back(count);
            }
            else{   // p->random指空
                position.push_back(-1);
            }

            p = p->next;
        }

        // 根据数组转成新链表
        cpy_p = cpy_head;
        for(int i = 0; i < position.size(); i++){
            if(position[i] != -1){
                Node* cpy_q = cpy_head;
                int count = 0;
                while(count != position[i]){
                    cpy_q = cpy_q->next;
                    count++;
                }
                cpy_q->random = cpy_q;
            }
            cpy_p = cpy_p->next;
        }

        return cpy_head;

    }
};
// @lc code=end

