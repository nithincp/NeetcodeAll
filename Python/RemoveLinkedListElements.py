def removeElements(head,val):
    dummy = head
    prevNode = None

    while dummy:
        if dummy.val == val:
            if prevNode == None:
                head = head.next
                dummy = dummy.next
                continue

            prevNode.next = dummy.next
            dummy = dummy.next
            continue
        
        prevNode = dummy
        dummy = dummy.next

    return head