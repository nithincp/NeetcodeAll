function ListNode(val,next){
    this.val = (val === undefined ? 0:val)
    this.next = (next === undefined ? 0:next)
}


var reverseLinkedList = new function(head){
    let tempNode = new ListNode()
    let prevNode = null

    while(head){
        tempNode = head.next
        head.next = prevNode
        prevNode = head
        head = tempNode
    }
    return prevNode
}