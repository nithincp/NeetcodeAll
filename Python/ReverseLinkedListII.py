class ListNode:
    def __init__(self,val=0,next=None) -> None:
        self.val = val
        self.next = next

def reverseBetween(head,left,right):
    
    if head == None or left == right:
        return head
    
    dummy = ListNode(0,head)
    prev = dummy

    for i in range(left-1):
        prev = prev.next

    curr = prev.next

    for i in range(right-left):
        next_node = curr.next
        curr.next = next_node.next
        next_node.next = prev.next
        prev.next = next_node

    return dummy.next
