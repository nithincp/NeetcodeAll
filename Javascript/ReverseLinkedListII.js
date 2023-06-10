// Leetcode Problem - 92

var ListNode = function(val,next){
    this.val = val
    this.next = next
}

var reverseBetween = function(head,left,right){
    
    if (head === null || left === right){
        return head
    }

    const dummy = new ListNode(0,head)
    let prev = dummy

    for (let i=0;i<(left-1);i++){
        prev = prev.next
    }

    const curr = prev.next

    for (let i=0;i<(right-left);i++){
        const next_node = curr.next
        curr.next = next_node.next
        next_node.next = prev.next
        prev.next = next_node
    }

    return dummy.next
}