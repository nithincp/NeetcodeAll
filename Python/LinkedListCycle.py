def hasCycle(head):
    slow = fast = head

    while fast and fast.next!=None:
        slow = slow.next
        fast = fast.next
        if slow == fast:
            return True
        
    return False