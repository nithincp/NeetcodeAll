class TreeNode:
    def __init__(self,val=0,left=None,right=None) -> None:
        self.val = val
        self.left = left
        self.right = right



class Solution:
    def preOrderTraversal(root):

        outputList = []

        def helper(node,outputList):
            if not node:
                return None
            
            outputList.append(node.val)
            helper(node.left,outputList)
            helper(node.right,outputList)


        helper(root,outputList)

        return outputList