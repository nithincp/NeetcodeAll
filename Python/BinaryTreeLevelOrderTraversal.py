from collections import deque

class TreeNode:
    def __init__(self,val=0,left=None,right=None) -> None:
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def levelOrderTraversal(root):

        if root is None:
            return []
        
        queue = deque()
        outputArray = []

        while len(queue)> 0 :
            innerArray = []
            for i in range(len(queue)):
                cur = queue.popleft()
                innerArray.append(cur.val)
                if cur.left:
                    queue.append(cur.left)
                if cur.right:
                    queue.append(cur.right)

            outputArray.append(innerArray)

        return outputArray