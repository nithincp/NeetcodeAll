var ListNode = function(val,next){
    this.val = (val===undefined) ? 0:val
    this.next = (next===undefined) ? null:next
}

var mergeTwoSortedLists = function(list1, list2){
    let cur = ListNode()
    let dummy = cur

    while(list1 && list2){
        if(list2.val<list1.val){
            cur.next = list2
            list2 = list2.next
        }
        else{
            cur.next = list1
            list1 = list1.next
        }
        cur = cur.next
    }

    if(list1){
        cur.next = list1
    }
    else if(list2){
        cur.next = list2
    }

    return dummy.next
}