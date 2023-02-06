class Node:
    def __init__(self,val,next = None, random = None) -> None:
        self.val = val
        self.next = next
        self.random = random

def copyList(head):

    oldToCopy = {None:None}
    cur = head

    while cur:
        copy = Node(cur.val)
        oldToCopy[cur] = copy
        cur = cur.next


    cur = head
    while cur:
        copy = oldToCopy[cur]
        copy.next = oldToCopy[cur.next]
        copy.random = oldToCopy[cur.random]
        cur = cur.next

    return oldToCopy[head]
