function ListNode(val,next){
    this.val = (val === undefined ? 0 : val)
    this.next = (next ===undefined ? null : next)
}

var addTwoNumbers = function(l1,l2){
    let dummy = new ListNode()
    let head = dummy

    let carry = 0

    while(l1 || l2 || carry){
        let val1 = l1 ? l1.val : 0
        let val2 = l2 ? l2.val : 0

        let val = val1 + val2 + carry
        carry = Math.floor(val/10)
        val = val%10
        node = new ListNode(val)

        dummy.next = node
        dummy = dummy.next
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
    }

    return head.next
}