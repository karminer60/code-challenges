/**
Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let i = 0 
    let j = 0
    let outputList = []
    //I can use a recursive function
    while(i < list1.length || j < list2.length){
        if(i < list1.length && (j >= list2.length || list1[i] <= list2[j])){
            outputList.push(list1[i])
            i++
        }
        else{
            outputList.push(list2[j])
            j++
        }
    }

    
};