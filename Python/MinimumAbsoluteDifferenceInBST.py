class TreeNode:
    def __init__(self,val=0,left=None,right=None) -> None:
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def getMinimumDifference(root):

        def dfs(root,values):
            if root is None:
                return
            
            dfs(root.left,values)
            values.append(root.val)
            dfs(root.right,values)
            
        values = []
        dfs(root,values)

        values.sort()

        minDiff = float("inf")
        for i in range(len(values)-1):
            minDiff = min(minDiff,abs(values[i]-values[i+1]))

        return minDiff

