## Leetcode Problem - 160

class ListNode:
    def __init__(self,val=0,next=None) -> None:
        self.val = val
        self.next = next

class Solution:
    def getIntersectionNode(headA,headB):
        
        l1,l2 = headA,headB

        while l1 !=l2:
            l1 = l1.next if l1 else headB
            l2 = l2.next if l2 else headA

        return l1
        