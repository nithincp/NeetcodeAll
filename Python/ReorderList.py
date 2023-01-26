def reorderList(head):
    #Creating a fast and slow pointer to find the middle of the list
    slow=fast=head
    while fast and fast.next:
        slow=slow.next
        fast=fast.next.next
    #the slow pointer points to the middle of the list now

    #taking a backup reference to the slow pointer as we need this pointer to the middle of the list
    slowDummy = slow
    
    #Reversing the second half of the list
    prevNode = None
    while slow:
        temp = slow.next
        slow.next=prevNode
        prevNode=slow
        slow=temp

    #second pointer now points to the last node of the second half of the list
    second=prevNode
    first=head

    #iterating over the list till the head pointer reaches the middle
    #the logic include using one node from the front and one from the last. Pairing them and this
    #goes on up until we reach the middle of the list
    while first!=slowDummy and second:
        temp1=first.next
        temp2=second.next
        first.next=second
        #if the second's next is not None, only then assign its next to the head.next value
        #else by default its next value would be pointed to None from our list reversal of the 
        #second half
        if second.next!=None:
            second.next=temp1
        first=temp1
        second=temp2

    return head