class ListNode:
    def __init__(self,val,next) -> None:
        self.val = val
        self.next = next

class Solution:
    def isPalindrome(self,head) -> bool:
        slow = fast = head

        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        prevNode = None
        while slow:
            temp = slow.next
            slow.next = prevNode
            prevNode = slow
            slow = temp

        while prevNode and head:
            if prevNode.val != head.val:
                return False
            prevNode = prevNode.next
            head = head.next

        return True