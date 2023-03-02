class ListNode():
    def __init__(self,val,next) -> None:
        self.val = val
        self.next = next


def removeDuplicates(head):
    slow = fast = head

    while fast and fast.next:
        if fast.next.val != fast.val:
            slow.next = fast.next
            slow = fast.next
        else:
            if fast.next.next == None:
                slow.next = None
        
        fast = fast.next

    return head