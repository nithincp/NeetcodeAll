## Leetcode Problem - 876

class ListNode:
    def __init__(self,val=0,next=None) -> None:
        self.val = val
        self.next = next


class Solution:
    def middleNode(head):
        slow = head
        fast = head

        while fast.next and fast.next.next:
            slow = slow.next
            fast = fast.next.next

        if fast.next == None:
            return slow
        
        if fast.next.next == None:
            return slow.next
        