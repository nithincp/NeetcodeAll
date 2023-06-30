// Leetcode Problem - 160

function ListNode(val,next){
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var getIntersectionNode = function(headA,headB){
    let [l1,l2] = [headA,headB]

    while (l1!==l2){
        l1 = (l1 ? l1.next : headB)
        l2 = (l2 ? l2.next : headA)
    }

    return l1
}