from collections import deque

class TreeNode:
    def __init__(self,val=0,left=None,right=None) -> None:
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def binaryTreeRightSideView(root):
        outputList = []
        queue = deque()
        levelSet = set()

        level = 0

        if root:
            queue.append((root,level))

        while len(queue)>0:
            level += 1
            for i in range(len(queue)):
                curr,levelToCheck = queue.popleft()
                if levelToCheck not in levelSet:
                    outputList.append(curr.val)
                    levelSet.add(levelToCheck)

                if curr.right:
                    queue.append((curr.right,level))
                if curr.left:
                    queue.append((curr.left,level))


        return outputList