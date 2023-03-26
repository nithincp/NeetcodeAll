class TreeNode:
    def __init__(self,val=0,left=None,right=None) -> None:
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def goodNodesInBinaryTree(root):

        def helper(node,maxVal):
            if not node:
                return 0
            
            res = 1 if node.val>=maxVal else 0
            maxVal = max(node.val,maxVal)
            res+=helper(node.left,maxVal)
            res+=helper(node.right,maxVal)

            return res

        return helper(root,root.val)