class TreeNode:
    def __init__(self,val=0,left=None,right=None) -> None:
        self.val = val
        self.left = left
        self.right = right

##Recursion
class Solution:
    def kthSmallestElementBST(root):

        array = []

        def dfs(node):
            nonlocal array

            if not node:
                return
            
            dfs(node.left)
            array.append(node.val)
            dfs(node.right)

        dfs(root)

        return array[k-1]
