var ListNode = function(val,next){
    this.val = (val === undefined) ? 0 : val
    this.next = (next === undefined) ? null : next
}

var removeDuplicates = function(head){
    let slow = head
    let fast = head

    while(fast && fast.next){
        if(fast.next.val !== fast.val){
            slow.next = fast.next
            slow = fast.next
        }
        else{
            if(fast.next.next === null){
                slow.next = null
            }
        }
        fast = fast.next
    }

    return head
}