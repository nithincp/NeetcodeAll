var reorderList = function(head){
    //find the middle
    let slow = head
    let fast = head
    while(fast!==null && fast.next!==null){
        slow=slow.next
        fast=fast.next.next
    }

    let slowDummy = slow
    let prevNode = null
    let temp = null
    while(slow){
        temp = slow.next
        slow.next = prevNode
        prevNode = slow
        slow = temp
    }

    let second = prevNode
    let first = head

    let temp1 = null
    let temp2 = null
    while(first!==slowDummy && second!==null){
        temp1 = first.next
        temp2 = second.next
        first.next = second
        if(second.next!==null){
            second.next=temp1
        }
        first = temp1
        second = temp2
    }

    return head



}