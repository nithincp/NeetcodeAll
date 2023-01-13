function ListNode(val,next){
    this.val = (val === undefined) ? 0 : val
    this.next = (next === undefined) ? null : next
}

var isPalindrome = function(head){
    let slow = head
    let fast = head

    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }

    let temp = null
    let prevNode = null

    while(slow){
        temp = slow.next
        slow.next = prevNode
        prevNode = slow
        slow = temp
    }

    while(prevNode && head){
        if(prevNode.val !== head.val){
            return false
        }
    }

    return true

}