var removeElements = function(head,val){
    let dummy = head
    let prevNode = null

    while(dummy){
        if(dummy.val === val){
            if(prevNode === null){
                head = head.next
                dummy = dummy.next
                continue
            }
            prevNode.next = dummy.next
            dummy = dummy.next
            continue
        }
        prevNode = dummy
        dummy = dummy.next
    }

    return head
}