class ListNode:
    def __init__(self,val=0,next=None):
        self.val = val
        self.next = next

def reverseLinkedList(head):
    tempNode = ListNode()
    prevNode = None

    while head:
        tempNode = head.next
        head.next = prevNode
        prevNode = head
        head = tempNode

    return prevNode