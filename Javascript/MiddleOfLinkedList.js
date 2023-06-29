// Leetcode Problem - 876

function ListNode(val,next){
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var middleNode = function(head){
    let slow = head
    let fast = head

    while (fast.next && fast.next.next){
        slow = slow.next
        fast = fast.next.next
    }

    if (fast.next === null){
        return slow
    }else if (fast.next.next === null){
        return slow.next
    }
}