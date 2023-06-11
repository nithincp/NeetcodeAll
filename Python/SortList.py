#Leetcode Probelm - 148

class ListNode:
    def __init__(self,val=0,next=None) -> None:
        self.val = val
        self.next = next

class Solution:
    def sortList(self,head):

        def getMiddle(head):
            slow = fast = head

            while fast.next and fast.next.next:
                slow = slow.next
                fast = fast.next.next

            return slow
        
        def merge(h1,h2):

            if h1.val>h2.val:
                h3 = h2
                l = h2
                h2 = h2.next
            else:
                h3 = h1
                l = h1
                h1 = h1.next

            while h1 and h2:
                if h1.val>h2.val:
                    l.next = h2
                    h2 = h2.next
                else:
                    l.next = h1
                    h1 = h1.next

                l = l.next

            if h1 is None:
                l.next = h2
            if h2 is None:
                l.next = h1

            return h3

        if head is None:
            return head
        
        if head.next is None:
            return head
        
        h1 = head
        mid = getMiddle(head)
        h2 = mid.next
        mid.next = None

        h1 = self.sortList(h1)
        h2 = self.sortList(h2)

        return merge(h1,h2)
        



# Input: head = [4,2,1,3]
# Output: [1,2,3,4]