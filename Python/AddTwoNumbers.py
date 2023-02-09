class ListNode:
    def __init__(self,val=0,next=None) -> None:
        self.val = val
        self.next = next

def addTwoNumbers(l1,l2):
    head = dummy = ListNode()

    carry = 0

    while l1 or l2 or carry:
        val1 = l1.val if l1 else 0
        val2 = l2.val if l2 else 0

        val = val1 + val2 + carry
        carry = val//10
        val = val%10
        node = ListNode(val)

        dummy.next = node
        dummy = dummy.next
        l1 = l1.next if l1 else None
        l2 = l2.next if l2 else None

    return head.next